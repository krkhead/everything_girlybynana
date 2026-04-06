import { whatsAppContactUrl } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <p className="font-serif text-3xl font-light text-gradient-brand">
            Everything Girly
          </p>
          <p className="font-script text-lg text-blush/80">by Nana</p>
          <p className="font-sans text-xs text-white/50 leading-relaxed max-w-xs">
            Premium beauty & accessories from Lagos. Every product chosen with
            love for every girl who deserves to feel beautiful.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-3">
          <p className="font-sans text-xs text-white/40 uppercase tracking-widest mb-2">
            Quick Links
          </p>
          {[
            { label: "Shop", href: "#products" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
            { label: "Instagram", href: "https://www.instagram.com/everything_girlybynana/", external: true },
            { label: "TikTok", href: "https://www.tiktok.com/@everythinggirlybynana", external: true },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="font-sans text-sm text-white/60 hover:text-blush-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <p className="font-sans text-xs text-white/40 uppercase tracking-widest mb-2">
            Get in Touch
          </p>
          <a
            href={whatsAppContactUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-brand text-white font-sans text-sm px-6 py-3 rounded-full hover:shadow-glow transition-all min-h-[44px] w-fit"
          >
            💬 WhatsApp Nana
          </a>
          <a
            href="mailto:najegs24@gmail.com"
            className="font-sans text-sm text-white/60 hover:text-blush-primary transition-colors"
          >
            najegs24@gmail.com
          </a>
          <p className="font-sans text-xs text-white/40 leading-relaxed">
            📍 Lagos, Nigeria
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-5 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-white/30">
            © {year} Everything Girly by Nana. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/30">
            Made with 💕 in Lagos
          </p>
        </div>
      </div>
    </footer>
  );
}
