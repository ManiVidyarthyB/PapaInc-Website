"use client";

import { useEffect, useRef, useState } from "react";

type Msg =
  | { id: number; kind: "you"; text: string; files: string[]; time: string }
  | { id: number; kind: "info"; time: string }
  | { id: number; kind: "us"; lines: string[]; time: string };

type Conv = { id: number; msgs: Msg[]; updatedAt: number };
type Contact = { name: string; email: string };

const MAX_FILES = 5;
const MAX_SIZE = 10 * 1024 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const COMPANY = "Paragon Advisory Partners";
const timeNow = () => new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

function Avatar({ size = "lg" }: { size?: "lg" | "sm" | "xs" }) {
  return (
    <div className={`chat-avatar ${size}`} aria-hidden="true">
      <svg viewBox="0 0 56 56">
        <circle cx="28" cy="21" r="10" />
        <path d="M9 56c0-11.6 8.5-19 19-19s19 7.4 19 19z" />
      </svg>
    </div>
  );
}

function preview(c: Conv) {
  for (let i = c.msgs.length - 1; i >= 0; i--) {
    const m = c.msgs[i];
    if (m.kind === "you") return { text: m.text || (m.files[0] ? `📎 ${m.files[0]}` : ""), time: m.time };
  }
  return { text: "", time: "" };
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"home" | "chat">("home");
  const [convs, setConvs] = useState<Conv[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [contact, setContact] = useState<Contact | null>(null);
  const [pending, setPending] = useState<FormData[]>([]);
  const [form, setForm] = useState<Contact>({ name: "", email: "" });
  const [formErr, setFormErr] = useState("");
  const [err, setErr] = useState("");
  const [sending, setSending] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(0);
  const nextId = () => ++idRef.current;

  const active = convs.find((c) => c.id === activeId) || null;
  const msgs = active?.msgs ?? [];
  const showHome = view === "home" && convs.length > 0;

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs.length, view]);

  useEffect(() => {
    if (open && !showHome) setTimeout(() => inputRef.current?.focus(), 350);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, showHome, view]);

  function addMsgs(convId: number, add: (m: Msg[]) => Msg[]) {
    setConvs((cs) => cs.map((c) => (c.id === convId ? { ...c, msgs: add(c.msgs), updatedAt: Date.now() } : c)));
  }

  function pickFiles(list: FileList | null) {
    if (!list) return;
    setErr("");
    const next = [...files];
    for (const f of Array.from(list)) {
      if (f.size > MAX_SIZE) { setErr(`${f.name} is larger than 10 MB.`); continue; }
      if (next.length >= MAX_FILES) { setErr(`You can attach up to ${MAX_FILES} files.`); break; }
      next.push(f);
    }
    setFiles(next);
    if (fileRef.current) fileRef.current.value = "";
  }

  async function post(fd: FormData, c: Contact) {
    fd.set("name", c.name);
    fd.set("email", c.email);
    const res = await fetch("/api/chat", { method: "POST", body: fd });
    if (!res.ok) throw new Error();
  }

  function startNew() {
    setActiveId(null);
    setView("chat");
    setText("");
    setFiles([]);
  }

  function openConv(id: number) {
    setActiveId(id);
    setView("chat");
  }

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const t = text.trim();
    if ((!t && files.length === 0) || sending) return;

    const fd = new FormData();
    fd.append("message", t);
    files.forEach((f) => fd.append("files", f));
    const you: Msg = { id: nextId(), kind: "you", text: t, files: files.map((f) => f.name), time: timeNow() };

    // create the conversation on its first message
    let convId = activeId;
    if (convId === null) {
      convId = nextId();
      const conv: Conv = { id: convId, msgs: [you], updatedAt: Date.now() };
      setConvs((cs) => [conv, ...cs]);
      setActiveId(convId);
    } else {
      addMsgs(convId, (m) => [...m, you]);
    }
    setView("chat");
    setText("");
    setFiles([]);
    setErr("");

    if (!contact) {
      setPending((p) => [...p, fd]);
      const id = convId;
      addMsgs(id, (m) => (m.some((x) => x.kind === "info") ? m : [...m, { id: nextId(), kind: "info", time: timeNow() }]));
      return;
    }

    setSending(true);
    try {
      await post(fd, contact);
    } catch {
      addMsgs(convId, (m) => [...m, { id: nextId(), kind: "us", lines: ["Sorry, your message couldn't be sent. Please try again."], time: timeNow() }]);
    } finally {
      setSending(false);
    }
  }

  async function submitContact(e: React.FormEvent) {
    e.preventDefault();
    if (activeId === null) return;
    const c = { name: form.name.trim(), email: form.email.trim() };
    if (!EMAIL_RE.test(c.email)) { setFormErr("Please enter a valid email."); return; }
    setFormErr("");
    setSending(true);
    try {
      for (const fd of pending) await post(fd, c);
      setContact(c);
      setPending([]);
      addMsgs(activeId, (m) => [
        ...m.filter((x) => x.kind !== "info"),
        {
          id: nextId(),
          kind: "us",
          time: timeNow(),
          lines: [
            "Thanks! Your message has been submitted. You will receive a response here or via email. You may leave more messages below.",
            "We'll respond as soon as we can.",
          ],
        },
      ]);
    } catch {
      setFormErr("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const sorted = [...convs].sort((a, b) => b.updatedAt - a.updatedAt);
  const compact = view === "chat" && (activeId !== null || convs.length > 0);

  return (
    <>
      <div className={`chat-overlay${open ? " show" : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />

      <div className={`chat-panel${open ? " show" : ""}`} role="dialog" aria-label="Contact Us chat" aria-hidden={!open}>
        <div className={`chat-head${compact ? " compact" : ""}`}>
          {compact && (
            <button type="button" className="chat-back" aria-label="Back to conversations" onClick={() => setView("home")}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 6-6 6 6 6" />
              </svg>
            </button>
          )}
          <span className="chat-title">Contact Us</span>
          <button type="button" className="chat-min" aria-label="Minimize chat" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          {!compact && <Avatar />}
          <p className="chat-sub">We&apos;ll respond as soon as we can.</p>
        </div>

        <div className="chat-body" ref={bodyRef}>
          {showHome ? (
            <div className="chat-recent">
              <h4>Recent Conversations</h4>
              <ul>
                {sorted.map((c) => {
                  const p = preview(c);
                  return (
                    <li key={c.id}>
                      <button type="button" onClick={() => openConv(c.id)}>
                        <svg className="chat-recent-ico" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M4 4h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                          <path opacity=".6" d="M19 8h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v3l-4-3h-4a2 2 0 0 1-1.7-1H15a4 4 0 0 0 4-4Z" />
                        </svg>
                        <span className="chat-recent-main">
                          <span className="chat-recent-top">
                            <Avatar size="xs" />
                            <span className="chat-recent-name">{COMPANY}</span>
                            <span className="chat-recent-time">{p.time}</span>
                          </span>
                          <span className="chat-recent-text">{p.text}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            msgs.map((m) => {
              if (m.kind === "you")
                return (
                  <div key={m.id} className="chat-row you">
                    <div className="chat-msg you">
                      {m.text && <span>{m.text}</span>}
                      {m.files.map((n) => (
                        <span key={n} className="chat-file-tag">📎 {n}</span>
                      ))}
                    </div>
                    <span className="chat-meta">{m.time} · Sent</span>
                  </div>
                );
              if (m.kind === "info")
                return (
                  <div key={m.id} className="chat-row us">
                    <Avatar size="sm" />
                    <form className="chat-card chat-info" onSubmit={submitContact} noValidate>
                      <p>We just need some more information from you to proceed:</p>
                      <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" />
                      <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" required />
                      {formErr && <span className="chat-err">{formErr}</span>}
                      <button type="submit" className="chat-info-send" disabled={sending}>
                        {sending ? "Sending…" : "Send"}
                      </button>
                    </form>
                  </div>
                );
              return (
                <div key={m.id} className="chat-row us">
                  <Avatar size="sm" />
                  <div className="chat-card">
                    {m.lines.map((l, i) => (
                      <p key={i}>{l}</p>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {showHome ? (
          <div className="chat-home-foot">
            <button type="button" className="chat-new" onClick={startNew}>
              Send a Message
            </button>
          </div>
        ) : (
          <>
            {(files.length > 0 || err) && (
              <div className="chat-files">
                {files.map((f, i) => (
                  <span key={i} className="chat-chip">
                    {f.name}
                    <button type="button" aria-label={`Remove ${f.name}`} onClick={() => setFiles(files.filter((_, j) => j !== i))}>×</button>
                  </span>
                ))}
                {err && <span className="chat-err">{err}</span>}
              </div>
            )}
            <form className="chat-input" onSubmit={sendMessage}>
              <input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your question or message here" aria-label="Message" />
              <input ref={fileRef} type="file" multiple hidden onChange={(e) => pickFiles(e.target.files)} />
              <button type="button" className="chat-clip" aria-label="Attach a file" onClick={() => fileRef.current?.click()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="m21 11-8.5 8.5a5 5 0 0 1-7-7L14 4a3.3 3.3 0 0 1 4.7 4.7l-8.5 8.5a1.7 1.7 0 0 1-2.4-2.4L15.5 7" />
                </svg>
              </button>
              <button type="submit" className="chat-send" aria-label="Send" disabled={sending}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-6l8-2.5-8-2.5v-6L22 12z" /></svg>
              </button>
            </form>
          </>
        )}
      </div>

      <button type="button" className={`chat-fab${open ? " open" : ""}`} aria-label={open ? "Close chat" : "Open chat"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <svg className="ico-chat" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round">
          <path d="M22.3 3.3H9.7a5.3 5.3 0 0 0-5.4 5.4V29l7-5a3.3 3.3 0 0 1 1.9-.6h9.1a5.3 5.3 0 0 0 5.4-5.4V8.7a5.3 5.3 0 0 0-5.4-5.4Z" />
        </svg>
        <svg className="ico-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
    </>
  );
}