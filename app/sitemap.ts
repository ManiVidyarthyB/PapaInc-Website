import type { MetadataRoute } from "next";

const routes = [
  "", "/what-we-do", "/who-we-serve", "/about", "/careers", "/contact-us", "/insights", "/business-services",
  "/government-services", "/healthcare", "/financial-business", "/risk-assurance", "/emergency-management",
  "/mergers-and-acquisitions", "/accounting-finance", "/identify-the-right-talent", "/disaster-recovery-reim",
  "/privacy-policy", "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `https://pap-inc.com${r}` }));
}
