"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { img } from "@/lib/images";
import { companyNav, moreNav, primaryNav, site } from "@/lib/site";

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const [deskCompanyOpen, setDeskCompanyOpen] = useState(false);
  const companyRef = useRef<HTMLLIElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const moreRef = useRef<HTMLLIElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMoreOpen(false);
    setDeskCompanyOpen(false);
    setDrawerOpen(false);
  }, [pathname]);

  // Close "Company" / "More" when clicking outside or pressing Escape
  useEffect(() => {
    if (!moreOpen && !deskCompanyOpen) return;
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) setDeskCompanyOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMoreOpen(false);
        setDeskCompanyOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen, deskCompanyOpen]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const companyActive = companyNav.some((l) => isActive(l.href));
  const moreActive = moreNav.some((l) => isActive(l.href));

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label={site.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.logo} alt={site.name} width={112} height={64} />
        </Link>

        <nav aria-label="Main">
          <ul className="nav">
            {primaryNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={`nav-link${isActive(l.href) ? " active" : ""}`}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li ref={companyRef}>
              <button
                type="button"
                className={`nav-link nav-more${deskCompanyOpen ? " open" : ""}${companyActive ? " active" : ""}`}
                aria-haspopup="menu"
                aria-expanded={deskCompanyOpen}
                onClick={() => {
                  setDeskCompanyOpen((o) => !o);
                  setMoreOpen(false);
                }}
              >
                Company <Chevron />
              </button>
              {deskCompanyOpen && (
                <ul className="dropdown dropdown-company" role="menu">
                  {companyNav.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={`dd-link${isActive(l.href) ? " active" : ""}`}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li ref={moreRef}>
              <button
                type="button"
                className={`nav-link nav-more${moreOpen ? " open" : ""}${moreActive ? " active" : ""}`}
                aria-haspopup="menu"
                aria-expanded={moreOpen}
                onClick={() => {
                  setMoreOpen((o) => !o);
                  setDeskCompanyOpen(false);
                }}
              >
                More <Chevron />
              </button>
              {moreOpen && (
                <ul className="dropdown" role="menu">
                  {moreNav.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="group group-link">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <button type="button" className="hamburger" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {drawerOpen && (
        <>
          <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)} />
          <div className="drawer" role="dialog" aria-label="Site navigation">
            <button type="button" className="drawer-close" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <ul>
              {primaryNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={isActive(l.href) ? "active" : ""}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <button type="button" className="drawer-group" aria-expanded={companyOpen} onClick={() => setCompanyOpen((o) => !o)}>
                  Company <span style={{ width: 16, height: 16, display: "inline-flex", transform: companyOpen ? "rotate(180deg)" : "none" }}><Chevron /></span>
                </button>
                {companyOpen && (
                  <ul className="drawer-sub">
                    {companyNav.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className={isActive(l.href) ? "active" : ""}>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {moreNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={isActive(l.href) ? "active" : ""}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
