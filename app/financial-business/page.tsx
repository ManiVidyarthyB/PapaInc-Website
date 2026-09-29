import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Financial & Business Services" };

export default function Page() {
  return (
    <DetailPage
      title="Financial & Business Services"
      image={img.financialBanner}
      paragraphs={[
        "The financial services industry has been reshaped by declining fee rates, increased regulations, and digital transformation. A fluctuating economic landscape is affecting the profitability and long-term sustainability of financial service operations. Competition has been higher than ever in this global economy, requiring both new and established companies to contend with consolidation. Each unique financial service subset requires a specific approach to their particular issues.",
        "Many Financial and Business Services leaders are staying ahead of the curve by addressing these challenges through new clinical and operating models, aggressive revenue management and cost control, mergers and acquisitions, horizontal and vertical integration, and partnership strategies.",
      ]}
    />
  );
}
