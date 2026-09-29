export const site = {
  name: "Paragon Advisory Partners",
  phone: "954-289-1649",
  email: "admin@paragonadvisorypartners.com",
  address: "6303 Blue Lagoon Drive, Blue Lagoon, Florida 33126, United States STE 400",
  mapQuery: "6303 Blue Lagoon Drive, Suite 400, Miami, FL 33126",
  careersUrl: "https://www.indeed.com/cmp/Paragon-Advisory-Partners/jobs",
  social: [
    { name: "Facebook", href: "https://www.facebook.com/119136306622088" },
    { name: "Instagram", href: "https://www.instagram.com/partnerparagon/?hl=en" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/paragon-advisory-partners-inc" },
    { name: "X", href: "https://www.x.com/PartnerParagon" },
  ] as const,
};

// Desktop header shows the first three links; the rest sit under "More",
// exactly like the GoDaddy header.
export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Who We Serve", href: "/who-we-serve" },
];

export const companyNav = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
];

export const moreNav = [
  { label: "Insights", href: "/insights" },
  { label: "Business Services", href: "/business-services" },
];

export const footerNav = [
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];
