import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Healthcare Services" };

export default function Page() {
  return (
    <DetailPage
      title="Healthcare Services"
      blueTitle
      image={img.healthcareBanner}
      paragraphs={[
        "Healthcare is one of the most dynamic and fastest-changing industries in the United States. As Generation X and the Baby Boomers reach retirement age, there is an increased demand for clinical and pharmaceutical therapies, telemedicine, and other technologies that will continue to disrupt the US healthcare system. These demands create businesses' opportunities and open the door to fraud, cybersecurity threats, and non-compliance throughout the industry.",
        "Many healthcare leaders are staying ahead of the curve by addressing these challenges through new clinical and operating models, aggressive revenue management and cost control, mergers and acquisitions, horizontal and vertical integration, and partnership strategies.",
      ]}
    />
  );
}
