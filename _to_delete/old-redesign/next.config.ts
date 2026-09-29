import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Keep old GoDaddy URLs working after migration
    return [
      { source: "/financial-%26-business", destination: "/financial-business", permanent: true },
      { source: "/financial-&-business", destination: "/financial-business", permanent: true },
      { source: "/disaster-recovery%3A-reim", destination: "/insights/disaster-recovery-reimbursement", permanent: true },
      { source: "/disaster-recovery\\:-reim", destination: "/insights/disaster-recovery-reimbursement", permanent: true },
      { source: "/identify-the-right-talent", destination: "/insights/identify-the-right-talent", permanent: true },
    ];
  },
};

export default nextConfig;
