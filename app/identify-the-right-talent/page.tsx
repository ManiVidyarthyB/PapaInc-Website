import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Identifying the Right Talent" };

export default function Page() {
  return (
    <DetailPage
      title="Identifying the Right Talent"
      subheading="Date July 16, 2020"
      image={img.winners}
      paragraphs={[
        <>
          <em>&quot;A business is only as good as it&apos;s people&quot;</em> is a quote by Kathryn Minshew that is echoed
          through organizations around the world. Unfortunately, that quote is rarely accompanied by the sentence following
          it - <em>&quot;The hard part is actually building the team that will embody your company culture and propel you
          forward.&quot;</em> Any entrepreneur or business leader can easily explain the importance of quality talent within
          an organization, but it becomes much more difficult to define precisely how that talent is identified and how it
          fits into your current structure.
        </>,
        "So how should organizations approach this enormous challenge of building the right talent within their company? The answer should be a combination of self-reflection and understanding what you have to offer.",
      ]}
    >
      <p><strong>Taking time to self-reflect</strong></p>
      <p style={{ marginTop: 0 }}>
        There are countless ways to build a successful company and even more ways to fail. If a business is only as good
        as it&apos;s people, taking the time to understand who you are as a company and how this new hire will get you to
        where you want to be, is an obvious first step that is often overlooked. Are you a start-up still trying to find
        your keys to success, or are you an established company looking to take the next step? Do you need ideas? Do you
        need stability? What is your objective, and how does that affect your employees?
      </p>
      <p style={{ marginTop: 0 }}>
        An organization needs to understand itself first before it can realize the personnel that can help. Ask yourself
        the tough questions.
      </p>
      <ul className="article-list">
        <li>What kind of traits do we need more of within our human capital, and why do we need them?</li>
        <li>Is our organization attractive to people who can bring these traits?</li>
        <li>Would the people coming in with these traits be put in a position to succeed</li>
        <li>How would these new skills fit into our current employee basis?</li>
        <li>What internal changes may be needed to ensure we&apos;re utilizing these skills?</li>
      </ul>
      <p style={{ marginTop: 0 }}>
        Understand beyond &quot;what&quot; you need to &quot;why&quot; you need it. Writing down the answers to questions
        such as these will not only help in creating a template for your hire but should help you understand your current
        position better when it comes to your human capital.
      </p>
      <p style={{ marginTop: 0 }}><strong>Understanding what you have to offer</strong></p>
      <p style={{ marginTop: 0 }}>
        It&apos;s essential to remember that a new hire is a partnership. Your considerations should not only be what you
        need but what you believe this person would need in return to be happy and prosperous in your company. Monetary
        incentive is important, but rarely the make or break of someone&apos;s success in an organization. Things like
        growth and development, opportunity to make an impact, and what kind of support you&apos;re willing to provide this
        person are far better components to consider when thinking through your offer package.
      </p>
      <p style={{ marginTop: 0 }}>
        You may not be able to offer everything you&apos;d like, but it&apos;s vital to be transparent with candidates and
        set proper expectations. If you&apos;re unable to provide a defined growth track due to a recent promotion in the
        department, explain that and think through workarounds. Can you provide training on a new skill-set or exposure to
        another department this candidate may be interested in? You may not be able to pay someone&apos;s ideal target
        salary, but can you instead offer more flexibility in this person&apos;s work schedule? Again, understanding what you
        have to provide an employee comes with the added benefit of not only positioning yourself for a successful hire but
        in better understanding where you are as an organization.
      </p>
      <p style={{ marginTop: 0 }}>
        Hiring is never simple, but there are steps you can take to increase your chances of a successful hire. Taking time
        to self-reflect and understanding what you have to offer will ensure that your decisions are being made off more
        than just gut-feeling. Securing the rights hires and providing them the tools needed to be happy and effective in
        their roles will result in positive impacts throughout your organization - as your company is only as good as
        it&apos;s people.
      </p>
    </DetailPage>
  );
}
