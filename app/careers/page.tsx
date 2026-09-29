import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Careers" };

export default function Careers() {
  return (
    <section className="careers bg-dark">
      <div className="wrap-md">
        <h1 className="h-lg">Find Your Career with Paragon</h1>
        <p>
          At Paragon, you have the opportunity to grow personally and professionally while enjoying what you do. Our
          model gives you the flexibility to make your career what you want. Explore current opportunities and find how
          it feels to be part of the team.
        </p>
        <a className="btn" href={site.careersUrl} target="_blank" rel="noopener noreferrer">
          View Positions at PAP
        </a>
      </div>
    </section>
  );
}
