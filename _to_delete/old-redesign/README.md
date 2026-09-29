# Paragon Advisory Partners — Website (Next.js)

Rebuild of https://pap-inc.com on Next.js 15 (App Router, TypeScript).

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Where to edit
- `lib/content.ts` — all site copy: contact info, services, industries, values, packs, social links
- `lib/insights.ts` — Insights articles (add a new object to publish a new article)
- `app/globals.css` — colors (`--blue: #2175ff`), spacing, all styles
- `components/Logo.tsx` — swap the "P" mark for your logo file in `/public`
- `components/Visual.tsx` — abstract illustrations; replace with your photos via `next/image`

## To finish before going live
1. **Contact form** — `app/api/contact/route.ts` validates and logs submissions. Connect an email provider (Resend, SendGrid, SMTP) to deliver them to your inbox.
2. **Privacy Policy / Terms** — placeholder copy; paste your final legal text.
3. **Images & logo** — add to `/public`.
4. Deploy (Vercel is simplest: import the repo, no config needed). Old GoDaddy URLs (`/financial-%26-business`, `/identify-the-right-talent`, `/disaster-recovery%3A-reim`) redirect to the new routes.

## Pages
`/`, `/what-we-do`, `/who-we-serve`, `/about`, `/careers`, `/contact-us`, `/insights`, `/insights/[slug]`,
`/business-services`, `/government-services`, `/healthcare`, `/financial-business`, `/privacy-policy`, `/terms-and-conditions`
