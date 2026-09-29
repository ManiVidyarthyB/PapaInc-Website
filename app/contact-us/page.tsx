import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import SocialIcon from "@/components/SocialIcon";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactUs() {
  const q = encodeURIComponent(site.mapQuery);
  return (
    <>
      <section className="section bg-white">
        <div className="wrap-md">
          <h1 className="h-lg blue section-title">Contact Us</h1>
          <ContactSection />
        </div>
      </section>

      <div className="map">
        <iframe
          title="Map"
          src={`https://maps.google.com/maps?q=${q}&z=14&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          className="btn btn-directions"
          href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get directions
        </a>
      </div>

      <section className="social-band">
        {site.social.map((s) => (
          <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
            <SocialIcon name={s.name} />
          </a>
        ))}
      </section>
    </>
  );
}
