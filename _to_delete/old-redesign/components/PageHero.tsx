import Link from "next/link";

type Props = { title: string; intro?: string; crumb?: string; eyebrow?: string; children?: React.ReactNode };

export default function PageHero({ title, intro, crumb, eyebrow, children }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="crumbs"><Link href="/">Home</Link> / {crumb ?? title}</div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
        {children}
      </div>
    </section>
  );
}
