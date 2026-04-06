"use client";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    text: "The lip gloss is SO moisturising and the packaging is absolutely adorable. I've already bought 3 bottles and gifted two to my friends!",
    name: "Temi A.",
    city: "Lagos Island",
    emoji: "💋",
  },
  {
    text: "Delivered faster than I expected. The bonnet is so soft and it holds my hair perfectly through the night. 10/10 would recommend!",
    name: "Chisom N.",
    city: "Abuja",
    emoji: "🎀",
  },
  {
    text: "The lip balm has literally changed my lips. So nourishing! Will definitely be ordering more. Nana really put love into this.",
    name: "Adaeze O.",
    city: "Ikeja, Lagos",
    emoji: "🌸",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-base">★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-5 bg-cream-dark transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-script text-xl text-blush-primary mb-2">happy girls</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-none">
            What they&apos;re <span className="text-gradient-brand">saying</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-4xl p-6 flex flex-col gap-4 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-blush-light/60 flex items-center justify-center text-xl">
                {t.emoji}
              </div>
              <Stars />
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed italic flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-blush/20 pt-4">
                <p className="font-serif text-base text-charcoal font-semibold">{t.name}</p>
                <p className="font-sans text-xs text-charcoal/45">{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
