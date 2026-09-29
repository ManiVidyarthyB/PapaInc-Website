import Link from "next/link";

// Replace the "P" mark with your logo file (e.g. <Image src="/logo.png" .../>) when available.
export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Paragon Advisory Partners — home">
      <span className="logo-mark">P</span>
      <span className="logo-text">
        Paragon
        <small>Advisory Partners</small>
      </span>
    </Link>
  );
}
