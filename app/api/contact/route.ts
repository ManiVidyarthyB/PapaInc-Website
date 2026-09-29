import { NextResponse } from "next/server";

// Contact form endpoint.
// TODO: connect an email provider (Resend, SendGrid, or SMTP via nodemailer)
// to deliver messages to your inbox. For now submissions are validated and logged.
export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (body.company) return NextResponse.json({ ok: true }); // honeypot

  const email = (body.email || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  console.log("[contact]", {
    name: body.name?.slice(0, 200),
    email,
    url: body.url?.slice(0, 300),
    message: body.message?.slice(0, 5000),
  });

  return NextResponse.json({ ok: true });
}
