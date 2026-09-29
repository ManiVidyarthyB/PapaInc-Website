// Central site content. Edit copy here instead of inside page components.

export const site = {
  name: "Paragon Advisory Partners",
  shortName: "Paragon",
  tagline: "Optimize Your Outlook",
  phone: "954-289-1649",
  address: {
    line1: "6303 Blue Lagoon Drive, STE 400",
    line2: "Blue Lagoon, Florida 33126",
    country: "United States",
  },
  careersUrl: "https://www.indeed.com/cmp/Paragon-Advisory-Partners/jobs",
  certification:
    "Paragon is proud to be a Women-Owned Minority Business Entity (MWBE) and Certified Disadvantaged Business Entity (DBE).",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/119136306622088" },
    { label: "Instagram", href: "https://www.instagram.com/partnerparagon/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/paragon-advisory-partners-inc" },
    { label: "X", href: "https://www.x.com/PartnerParagon" },
  ],
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Who We Serve", href: "/who-we-serve" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  { label: "Insights", href: "/insights" },
  { label: "Business Services", href: "/business-services" },
];

export const whoWeAre =
  "We are a nationwide professional services organization specializing in risk assurance, emergency management, transaction services, and accounting & finance. Built upon industry-leading consultants, accountants and technologists, Paragon has solution-oriented subject matter experts that are readily available to assist our clients' needs as they arise. The quality of our work reduces systemic risk and grants organizations the ability to grow with unparalleled stability and peace of mind.";

export const helpWith = [
  { title: "Preparedness & Compliance", text: "Formulating Public Assistance Grant Applications", icon: "shield" },
  { title: "Project Closeout", text: "Providing Quality Assurance and Quality Control Reviews", icon: "check" },
  { title: "Internal Audit", text: "Reviewing Internal Processes & Controls", icon: "search" },
  { title: "Performance Audit", text: "Assessing Government Programs for Compliance", icon: "gauge" },
  { title: "Transaction Due Diligence", text: "Buying or Selling a Company", icon: "handshake" },
  { title: "Financial Planning & Analysis", text: "Developing Strategic Analysis", icon: "chart" },
] as const;

export const services = [
  {
    id: "risk-assurance",
    title: "Risk Assurance",
    text: "Providing an independent and unbiased review of your company's operations.",
    icon: "shield",
  },
  {
    id: "emergency-management",
    title: "Emergency Management",
    text: "Providing disaster assistance for when the unforeseen happens.",
    icon: "alert",
  },
  {
    id: "transaction-services",
    title: "Transaction Services",
    text: "Delivering technical, transactional, and operational expertise to successfully buy or sell a business.",
    icon: "handshake",
  },
  {
    id: "accounting-finance",
    title: "Accounting and Finance",
    text: "Providing backend accounting and finance support to help you gain a thorough understanding of the business.",
    icon: "chart",
  },
] as const;

export const industries = [
  {
    title: "Government Services",
    href: "/government-services",
    text: "Helping state and local governments, municipalities and nonprofits stabilize and serve their communities.",
    tone: "navy",
  },
  {
    title: "Healthcare Services",
    href: "/healthcare",
    text: "Guiding providers through a fast-changing industry while managing fraud, cyber and compliance risk.",
    tone: "teal",
  },
  {
    title: "Financial & Business Services",
    href: "/financial-business",
    text: "Supporting firms navigating fee pressure, regulation and digital transformation.",
    tone: "blue",
  },
] as const;

export const values = [
  { title: "Provide Stability", text: "Be what is needed" },
  { title: "Exercise Empathy", text: "Listen and learn from others" },
  { title: "Take Ownership", text: "Take pride in what you do" },
  { title: "Be Selfless", text: "“We over Me” mentality" },
  { title: "Embrace Growth", text: "Don't fear being better" },
];

export const ceoQuote = {
  quote:
    "Great brands overcome their counterparts by understanding their people and promoting best practices to create an optimal work environment. These leaders inspire others to be great, and they create opportunities to elevate their people, which leaves both the client and the employee fulfilled.",
  name: "Ronald Johnson",
  title: "Founder & Chief Executive Officer",
};

export const audiences = [
  {
    label: "Government",
    heading: "Enhancing the lives of the people",
    text: "Government agencies and commissions are being asked to address healthcare, digital transformation and disaster response all at once. Paragon provides subject matter experts with in-depth industry knowledge who help clarify complex issues and support equitable progress for the communities they serve.",
  },
  {
    label: "Strategic Partners",
    heading: "Creating value by aligning",
    text: "Prime contracting firms face intense competition and need a way to stand out. Paragon works as either prime or subcontractor, helping larger firms reduce costs while delivering the same quality standards clients expect.",
  },
  {
    label: "Private Equity",
    heading: "Uncovering dormant synergies",
    text: "We support private equity firms with risk assessments and due diligence analysis. Our consultants help identify investment opportunities in today's economic conditions and bring expert perspective to maximize returns.",
  },
  {
    label: "Corporations",
    heading: "Collaborating to create endless opportunities",
    text: "Our Business Services department addresses a wide range of corporate needs — from control systems and organizational structure to competitive teaming strategies. Experience across industries lets us offer practical guidance that improves efficiency.",
  },
];

export const packs = [
  {
    name: "Core Business Pack",
    includes: null as string | null,
    groups: [
      { title: "Internal Policies & Procedures", items: ["Cash Management", "Inventory Management", "Revenue / Accounts Receivable Management"] },
      { title: "Financial Statements", items: ["Income Statement", "Balance Sheet", "Cash Flow Statement"] },
      { title: "Strategic Planning", items: ["Mission, Vision, and Purpose Statement", "Target Market", "SWOT Analysis", "Core Business Plan"] },
    ],
  },
  {
    name: "Pro Business Pack",
    includes: "Everything in Core, plus",
    featured: true,
    groups: [
      { title: "Internal Policies & Procedures", items: ["Procurement", "Expense Reimbursement"] },
      { title: "Financial Statements", items: ["1 Year Pro-Forma Projections"] },
      { title: "Strategic Planning", items: ["Competitors Profile", "Value Chain Analysis", "Pricing and Product Differentiation"] },
    ],
  },
  {
    name: "Essential Business Pack",
    includes: "Everything in Pro, plus",
    groups: [
      { title: "Internal Policies & Procedures", items: ["Onboarding & Offboarding", "Property, Plant & Equipment"] },
      { title: "Financial Statements", items: ["Owner's Equity", "3 Year Pro-Forma Projections"] },
      { title: "Strategic Planning", items: ["Tax Planning & Tax Assistance", "Grant Assistance", "Advanced Customer Management", "Create Accountability Systems"] },
    ],
  },
];

export const aLaCarte = [
  "Grant Administration and Compliance Monitoring",
  "Grant Writing Seminar",
  "Response to Request for Proposal or Notice of Funding Availability",
  "Accounting & Bookkeeping",
];
