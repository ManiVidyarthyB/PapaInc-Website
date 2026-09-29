/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { img } from "@/lib/images";

const help = [
  { title: "Preparedness & Compliance", text: "Formulating Public Assistance Grant Applications", src: img.help1 },
  { title: "Project Closeout", text: "Providing Quality Assurance and Quality Control Reviews", src: img.help2 },
  { title: "Internal Audit", text: "Reviewing Your Internal Processes & Controls", src: img.help3 },
  { title: "Performance Audit", text: "Accessing Government Programs for Compliance", src: img.help4 },
  { title: "Transaction Due Diligence", text: "Buying or Selling a Company", src: img.help5 },
  { title: "Financial Planning & Analysis", text: "Developing the Company's Strategic Analysis", src: img.help6 },
];

const industries = [
  { title: "Government Services", href: "/government-services", src: img.capitol },
  { title: "Healthcare Services", href: "/healthcare", src: img.healthcare },
  { title: "Financial & Business Services", href: "/financial-business", src: img.transaction },
];

const values = [
  { title: "Provide Stability", text: "Be what is needed" },
  { title: "Exercise Empathy", text: "Listen and Learn from others" },
  { title: "Take Ownership", text: "Take pride in what you do" },
  { title: "Be Selfless", text: '"We over Me" Mentality' },
  { title: "Embrace Growth", text: "Don't fear being better" },
];

export default function Home() {
  return (
    <>
    {/* Earnout website banner */}
    <section className="earnout-bar">
        <span className="earnout-pill">New from Paragon</span>
        <p className="earnout-text">
          <strong>
            earn<span className="earnout-accent">out</span>
          </strong>{" "}
          helps the teams we advise turn every commitment into work that gets done.
        </p>
        <a className="earnout-link" href="https://earnoutapp.ai/" target="_blank" rel="noopener noreferrer">
          Explore EarnOut →
        </a>
      </section>
      {/* Hero */}
      <section className="hero">
        <div className="hero-img" style={{ backgroundImage: `url("${img.heroBuildings}")` }} role="img" aria-label="Glass office towers" />
        <div className="hero-panel">
          <div className="hero-copy">
            <h1 className="h-xl">OPTIMIZE YOUR OUTLOOK</h1>
            <p>
              Things are more uncertain than ever. Paragon understands the need for proven professionals to combat the
              &quot;New Normal&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="split">
        <div className="split-text">
          <div>
            <h2 className="h-xl">Who We Are</h2>
            <p className="body">
              We are a nationwide professional services organization specializing in risk assurance, emergency
              management, transaction services, and accounting &amp; finance. Built upon industry-leading consultants,
              accountants and technologists, Paragon has solution-oriented subject matter experts that are readily
              available to assist our clients&apos; needs as they arise. The quality of our work reduces systemic risk
              and grants organizations the ability to grow with unparalleled stability and peace of mind.
            </p>
          </div>
        </div>
        <div className="split-img" style={{ backgroundImage: `url("${img.whoWeAre}")` }} role="img" aria-label="Legal and compliance technology" />
      </section>

      {/* We Can Help You With */}
      <section className="section bg-blue">
        <div className="wrap">
          <h2 className="h-xl section-title" style={{ color: "#fff", lineHeight: 1.4 }}>
            We Can Help You With
          </h2>
          <div className="grid-3">
            {help.map((h) => (
              <div className="help-card" key={h.title}>
                <h3 className="h-md">{h.title}</h3>
                <img src={h.src} alt="" loading="lazy" />
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-white">
        <div className="wrap">
          <h2 className="h-xl section-title" style={{ color: "var(--blue)", lineHeight: 1.4 }}>
            Industries
          </h2>
          <div className="grid-3">
            {industries.map((i) => (
              <div className="industry" key={i.title}>
                <img src={i.src} alt={i.title} loading="lazy" />
                <h3 className="h-md">{i.title}</h3>
                <Link href={i.href} className="btn">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="section bg-blue">
        <div className="wrap">
          <h1 className="h-xl section-title"  style={{ color: "#fff", lineHeight: 1.4 }}>Why Partner with Us</h1>
          <div className="values">
            {values.map((v) => (
              <div key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section bg-white">
        <div className="quote">
          <p>
            <em>
              &quot;Great brands overcome their counterparts by understanding their people and promoting best practices
              to create an optimal work environment. These leaders inspire others to be great, and they create
              opportunities to elevate their people, which leaves both the client and the employee fulfilled.&quot;
            </em>
          </p>
          <div className="who">
            <p>
              <strong>
                <em>Ronald Johnson</em>
              </strong>
            </p>
            <p>
              <em>Founder &amp; Chief Executive Officer</em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
