import type { NextConfig } from "next";

// The original GoDaddy site used URL-encoded characters in a few paths
// (e.g. /financial-%26-business). Those are served from clean routes and the
// old URLs redirect permanently so existing links and search results keep working.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/financial-%26-business", destination: "/financial-business", permanent: true },
      { source: "/financial-&-business", destination: "/financial-business", permanent: true },
      { source: "/accounting-%26-finance", destination: "/accounting-finance", permanent: true },
      { source: "/accounting-&-finance", destination: "/accounting-finance", permanent: true },
      { source: "/disaster-recovery%3A-reim", destination: "/disaster-recovery-reim", permanent: true },
      { source: "/disaster-recovery\\:-reim", destination: "/disaster-recovery-reim", permanent: true },
    ];
  },
};

export default nextConfig;
