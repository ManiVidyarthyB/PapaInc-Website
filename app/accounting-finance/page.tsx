import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Accounting & Finance Operations" };

export default function Page() {
  return (
    <DetailPage
      title="Accounting & Finance Operations"
      subheading="Additional Information"
      image={img.dealBanner}
      paragraphs={[
        "The accounting department reports on an organization's activities, while finance applies metrics to those activities to determine a corporation's performance. Employees, managers, and executives all rely on timely and accurate reporting to make split decisions. Paragon is composed of highly skilled professionals to help implement practical solutions to maintain your company's accuracy and integrity, with a healthy growing organization as the product. We take on the task of crunching through the numbers so you can focus on the crucial decisions that will lead your company to a prosperous future.",
      ]}
      bullets={[
        "Financial Planning and Analysis",
        "Price Sensitivity Analysis",
        "Audit Readiness",
        "Carve-Out/Divestitures",
        "Process Design and Implementation",
      ]}
    />
  );
}
