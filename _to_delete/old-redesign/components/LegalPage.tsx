import PageHero from "./PageHero";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <PageHero title={title} />
      <section className="section"><div className="container prose">{children}</div></section>
    </>
  );
}
