"use client";

import { useState } from "react";

type Status = { kind: "idle" | "sending" | "ok" | "err"; msg?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setStatus({ kind: "ok", msg: "Thanks! Your message has been sent — we'll be in touch shortly." });
    } catch (err) {
      setStatus({ kind: "err", msg: (err as Error).message });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" /></div>
      <div className="field"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="url">Business URL</label><input id="url" name="url" type="text" placeholder="https://" /></div>
      <div className="field"><label htmlFor="message">How can we help?</label><textarea id="message" name="message" rows={5} /></div>
      {/* Honeypot field for basic spam protection */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
      {status.msg && <div className={`form-note ${status.kind === "ok" ? "ok" : "err"}`}>{status.msg}</div>}
      <div style={{ display: "flex", gap: 12 }}>
        <button className="btn" type="submit" disabled={status.kind === "sending"}>{status.kind === "sending" ? "Sending…" : "Send"}</button>
        <button className="btn" type="reset" style={{ background: "transparent", color: "var(--navy)", borderColor: "var(--line)" }}
          onClick={() => setStatus({ kind: "idle" })}>Cancel</button>
      </div>
    </form>
  );
}
