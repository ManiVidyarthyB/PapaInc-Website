import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Emergency Management" };

export default function Page() {
  return (
    <DetailPage
      title="Emergency Management"
      image={img.emergencyBanner}
      paragraphs={[
        "Paragon offers assistance in complying with state and federal regulations. Whether it is pre-or post-disaster, our consultants are ready to assist both providers and applicants through the intricacies of either process. Paragon's consultants have aided in the reimbursement of millions of dollars and can help with preparation and recovery efforts. Our consultants have the experience and technical knowledge to help our clients navigate policies and procedures for compliance with disaster recovery protocols. We understand these tasks are on top of your regular job requirements, and having someone you can rely on to get the job done right is a direct value add.",
      ]}
      bullets={[
        "Project and Program Management/Consulting",
        "Preparedness",
        "Pre and Post Hazard Mitigation",
        "Disaster Recovery",
        "Program Funding",
      ]}
    />
  );
}
