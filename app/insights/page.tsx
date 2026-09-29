import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Insights" };

export default function Insights() {
  return (
    <section className="section bg-white">
      <div className="wrap-md">
        <h1 className="h-lg section-title">Insights</h1>
        <div className="grid-2">
          <div className="insight">
            <h3 className="h-md">Identifying the Right Talent</h3>
            <p className="body">
              Businesses have begun to understand that their most valuable asset is their people. Paragon talks about
              what it takes to identify the right talent for your organization.
            </p>
            <Link href="/identify-the-right-talent" className="btn">
              Find out more
            </Link>
          </div>
          <div className="insight">
            <h3 className="h-md">Disaster Recovery: Reimbursement</h3>
            <p className="body">
              Consultants face challenges with the ever-changing changing landscape of disaster recovery. Paragon
              discusses how to ensure reimbursement.
            </p>
            <Link href="/disaster-recovery-reim" className="btn">
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
