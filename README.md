# A&I Consulting: website prototype

Design prototype of a new website for A&I Consulting (aiconsulting.ro), prepared for Ioana in the Business Forward digital-transformation programme. It responds to the positioning and customer-journey review of the current site.

**Not the official site.** Pages are set to `noindex` so the prototype stays out of search results.

## What changed and why

| Finding in the review | What the prototype does |
|---|---|
| Hero mixes a big "5", five arguments, photos and a button | One message (the firm's own tagline), one action, and one visual: a sample monthly report |
| Little explanation of the client experience | "Cum lucrăm" (4 steps) and a sample "Raportul lunii" showing what a client receives |
| Scale and credibility not visible | Proof strip under the hero: client count, founding year, CECCAR, UNEVAR |
| Generic promises on the About page | Positioning by client type, concrete services with what is included |
| News feed last updated in 2022 | Removed. Replaced by a small "Termene fiscale în această lună" block |
| Quotation form asks for CUI, registered office, VAT status | Three-field enquiry; company details are requested after the first conversation |
| Growth in advisory services | "Raportul lunar" section: dashboard, written explanation, cash-flow call |

## Content to confirm with Ioana before this goes live

Everything below is either taken from her brief (not independently verified) or is a proposal in the prototype.

- **"Peste 300 de clienți"** comes from her description. Confirm the figure and whether it can be published.
- **CECCAR ranking / awards** are not on the page. Add the exact year and category once confirmed.
- **Client segments** (IT and services, manufacturing, start-ups) are inferred from the two testimonials and the service list.
- **The monthly report** and its sample figures are illustrative. The section says it is "in pilot"; change or remove that line to match reality.
- **How we work, step 3**: says clients send documents without naming a channel. Name the real one (email, shared folder, portal) once decided.
- **Fiscal calendar**: D300 and D112 due by the 25th are for monthly filers. Have the accountants review the wording and add other deadlines they want to show.
- **Team**: names and roles are from the current Team page. Photos are placeholders (initials). The current site lists *Ioana Costea* and *Ioana Varga* as managing partners; confirm how Ioana Iconar appears in the team.
- **Testimonials** are the two on the current site, translated for the English version. Confirm the clients agree to the wording.
- **Contact form** opens the visitor's email app addressed to office@aiconsulting.ro. It does not send anything by itself. Replace with a real form handler or CRM integration when ready.
- **Privacy policy** link is a placeholder.

## Stack

Next.js (App Router), TypeScript, plain CSS, Bricolage Grotesque and DM Sans via `next/font`. Bilingual: `/ro` and `/en`; `/` redirects to `/ro`. All copy lives in `lib/content.ts`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Deploy

Import this repository in Vercel (framework preset: Next.js, no environment variables needed). Every push to `main` then deploys to production.
