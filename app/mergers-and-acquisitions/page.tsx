import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Transaction Services" };

export default function Page() {
  return (
    <DetailPage
      title="Transaction Services"
      subheading="Additional Information"
      image={img.dealBanner}
      paragraphs={[
        "When opportunity knocks, is your company ready? It can be when you rely on Paragon Advisory Partners for M&A services. We provide a comprehensive collection of services you can utilize to give you the advantage you need, whether you’re buying or selling your business. But how does it all work? Here’s what you can expect when you come to Paragon Advisory Partners for help:",
      ]}
      bullets={[
        "Strategy Consulting",
        "Diagnostics",
        "Valuation",
        "Due Diligence",
        "Deal Structuring",
        "Process Integration Planning & Implementation",
        "Post-Closing Evaluations",
      ]}
    />
  );
}
