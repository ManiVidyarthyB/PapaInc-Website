/* eslint-disable @next/next/no-img-element */

type Props = {
  title: string;
  blueTitle?: boolean;
  subheading?: string;
  paragraphs: React.ReactNode[];
  bullets?: string[];
  image: string;
  children?: React.ReactNode;
};

// Text column + narrow side image — the layout GoDaddy's "content-6" widget uses
// for the industry, service and article pages.
export default function DetailPage({ title, blueTitle, subheading, paragraphs, bullets, image, children }: Props) {
  return (
    <section className="section bg-white">
      <div className="wrap-md">
        <h1 className={`h-lg section-title${blueTitle ? " blue" : ""}`}>{title}</h1>
        <div className="detail">
          <div>
            {subheading && <h3 className="h-md">{subheading}</h3>}
            <div className="body">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {children}
            </div>
            {bullets && (
              <ul className="bold-list">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
          <img className="img-side" src={image} alt="" />
        </div>
      </div>
    </section>
  );
}
