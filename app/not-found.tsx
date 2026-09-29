import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-white">
      <div className="wrap-md center">
        <h1 className="h-lg section-title">Page not found</h1>
        <Link href="/" className="btn">Back to home</Link>
      </div>
    </section>
  );
}
