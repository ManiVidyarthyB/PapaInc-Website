/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Who We Serve" };

const groups = [
  {
    title: "GOVERNMENT",
    heading: "Enhancing the lives of the people",
    src: img.govColumns,
    gray: true,
    text: "There are hundreds of agencies and commissions within our government charged with servicing our public's needs. Whether our partners face unforeseen healthcare issues, ever-advancing digital technologies, or unpredictable disasters, Paragon stands at the ready to do our part in helping our government achieve the proper solution. Our people are present and available, whether we are in-person or virtual. Our subject matter experts, equipped with in-depth industry knowledge, work with our clients to provide clarity on any complex issue. Our country has begun to embrace each other's perspectives to ensure a more equitable future. Work with Paragon as we dare to be better.",
  },
  {
    title: "STRATEGIC PARTNERS",
    heading: "Creating value by aligning",
    src: img.transaction,
    gray: false,
    text: "Prime contracting firms stand as the backbone of the consulting industry. The competition level within this industry is exceptionally high, and firms must do their absolute best to differentiate themselves from the competitors. Paragon has the capability to serve as both prime and subcontractor to firms depending on the level of assistance required. Throughout our history, we have used this model to help lower the costs that impact the larger firms with whom we collaborate. Our partners openly express their appreciation for receiving a parallel quality to their own at a fraction of the cost, making their bids more desirable.",
  },
  {
    title: "PRIVATE EQUITY",
    heading: "Uncovering dormant synergies",
    src: img.finance,
    gray: true,
    text: "Times of adversity can also be times for opportunity. This is most evident in the world of private equity. Paragon works with private equity firms to perform risk assessments and due diligence analysis to help investors best choose salvageable investments and have the highest potential of return. Our consultants are scouring the market and identifying opportunities unique to the current economic climate constantly. A second opinion of expert perspective could mean all the difference for prospective buyers in this changing market. Do not miss the chance to reap a harvest from this time of famine, let Paragon be the guide of your firm’s investment needs.",
  },
  {
    title: "CORPORATIONS",
    heading: "Collaborating to create endless opportunities",
    src: img.corps,
    gray: false,
    text: "Paragon’s Business Services Department is designed specifically to meet the diverse needs of the vast range of corporations we serve. We work hand in hand with companies looking to improve their systems for controls, better define their organizational structure, or seeking a competitive advantage through teaming. Our experience working with many clients of every field lends itself to an expert eye with direct examples of successes to pull from and relay to growing corporations. Paragon can give your company the boost it needs to reach the next level of efficiency and prosperity. Embrace the change to elevate those whom you call competitors.",
  },
];

export default function WhoWeServe() {
  return (
    <>
      <section className="section bg-white">
        <div className="wrap-md intro">
          <h1 className="h-lg">Who We Serve</h1>
          <p className="body">
            We work with the government, private equity firms, and corporations to prepare for change and deliver
            exceptional results. We collaborate with a broad range of professional services firms and technology
            providers to deliver specialized solutions and services to our clients.
          </p>
        </div>
      </section>

      {groups.map((g) => (
        <section key={g.title} className={`section ${g.gray ? "bg-gray" : "bg-white"}`}>
          <div className="wrap-md">
            <h2 className="h-lg center serve-title">{g.title}</h2>
            <div className="serve-row">
              {g.src ? <img className="img-box" src={g.src} alt="" loading="lazy" /> : <div className="img-box" />}
              <div>
                <h3 className="h-md">{g.heading}</h3>
                <p className="body">{g.text}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
