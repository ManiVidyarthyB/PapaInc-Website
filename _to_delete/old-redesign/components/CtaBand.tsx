import Link from "next/link";

export default function CtaBand({ title = "Get Started Today", text = "Tell us where your business needs more support — we'll tailor a solution to fit." }: { title?: string; text?: string }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link href="/contact-us" className="btn">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
