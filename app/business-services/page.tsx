import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Business Services" };

type Item = { name: string; lines?: string[] };
type Pack = { title: string; note?: string; left: Item[]; right: Item[] };

const packs: Pack[] = [
  {
    title: "Core Business Pack",
    left: [
      {
        name: "Internal Policies & Procedures",
        lines: ["Cash Management", "Inventory Management", "Revenue/Accounts Receivable Management"],
      },
    ],
    right: [
      { name: "Financial Statements", lines: ["Income Statement", "Balance Sheet", "Cash Flow Statement"] },
      {
        name: "Strategic Planning",
        lines: ["Mission, Vision, and Purpose Statement", "Target Market", "SWOT Analysis", "Core Business plan"],
      },
    ],
  },
  {
    title: "Pro Business Pack",
    note: "Includes everything from Core Services",
    left: [
      { name: "Internal Policies & Procedures", lines: ["Policies from Core Pack", "Procurement", "Expense reimbursement"] },
    ],
    right: [
      {
        name: "Financial Statements",
        lines: ["Financials Core Pack", "Cash Flow Statement", "1 Year Pro - Forma Projections"],
      },
      {
        name: "Strategic Planning",
        lines: [
          "Strategic Plan from Core Pack",
          "Competitors Profile",
          "Value Chain Analysis",
          "Pricing and Product Differentiation",
        ],
      },
    ],
  },
  {
    title: "Essential Business Pack",
    note: "Includes everything from Pro Services",
    left: [
      {
        name: "Internal Policies & Procedures",
        lines: ["Policies from Pro Pack", "Onboarding & Offboarding", "Property Plant & Equipment"],
      },
      { name: "Financial Statements", lines: ["Financials Pro Pack", "Owner's Equity", "3 Year Pro Forma Projections"] },
    ],
    right: [
      {
        name: "Strategic Planning",
        lines: [
          "Strategic Plan from Pro Pack",
          "Tax Planning & Tax Assistance",
          "Grant Assistance",
          "Advance Customer Management",
          "Create Accountability Systems",
        ],
      },
    ],
  },
  {
    title: "Al Carte Services",
    left: [{ name: "Grant Administration and Compliance Monitoring" }, { name: "Grant Writing Seminar" }],
    right: [
      { name: "Response to Request for Proposal or Notice of Funding Availability" },
      { name: "Accounting & Bookkeeping" },
    ],
  },
];

function Column({ items }: { items: Item[] }) {
  return (
    <div>
      {items.map((it) => (
        <div className="menu-item" key={it.name}>
          <h3>{it.name}</h3>
          {it.lines && (
            <ul>
              {it.lines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default function BusinessServices() {
  return (
    <section className="section bg-white">
      <div className="wrap-md">
        <h1 className="h-lg section-title">Small Business Services Menu</h1>
        {packs.map((p) => (
          <div className="menu-section" key={p.title}>
            <h2>{p.title}</h2>
            {p.note && <p className="menu-note">{p.note}</p>}
            <div className="menu-cols">
              <Column items={p.left} />
              <Column items={p.right} />
            </div>
          </div>
        ))}
        <p className="menu-cta">
          Call to schedule your FREE consult | {site.phone} | The Benchmark of Quality
        </p>
      </div>
    </section>
  );
}
