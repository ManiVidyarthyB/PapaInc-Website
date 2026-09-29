import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Government Services" };

export default function Page() {
  return (
    <DetailPage
      title="Government Services"
      blueTitle
      image={img.govColumns}
      paragraphs={[
        "Our government finds itself facing an unprecedented time. The general climate is enveloped in fear and anxiety, as many are unsure what tomorrow may bring. We are confident in our government’s ability to see us through this “recovery-based” era. At Paragon, we hope to do our part as a conduit for public and private service providers and consumers to navigate the policies and programs enacted to do so. Paragon stands upon the methodologies the government depends on to deliver services, payments, and other forms of assistance to its constituents. Through our developed virtual network, we assist state and local governments, municipalities, and non-profit organizations in providing stability to the communities they serve through side by side. We understand the concerns of our clients as they mirror our own. Only by bonding together in the face of this adversity will we realize the prosperity on the other side as we optimistically focus our efforts on returning to pre-pandemic conditions.",
      ]}
    />
  );
}
