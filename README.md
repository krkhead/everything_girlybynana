# Everything Girly by Nana

Brand + shop website for [@everything_girlybynana](https://www.instagram.com/everything_girlybynana/) — a Lagos-based beauty accessories business.

## Features

- 🌸 Beautiful feminine brand website (Cormorant Garamond + Dancing Script + DM Sans)
- 💬 WhatsApp ordering — each product links directly to Nana's WhatsApp with a pre-filled message
- 🛍️ Admin dashboard — Nana logs in to add, edit, and delete products with image uploads
- 📱 Mobile-first responsive design
- 🆓 Fully free to host on Vercel

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 App Router |
| Styling | Tailwind CSS |
| Auth | NextAuth.js v4 (credentials) |
| Database | Neon Postgres + Drizzle ORM |
| Image Storage | Vercel Blob |
| Hosting | Vercel (free tier) |

## Setup

### 1. Clone and install

```bash
git clone <your-repo-url>
cd everything-girly
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in each value:

| Variable | How to get it |
|----------|--------------|
| `DATABASE_URL` | Vercel Dashboard → Storage → Neon → Connect |
| `NEXTAUTH_SECRET` | Run: `openssl rand -base64 32` |
| `NEXTAUTH_URL` | `http://localhost:3000` local / your Vercel URL in production |
| `ADMIN_EMAIL` | Already set to `najegs24@gmail.com` |
| `ADMIN_PASSWORD_HASH` | Run: `npx tsx scripts/seed-admin.ts` |
| `BLOB_READ_WRITE_TOKEN` | Vercel Dashboard → Storage → Blob → Create Store |

### 3. Push the database schema

```bash
npx drizzle-kit push
```

### 4. Run locally

```bash
npm run dev
```

Public site: `http://localhost:3000`
Admin panel: `http://localhost:3000/admin`

## Deployment (Vercel — free)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo
3. Vercel auto-detects Next.js — no build settings needed
4. Add all env vars in **Project Settings → Environment Variables**
5. Deploy — every push to `main` auto-redeploys

### Setting up Neon (free database)

1. Vercel Dashboard → **Storage** → **Create Database** → **Neon**
2. Vercel auto-adds `DATABASE_URL` to your project env vars
3. Run `npx drizzle-kit push` with your production `DATABASE_URL` to create tables

### Setting up Vercel Blob (image uploads)

1. Vercel Dashboard → **Storage** → **Create Database** → **Blob**
2. Vercel auto-adds `BLOB_READ_WRITE_TOKEN` to your project env vars

## Admin Panel

Visit `/admin/login` — sign in with `najegs24@gmail.com` and the password set during setup.

From the dashboard you can:
- **Add products** — name, price (₦), description, category, image, badge, stock toggle
- **Edit products** — update any field including swapping the image
- **Delete products** — removes from the site immediately

Changes appear on the public site within 60 seconds (ISR revalidation).

## Development

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # ESLint
npm test           # Vitest unit tests
npx tsc --noEmit   # TypeScript check
```
