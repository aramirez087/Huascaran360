# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-05-01

## User Preferences

- Keep Supabase/Postgres as registration store (do not write the public form directly to Google Sheets).
- Google Spreadsheet may exist for ops, but the app path is `/api/contact` → Supabase `contacts` table.

## Key Learnings

- **Project:** huascaran360mtb
- **Description:** Huascarán 360 MTB - Mountain Bike Race Registration System
- Active public form posts to `/api/contact` (full rider fields + optional payment proof) → `createContact` in Supabase. `/api/register` is the older simpler PayPal/invoice path.
- Contacts table has no `category` column; form `categoria` is prefixed into `message` (`Categoría: …`).
- PayPal invoicing is currently disabled in `/api/register`; payment is manual / optional comprobante via email.
- Inscripciones 2027: Early Bird USD 600, cupos limitados; regular USD 800. Wizard `#contactForm` → POST `/api/contact`.

## Do-Not-Repeat

- [2026-07-13] Do not replace Supabase with direct Google Sheets writes unless the user explicitly re-requests it after saying they want Supabase.

## Decision Log

- [2026-07-13] Reverted Google Sheets storage experiment; continue using Supabase (`DATABASE_URL` + `api/lib/db.js`).
- [2026-07-13] Inscripciones 2027 opened: Early Bird USD 600, cupos limitados. Wizard form restored on the site.
