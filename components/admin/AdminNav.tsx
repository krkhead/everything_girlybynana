"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function AdminNav() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-blush/20 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="font-serif text-xl font-light text-gradient-brand">
            Admin
          </Link>
          <span className="text-charcoal/20">·</span>
          <Link
            href="/admin/products/new"
            className="font-sans text-sm text-charcoal/60 hover:text-blush-primary transition-colors"
          >
            + Add Product
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            target="_blank"
            className="font-sans text-xs text-charcoal/40 hover:text-charcoal/70 transition-colors"
          >
            View Site ↗
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="font-sans text-xs text-charcoal/40 hover:text-red-400 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
}
