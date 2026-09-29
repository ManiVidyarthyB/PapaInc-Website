import PageHero from "./PageHero";
import Visual from "./Visual";
import CtaBand from "./CtaBand";

type Props = { title: string; intro: string; paragraphs: string[]; listTitle?: string; list?: string[]; variant?: number };

export default function IndustryPage({ title, intro, paragraphs, listTitle, list, variant = 0 }: Props) {
  return (
    <>
      <PageHero title={title} eyebrow="Industries" intro={intro} />
      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            {paragraphs.map((p, i) => <p key={i} className="lead" style={{ maxWidth: "none" }}>{p}</p>)}
            {list && (
              <>
                <h3 style={{ marginTop: 28 }}>{listTitle}</h3>
                <ul className="checklist">{list.map((l) => <li key={l}>{l}</li>)}</ul>
              </>
            )}
          </div>
          <Visual variant={variant} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
