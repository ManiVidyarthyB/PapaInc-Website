import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Receives chat messages (with optional attachments + visitor name/email).
// Connect email/Slack/CRM here to actually deliver them.
export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  const name = String(form.get("name") || "").slice(0, 200);
  const email = String(form.get("email") || "").trim();
  const message = String(form.get("message") || "").slice(0, 5000);
  const files = form.getAll("files").filter((f): f is File => f instanceof File);

  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  if (!message && files.length === 0) return NextResponse.json({ error: "Message required." }, { status: 400 });
  if (files.some((f) => f.size > 10 * 1024 * 1024)) {
    return NextResponse.json({ error: "Each file must be 10 MB or less." }, { status: 400 });
  }

  console.log("[chat]", { name, email, message, files: files.map((f) => `${f.name} (${f.size} bytes)`) });
  return NextResponse.json({ ok: true });
}