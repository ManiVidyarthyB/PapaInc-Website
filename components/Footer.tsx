import Link from "next/link";
import SocialIcon from "./SocialIcon";
import { footerNav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <ul className="footer-nav">
          {footerNav.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <div className="footer-social">
          {site.social.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
              <SocialIcon name={s.name} />
            </a>
          ))}
        </div>

        <p className="footer-name">{site.name}</p>

        <div className="footer-bottom">
          <div className="footer-copy">
            <p>Copyright © {year} {site.name} - All Rights Reserved.</p>
            <p>
              Paragon is proud to be a Women-Owned Minority Business Entity (MWBE) and Certified Disadvantaged Business
              Entity (DBE).
            </p>
          </div>
            <div className="footer-powered">
            <p>Powered by</p>
            <a href="https://www.godaddy.com/websites/website-builder" target="_blank" rel="noopener noreferrer">
              <img src="/assets/godaddy-airo.png" alt="GoDaddy Airo" width={80} height={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
