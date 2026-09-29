/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "What We Do" };

const services = [
  {
    title: "Risk Assurance",
    text: "Providing an independent and unbiased review of your company's operations.",
    href: "/risk-assurance",
    src: img.riskAssurance,
  },
  {
    title: "Emergency Management",
    text: "Providing disaster assistance for when the unforeseen happens.",
    href: "/emergency-management",
    src: img.emergencyCircle,
  },
  {
    title: "Transaction Services",
    text: "Delivering technical, transactional, and operational expertise to successfully buy or sell a business.",
    href: "/mergers-and-acquisitions",
    src: img.transactionCircle,
  },
  {
    title: "Accounting and Finance",
    text: "Providing backend accounting and finance support to help you gain a thorough understanding of the business.",
    href: "/accounting-finance",
    src: img.accountingCircle,
  },
];

export default function WhatWeDo() {
  return (
    <>
      <section className="section bg-white">
        <div className="wrap-md intro">
          <h1 className="h-md">What We Do</h1>
          <p className="body">
            Our consultants and operational model are key to how Paragon ensures its clients&apos; needs are met. We
            pride ourselves in our value add by providing fluidity and dependability on any project.
          </p>
        </div>
      </section>

      <section className="section bg-blue">
        <div className="wrap-md">
          <div className="services">
            {services.map((s) => (
              <div className="service" key={s.title}>
                <img className="circle" src={s.src} alt={s.title} loading="lazy" />
                <h3 className="h-md">{s.title}</h3>
                <p>{s.text}</p>
                <Link href={s.href} className="btn btn-white">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ height: 112 }} />
    </>
  );
}
