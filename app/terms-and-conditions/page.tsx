import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function Page() {
  return (
    <section className="section bg-white">
      <div className="wrap-md">
        <h1 className="h-lg blue section-title">Terms and Conditions</h1>
        <div className="coming-soon">Coming soon!</div>
      </div>
    </section>
  );
}
