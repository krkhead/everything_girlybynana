"use client";
import { useInView } from "@/hooks/useInView";

const features = [
  {
    emoji: "🌿",
    title: "Premium Ingredients",
    desc: "Only the good stuff. Carefully sourced, skin-loving formulas you can trust.",
  },
  {
    emoji: "🚀",
    title: "Lagos Delivery",
    desc: "Fast shipping across Lagos and beyond. Your order is handled with care.",
  },
  {
    emoji: "🎁",
    title: "Cute Packaging",
    desc: "Unboxing is part of the experience. Every order arrives looking beautiful.",
  },
  {
    emoji: "💕",
    title: "Made with Love",
    desc: "A girl-run business built on passion, style, and making you feel special.",
  },
];

export default function WhyUsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-5 bg-cream-dark transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-script text-xl text-blush-primary mb-2">why choose us</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-none">
            The <span className="text-gradient-brand">Nana</span> difference
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card rounded-3xl p-6 text-center flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-blush-light/60 flex items-center justify-center text-2xl">
                {f.emoji}
              </div>
              <h3 className="font-serif text-lg text-charcoal leading-tight">{f.title}</h3>
              <p className="font-sans text-xs text-charcoal/55 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
