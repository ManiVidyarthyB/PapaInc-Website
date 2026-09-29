// Insights articles. Body copy is a restructured draft based on the articles on the
// current site — replace with the final text from your CMS or original posts if preferred.

export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  sections: { heading?: string; paragraphs?: string[]; bullets?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "identify-the-right-talent",
    title: "Identifying the Right Talent",
    date: "2020-07-16",
    excerpt:
      "Most organizations agree their people are their most valuable asset. The hard part is finding — and keeping — the right ones.",
    sections: [
      {
        paragraphs: [
          "Almost every organization will tell you that its people are its most valuable asset. Knowing that is easy; turning it into a repeatable way of finding and integrating the right talent is much harder.",
        ],
      },
      {
        heading: "Take time to self-reflect",
        paragraphs: [
          "Before writing a job description, look inward. A startup and an established company need very different things from a new hire, and your staffing needs should follow directly from your business objectives.",
        ],
        bullets: [
          "What qualities would strengthen the organization right now?",
          "Does the company appeal to candidates who have those qualities?",
          "Will new hires have the conditions they need to flourish?",
          "How will fresh skills complement the existing team?",
          "What internal changes are needed to use that talent well?",
        ],
      },
      {
        paragraphs: [
          "The goal is to move past knowing what you need and understand why you need it.",
        ],
      },
      {
        heading: "Understand what you have to offer",
        paragraphs: [
          "Hiring is a two-way arrangement. Compensation matters, but so do professional growth, meaningful work and the support people receive once they join.",
          "Be transparent about your limitations and creative about alternatives — flexible scheduling, exposure to other departments, or structured skill development can all make an offer more compelling.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Thoughtful self-assessment and an honest view of your organization's strengths give you a foundation for hiring decisions that rely on more than intuition.",
        ],
      },
    ],
  },
  {
    slug: "disaster-recovery-reimbursement",
    title: "Disaster Recovery: Things to Consider",
    date: "2020-08-01",
    excerpt:
      "The disaster recovery landscape keeps changing. A few practical habits help applicants secure reimbursement faster.",
    sections: [
      {
        heading: "Help ensure reimbursement",
        paragraphs: [
          "Policies governing disaster recovery assistance evolve at the federal, state and local level. Staying current is the first step to meeting requirements and speeding up reimbursement.",
        ],
      },
      {
        heading: "Presentation",
        paragraphs: [
          "Reviewers often work through large volumes of data in hard-to-use formats. Submitting spreadsheets alongside the required PDFs lets them verify figures instead of re-keying them — which shortens review time considerably.",
        ],
      },
      {
        heading: "Organization",
        paragraphs: [
          "Poorly labeled files get overlooked, even when they have already been submitted. Name files clearly, include every required document for each event, and organize materials by cost type rather than combining everything into one large PDF.",
        ],
      },
      {
        heading: "Policy proficiency",
        paragraphs: [
          "Know both the federal Public Assistance guidelines and your own jurisdiction's policies. Where local rules are stricter, they take precedence.",
        ],
      },
      {
        heading: "Accessibility and readiness",
        paragraphs: [
          "Respond promptly to requests for information. Every delay in supplying missing details extends the overall timeline.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "These habits help applicants and reviewers alike, and keep recovery funding moving to the communities that need it.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
