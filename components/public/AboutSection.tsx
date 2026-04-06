"use client";
import { useInView } from "@/hooks/useInView";

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Decorative side */}
        <div className="relative hidden md:flex items-center justify-center">
          <span
            className="font-serif font-light text-[160px] leading-none select-none pointer-events-none"
            style={{ color: "rgba(232,99,122,0.07)" }}
          >
            &ldquo;
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-brand opacity-[0.12] blur-3xl" />
          </div>
          <div className="absolute flex flex-col items-center gap-5">
            {["💋", "🌸", "🎀"].map((e, i) => (
              <span
                key={e}
                className="text-4xl animate-float"
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                {e}
              </span>
            ))}
          </div>
        </div>

        {/* Text side */}
        <div>
          <p className="font-script text-xl text-blush-primary mb-3">our story</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
            Made with love,{" "}
            <span className="text-gradient-brand">for every girl</span>
          </h2>
          <p className="font-sans text-base text-charcoal/65 leading-relaxed mb-6">
            Everything Girly by Nana started with one girl&apos;s obsession with
            looking and feeling good without compromise. Based in Lagos, every
            product is chosen with love — because you deserve packaging as
            beautiful as what&apos;s inside.
          </p>
          <p className="font-sans text-base text-charcoal/65 leading-relaxed mb-8">
            We believe beauty should be fun, affordable, and accessible to every
            girl in Lagos and beyond. From your morning routine to a night out —
            we&apos;ve got you covered. 💕
          </p>

          {/* Value pills */}
          <div className="flex flex-wrap gap-3">
            {["Lagos-Made", "Cruelty Free", "Girl-Approved", "Quality First"].map((v) => (
              <span
                key={v}
                className="font-sans text-xs text-blush-primary border border-blush/40 bg-blush-light/30 rounded-full px-4 py-2"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
