"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md shadow-glass"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-light leading-none text-gradient-brand">
          Everything Girly
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Shop", href: "#products" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-charcoal/70 hover:text-blush-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Instagram icon */}
          <a
            href="https://www.instagram.com/everything_girlybynana/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="text-charcoal/60 hover:text-blush-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-charcoal/70"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-blush/20 px-5 py-6 flex flex-col gap-5">
          {[
            { label: "Shop", href: "#products" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-base text-charcoal/70 hover:text-blush-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/everything_girlybynana/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-blush-primary"
          >
            @everything_girlybynana
          </a>
        </div>
      )}
    </nav>
  );
}
