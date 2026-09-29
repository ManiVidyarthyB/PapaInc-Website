import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/insights";
import CtaBand from "@/components/CtaBand";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const a = getArticle((await params).slug);
  return a ? { title: a.title, description: a.excerpt } : {};
}

const fmt = (d: string) => new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export default async function ArticlePage({ params }: Params) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  return (
    <>
      <section className="page-hero">
        <div className="container prose">
          <div className="crumbs"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link></div>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>{a.title}</h1>
          <div className="meta">Paragon Advisory Partners · {fmt(a.date)}</div>
        </div>
      </section>
      <article className="section">
        <div className="container prose">
          {a.sections.map((s, i) => (
            <div key={i}>
              {s.heading && <h2>{s.heading}</h2>}
              {s.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
              {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
            </div>
          ))}
          <p style={{ marginTop: 40 }}><Link href="/insights" className="link-arrow">← Back to Insights</Link></p>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
