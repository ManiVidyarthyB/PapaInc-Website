"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import Logo from "./Logo";
import Icon from "./Icon";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="header">
      <div className="container header-inner">
        <Logo />
        <nav className="nav" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div className="dropdown" key={item.label}>
                <button type="button" aria-haspopup="true">{item.label} ▾</button>
                <div className="dropdown-menu">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} className={isActive(c.href) ? "active" : ""}>{c.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : ""}>{item.label}</Link>
            )
          )}
          <Link href="/contact-us" className="nav-cta">Get Started</Link>
        </nav>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} size={28} />
        </button>
      </div>
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {nav.map((item) =>
          item.children ? (
            item.children.map((c) => <Link key={c.href} href={c.href}>{c.label}</Link>)
          ) : (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          )
        )}
      </div>
    </header>
  );
}
