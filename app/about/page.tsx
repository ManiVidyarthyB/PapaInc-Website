/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <section className="section bg-white">
      <div className="wrap-md">
        <h1 className="h-lg section-title">About Us</h1>

        <div className="zig">
          <div className="zig-media">
            <img src={img.about1} alt="" loading="lazy" />
          </div>
          <div className="zig-text">
            <h3 className="h-md">Our Consultants</h3>
            <p className="body">
              Our team of expert consultants works together as problem solvers on even the toughest jobs. From strategy
              to execution, they have extensive industry experience that helps them devise solutions and solve even the
              most complex business issues. At Paragon, it is important that we have the opportunity to grow and develop
              alongside all of our clients. As a result, our consultants have the opportunity to work in a variety of
              functional areas, including:
            </p>
            <ul>
              <li>Internal Audit</li>
              <li>IT Consulting</li>
              <li>Risk Compliance</li>
              <li>Mergers and Acquisitions</li>
            </ul>
          </div>
        </div>

        <div className="zig reverse">
          <div className="zig-media">
            <img src={img.about2} alt="" loading="lazy" />
          </div>
          <div className="zig-text">
            <h3 className="h-md">Our Background</h3>
            <p className="body">
              Part of what makes our team capable of handling such a wide range of tasks is the fact that we have a
              diverse professional background. A great competitive advantage for our employees has always been the
              opportunity they are afforded by working alongside some of the most highly-qualified, top-tier talent in
              the consulting arena. Our team members are equipped with advanced degrees and certifications.
            </p>
          </div>
        </div>

        <div className="zig">
          <div className="zig-media">
            <img src={img.about3} alt="" loading="lazy" />
          </div>
          <div className="zig-text">
            <h3 className="h-md">Our Mission</h3>
            <p className="body">
              It is our mission to foster a community of professionals that are always ready to create solutions for
              our clients specific business needs. It is important to us to advocate and promote the value these
              services can add to an organization and help promote these services as an incredible asset to our
              clients.It&apos;s also important that we are constantly able to push the limits when it comes to the
              challenges that face businesses, giving them real, innovative solutions. This is our mission at Paragon
              Advisory Partners and what places us among the leaders in our industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
