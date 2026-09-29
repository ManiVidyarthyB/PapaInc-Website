import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Risk Assurance" };

export default function Page() {
  return (
    <DetailPage
      title="Risk Assurance"
      subheading="Additional Information"
      image={img.riskBanner}
      paragraphs={[
        "Paragon's Risk Assurance practice specializes in providing the visibility and insights needed for our clients to operate their day to day business with confidence. Our consultants provide their cutting-edge experience from the world's largest firms and corporations to ensure a clear and complete picture of our client's risks.",
      ]}
      bullets={["Audit Advisory Management", "Audit & Subject Matter Expertise Sourcing", "Internal Audit", "Performance Audits"]}
    />
  );
}
