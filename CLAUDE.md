# Everything Girly by Nana — Project Context

## What This Is
A brand + shop website for @everything_girlybynana, a Lagos-based beauty accessories business.
Customers browse products and order via WhatsApp. Nana manages products via an admin dashboard.

## Key Business Details
- **WhatsApp**: +2347017157491
- **Email**: najegs24@gmail.com
- **Instagram**: @everything_girlybynana
- **TikTok**: @everythinggirlybynana

## Stack
- **Framework**: Next.js 14 App Router (TypeScript)
- **Styling**: Tailwind CSS with custom design system
- **Auth**: NextAuth.js v4 with credentials (single admin — Nana)
- **Database**: Neon Postgres via Drizzle ORM
- **Images**: Vercel Blob
- **Hosting**: Vercel free tier

## Run Commands
```bash
npm run dev          # Start dev server (requires .env.local)
npm run build        # Production build
npm run lint         # ESLint
npm test             # Vitest unit tests
npx tsc --noEmit     # TypeScript check

# One-time setup
npx tsx scripts/seed-admin.ts   # Generate ADMIN_PASSWORD_HASH
npx drizzle-kit push            # Push schema to Neon DB
```

## Key Patterns

**Price storage**: Always in Kobo (integer). ₦15,000 = 1,500,000 kobo.
Use `formatNaira(kobo)` to display, `nairaToKobo(str)` to store.

**WhatsApp links**: Always use `buildWhatsAppUrl(name, price)` from `lib/whatsapp.ts`.
Number is hardcoded there — change it in one place only.

**Naira symbol**: Always `₦` (U+20A6), never "NGN" or "N".

**Products page**: ISR with `revalidate = 60`. After admin changes, the public page
refreshes within 60 seconds. `revalidatePath("/")` is called in every server action.

**Admin protection**: `middleware.ts` blocks all `/admin/*` routes for unauthenticated users.
The admin layout also server-side checks the session and redirects.

**Image uploads**: POST to `/api/upload` → Vercel Blob → returns `{ url }`.
The URL is stored in `products.image_url` column.

## DB Schema (lib/db/schema.ts)
```
products: id, name, price (kobo), description, category, image_url, in_stock, badge, created_at, updated_at
```

## Design System
Colors: cream `#FFF5F0` · blush-primary `#E8637A` · rosegold `#C4956A` · charcoal `#1A1A1A`
Fonts: `font-serif` (Cormorant Garamond) · `font-script` (Dancing Script) · `font-sans` (DM Sans)
Key utilities: `.text-gradient-brand` · `.glass-card` · `.noise-overlay`

## File Structure
```
app/
  page.tsx               — Public homepage (ISR, fetches products)
  layout.tsx             — Fonts + metadata
  globals.css            — Tailwind + custom utilities
  admin/
    layout.tsx           — Auth guard + SessionProvider
    page.tsx             — Product dashboard
    login/page.tsx       — Login form
    actions.ts           — Server Actions (CRUD)
    products/new/        — Add product form
    products/[id]/edit/  — Edit product form
  api/
    auth/[...nextauth]/  — NextAuth handler
    upload/              — Vercel Blob upload endpoint
components/
  public/                — Public site sections
  admin/                 — Admin UI components
lib/
  db/schema.ts           — Drizzle schema
  db/index.ts            — Neon + Drizzle client
  auth.ts                — NextAuth config
  whatsapp.ts            — WhatsApp URL builder
  format.ts              — Naira formatter
hooks/
  useInView.ts           — Intersection Observer scroll-reveal
tests/
  whatsapp.test.ts
  format.test.ts
scripts/
  seed-admin.ts          — Generate ADMIN_PASSWORD_HASH
```

## Common Tasks

**Add a new product category:**
1. Add to `CATEGORIES` array in `components/admin/ProductForm.tsx`
2. Add emoji mapping in `components/public/ProductCard.tsx` (`EMOJI_MAP`)

**Change the WhatsApp number:**
Edit `WHATSAPP_NUMBER` constant in `lib/whatsapp.ts` — affects all order buttons site-wide.

**Change announcement bar text:**
Edit `components/public/AnnouncementBar.tsx`

**Update brand colours:**
Edit `tailwind.config.ts` — the `blush`, `rosegold`, and `cream` colour keys.
