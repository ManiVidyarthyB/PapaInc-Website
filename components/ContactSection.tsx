"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="contact-grid">
      {!formOpen ? (
        <div className="contact-info">
          <h3 className="h-md">Get Started Today</h3>
          <p className="body">
            Where does your business need more support? We offer a broad range of services and packages that be
            customized to your needs. Send us a message today, and we can start you on a path to success.
          </p>
          <h3 className="h-md">{site.name}</h3>
          <p className="body">{site.address}</p>
          <button type="button" className="btn" onClick={() => setFormOpen(true)}>
            Drop us a line!
          </button>
        </div>
      ) : (
        <div className="form">
          <h3 className="h-md">Drop us a line!</h3>
          {status === "sent" ? (
            <p className="body thanks">Thank you for your message. We&apos;ll get back to you soon!</p>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="field">
                <input id="cf-name" name="name" type="text" placeholder=" " autoComplete="name" />
                <label htmlFor="cf-name">Name</label>
              </div>
              <div className="field">
                <input id="cf-email" name="email" type="email" placeholder=" " autoComplete="email" required />
                <label htmlFor="cf-email">Email*</label>
              </div>
              <div className="field">
                <input id="cf-url" name="url" type="text" placeholder=" " autoComplete="url" />
                <label htmlFor="cf-url">Business URL</label>
              </div>
              <div className="field">
                <textarea
                  name="message"
                  aria-label="Message"
                  placeholder="Tell us a bit about your goals, so we can get your started."
                />
              </div>
              {/* honeypot */}
              <input name="company" type="text" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
              <p className="form-legal">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>{" "}
                apply.
              </p>
              {status === "error" && <p className="form-msg err">{error}</p>}
              <div className="form-actions">
                <button type="submit" className="btn" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send"}
                </button>
                <button type="button" className="link-btn" onClick={() => setFormOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      )}
      <div>
        <img className="contact-img" src={img.contact} alt="" />
      </div>
    </div>
  );
}
