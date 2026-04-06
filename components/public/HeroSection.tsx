"use client";
import { useEffect, useState } from "react";
import { whatsAppContactUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-hero noise-overlay">
      {/* Decorative blob — back-left */}
      <svg
        aria-hidden
        className="absolute -left-32 -top-24 w-[480px] opacity-[0.12] pointer-events-none"
        viewBox="0 0 400 400"
      >
        <path
          d="M320,100 C380,160 380,260 320,320 C260,380 160,380 100,320 C40,260 40,160 100,100 C160,40 260,40 320,100Z"
          fill="#E8637A"
        />
      </svg>

      {/* Decorative blob — right */}
      <svg
        aria-hidden
        className="absolute -right-20 top-10 w-[420px] opacity-[0.08] pointer-events-none"
        viewBox="0 0 400 400"
      >
        <path
          d="M280,80 C360,130 370,270 300,340 C230,410 90,390 50,300 C10,210 60,80 160,50 C260,20 200,30 280,80Z"
          fill="#C4956A"
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-script text-2xl text-blush-primary mb-2">
            Welcome to
          </p>
          <h1 className="font-serif font-light leading-none mb-3">
            <span className="text-gradient-brand text-7xl md:text-8xl block">
              Everything
            </span>
            <span className="text-gradient-brand text-7xl md:text-8xl block">
              Girly
            </span>
            <span className="text-5xl md:text-6xl text-charcoal/80 block mt-1">
              by Nana
            </span>
          </h1>
          <p className="font-sans text-base text-charcoal/60 mt-5 mb-8 max-w-sm leading-relaxed">
            Premium lip gloss, lip balm, bonnets and accessories — chosen with
            love for every girl who deserves to feel beautiful every single day.
            Based in Lagos. 🌸
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-gradient-brand text-white font-sans text-sm font-medium px-8 py-4 rounded-full shadow-glow hover:shadow-card-hover hover:scale-105 transition-all duration-200 min-h-[48px]"
            >
              Shop Now ✦
            </a>
            <a
              href={whatsAppContactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-blush-primary text-blush-primary font-sans text-sm px-8 py-4 rounded-full hover:bg-blush-light/40 transition-all duration-200 min-h-[48px]"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex gap-6 mt-10">
            {["Lagos-Made", "Cruelty Free", "Girl-Approved"].map((badge) => (
              <span
                key={badge}
                className="font-sans text-xs text-charcoal/50 border border-blush/40 rounded-full px-3 py-1"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Visual side */}
        <div className="relative flex justify-center items-center">
          {/* Floating badge */}
          <div className="absolute -top-4 -right-2 md:right-4 z-20 bg-white/90 backdrop-blur-sm border border-blush/40 rounded-full px-4 py-2 shadow-card animate-float">
            <span className="font-script text-sm text-blush-primary">New Drop ✨</span>
          </div>

          {/* Product visual placeholder — replaced with real images via admin */}
          <div className="relative w-72 h-80 md:w-80 md:h-96 glass-card rounded-4xl shadow-glass flex flex-col items-center justify-center gap-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-card" />
            <span className="relative z-10 text-7xl">💋</span>
            <p className="relative z-10 font-script text-xl text-blush-primary">
              Glossy Lip Gloss
            </p>
            <p className="relative z-10 font-serif text-2xl text-rosegold font-semibold">
              ₦15,000
            </p>
          </div>

          {/* Sparkles */}
          {[
            { top: "10%", left: "8%", delay: "0s", size: "text-xl" },
            { top: "75%", left: "5%", delay: "0.8s", size: "text-sm" },
            { top: "15%", right: "5%", delay: "0.4s", size: "text-base" },
            { top: "80%", right: "10%", delay: "1.2s", size: "text-xs" },
          ].map((s, i) => (
            <span
              key={i}
              className={`absolute ${s.size} text-blush-primary animate-sparkle pointer-events-none`}
              style={{ top: s.top, left: s.left, right: s.right, animationDelay: s.delay }}
              aria-hidden
            >
              ✦
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
