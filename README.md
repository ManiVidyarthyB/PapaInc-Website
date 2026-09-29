# Paragon Advisory Partners — Website (Next.js)

A Next.js 15 (App Router, TypeScript) rebuild of https://pap-inc.com that matches the current GoDaddy site's
layout, typography (Quicksand + Muli/Mulish), colors (#2175ff blue) and content page-for-page.

## Run locally
```bash
npm install
npm run dev                 # http://localhost:3000
npm run build && npm start  # production
```

## Pages
`/`, `/what-we-do`, `/who-we-serve`, `/about`, `/careers`, `/contact-us`, `/insights`, `/business-services`,
`/government-services`, `/healthcare`, `/financial-business`, `/risk-assurance`, `/emergency-management`,
`/mergers-and-acquisitions`, `/accounting-finance`, `/identify-the-right-talent`, `/disaster-recovery-reim`,
`/privacy-policy`, `/terms-and-conditions`

Old GoDaddy URLs with encoded characters (`/financial-%26-business`, `/accounting-%26-finance`,
`/disaster-recovery%3A-reim`) redirect permanently to the clean routes (see `next.config.ts`).

## Where to edit
- `lib/site.ts` — company name, phone, email, address, social links, navigation
- `lib/images.ts` — every image URL in one place
- `app/globals.css` — all styles
- `app/**/page.tsx` — page content

## Before going live
1. **Images** — `lib/images.ts` currently points at the GoDaddy image CDN. Download your own uploaded images into
   `/public/images` and update the URLs. Images marked "stock" come from GoDaddy's stock library, which is licensed
   only for GoDaddy-hosted sites — replace them with photos you own or license.
2. **Contact form** — `app/api/contact/route.ts` validates and logs submissions. Connect an email provider
   (Resend, SendGrid, SMTP) to deliver them.
3. **Privacy Policy / Terms** — the live site has an empty Privacy Policy page and "Coming soon!" on Terms; both are
   reproduced as-is.
4. **Deploy** — Vercel is simplest (import the repo, no config needed).
