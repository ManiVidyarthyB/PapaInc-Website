/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Disaster Recovery: Things to Consider" };

type Block = { heading: string; image: string; paragraphs: React.ReactNode[] };

const blocks: Block[] = [
  {
    heading: "Help Ensure Reimbursement",
    image: img.dr0,
    paragraphs: [
      "One thing that consultants with a history of Disaster Recovery experience can agree on is that policy can be variable and ever-changing at multiple levels. Whether it involves the requisites of the applicants, amendments to federal regulations, adjustments to how we interpret information, etc., it seems that once there is a semblance of stability, everything starts anew. Many can attest to the number of moving parts and the abundance of deviations we may witness in policy from year to year, month to month, and sometimes sooner. Despite the differences in government policies, applicants must stay current in an industry that is continually evolving. The tips shown in this blog can help Public Assistance applicants meet their requirements and receive quicker returns, despite the nature of the disaster or any recent changes in local, state, and federal regulations.",
    ],
  },
  {
    heading: "PRESENTATION",
    image: img.dr1,
    paragraphs: [
      "One of the common grievances that applicants may voice is simply the amount of time that elapses between their submission and the reimbursement of funds. Furthermore, after a substantial wait time, an applicant may only receive a partial payment while responding to further information requests to receive the remaining amount.",
      "One of the ways we mitigate this setback is through the presentation. One of the obstacles that consultants face when reviewing applicant submissions is checking copious amounts of data. In the instance of a larger project, there could be tens of thousands of line items that we must review to make recommendations for payment approval. The large amounts of information must be organized before observation. This data could be represented in loading and hauling tickets for debris removal, daily activity reports, historical inventory for equipment use, hourly timesheets, payroll documentation, etc.",
      "For most project submissions, there will be a combination of every available cost type. Therefore, the volume of documents, files, figures, and records that the reviewer must account for can sometimes turn the Public Assistance application process into a long-term affair. This problem is only exacerbated when applicants must prepare for the upcoming year or an impending disaster while having not received their funds from the previous calendar year.",
      "Presentation for Public Assistance reimbursement involves the use of Spreadsheets. For reviewers, receiving timesheets, debris tickets, and sizeable reports in PDF (portable document format) scans makes it so they must enter the submitted data manually. Manual data entry can be time-consuming, depending on the magnitude of the project submission. PDFs may be converted based on the document; however, it is hardly ever seamless and can also become a task. While PDF copies of all required records, according to the Public Assistance Program and Policy Guide, are essential for review, it is ideal that spreadsheets reflecting the same information are also submitted. The use of spreadsheets will allow for the PDF documents to be used as a reference to cross-check the figures in the spreadsheets that will be tested by the review team. The use of Excel instead of pdf files can cut the review duration to a fraction of the time it would take otherwise.",
    ],
  },
  {
    heading: "ORGANIZATION",
    image: img.dr2,
    paragraphs: [
      "On the surface, many Disaster Recovery applications may appear not to have all the required documents from the applicant to make a positive recommendation for reimbursement from a federal entity. The situation often arises where the reviewer submits a request for information. However, let us imagine, in this case, that the applicant says the document(s) in question were already submitted. How is this possible? One reason for this can be mislabeling.",
      "When applications are submitted, documents necessary for review are uploaded to a database, e.g., Grants Portal. Some applicants name files without the specificity for them to be located, organized, and analyzed efficiently by the reviewer. While the reviewer should observe every document submitted, once projects come into play with 1000s of files, a specific form can slip through the cracks and end up as an oversight. Thus, it will aid both parties in achieving the desired results earlier if separate files are named to represent the name of the applicant, the disaster in question, cost type, project number, etc. Some individual applicants have an extensive history of Public Assistance, meaning that pertinent documents may have been submitted previously under a different disaster or project. Please be mindful that it is ideal for applicants to resubmit all documents for each event and not assume that the reviewing party is already in possession. Resubmission limits room for error on the reviewer's part since less of a search is required to organize an applicant's documentation.",
      "The organization can also be hindered when a \"master dump\" is submitted. A \"master dump\" is when all required documents are presented together in the form of a single PDF. This situation can also make it hard to identify and account for every large project's available record. In efforts to distribute or receive reimbursement as quickly as possible, applicants should submit respective documents to databases separated by their cost type. As well as dividing extensive reports with 100s and 1000s of pages (such as timesheets, debris tickets, activity reports, payroll, etc.) into smaller documents.",
    ],
  },
  {
    heading: "POLICY PROFICIENCY",
    image: img.dr3,
    paragraphs: [
      "One drawback that applicants may fall victim to is not fully adhering to the policies in place and omitting certain documents required based on the system's nature. They can be federal regulations or regulations that adhere to the specific government level that the applicant is associated with (city, county, state) and the cost type (pay policy, procurement policy, benefits, etc.). It is beneficial to all applicants to review Public Assistance guidelines and their approaches to understand what makes up the requisite information vital in receiving reimbursement. The applicants' jurisdiction policies must also be followed along with federal regulations if the applicant's bylaws are deemed stricter than the federal rules in place.",
    ],
  },
  {
    heading: "ACCESSIBILITY AND READINESS",
    image: img.dr4,
    paragraphs: [
      "To process an application as soon as possible, sometimes further information is requested from the applicant. It is paramount that applicants respond immediately to RFIs (request for information). At times, there may be a single item missing, or the reviewer has an issue that could have a quick turnaround. In cases such as these, applicants will possibly be contacted directly instead of an RFI. It is wholly understandable that remaining available can be difficult with the day to day operations to which we are obligated. However, we must understand that reviewers and applicants work together to accomplish the objective of reimbursement. While reviewers wait on missing information, countless and constant new projects are coming down the pike for review. This high-traffic situation adds time to the analysis of eligibility and, in turn, the expected reimbursement.",
    ],
  },
  {
    heading: "CONCLUSION",
    image: img.dr5,
    paragraphs: [
      <>
        The tips discussed in this article will not only ease the process for reviewers, but also applicants of varying
        jurisdictions, while significantly decreasing the time needed to distribute reimbursement, and minimizing the
        chances of an applicant having to make multiple submissions to receive Public Assistance. These tips are
        imperative to receiving the funds needed as an applicant to return to pre-disaster conditions. If you require
        assistance for formulating or reviewing an application for reimbursement, please send an email to{" "}
        <a href={`mailto:${site.email}`}>
          <u>{site.email}</u>
        </a>
        .
      </>,
    ],
  },
];

export default function Page() {
  return (
    <section className="section bg-white">
      <div className="wrap-md">
        <h1 className="h-lg section-title">Disaster Recovery: Things to Consider</h1>
        {blocks.map((b, i) => (
          <div key={b.heading} className={`zig${i % 2 === 1 ? " reverse" : ""}`}>
            <div className="zig-media">
              <img src={b.image} alt="" loading="lazy" style={{ aspectRatio: "auto", height: "auto" }} />
            </div>
            <div className="zig-text">
              <h3 className="h-md">{b.heading}</h3>
              <div className="body">
                {b.paragraphs.map((p, j) => (
                  <p key={j} style={j > 0 ? { marginTop: 0 } : undefined}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
