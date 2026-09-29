import Link from "next/link";
import { site } from "@/lib/content";
import Logo from "./Logo";
import Icon from "./Icon";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p style={{ marginTop: 18, maxWidth: 320 }}>
              Risk assurance, emergency management, transaction services, and accounting &amp; finance — nationwide.
            </p>
            <div className="socials">
              {site.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <SocialIcon name={s.label} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/what-we-do">What We Do</Link></li>
              <li><Link href="/who-we-serve">Who We Serve</Link></li>
              <li><Link href="/business-services">Business Services</Link></li>
              <li><Link href="/insights">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>{site.address.line1}<br />{site.address.line2}</li>
              <li><a href={`tel:${site.phone.replace(/-/g, "")}`}>{site.phone}</a></li>
            </ul>
          </div>
        </div>
        <div className="cert"><Icon name="award" /> {site.certification}</div>
        <div className="footer-bottom">
          <span>Copyright © {new Date().getFullYear()} {site.name} — All Rights Reserved.</span>
          <span>The Benchmark of Quality</span>
        </div>
      </div>
    </footer>
  );
}
