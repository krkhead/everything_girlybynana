const IG_HANDLE = "everything_girlybynana";
const IG_URL = "https://www.instagram.com/everything_girlybynana/";

const gradients = [
  "from-blush-light to-blush",
  "from-rosegold-light to-rosegold",
  "from-blush to-blush-primary",
  "from-cream-dark to-blush-light",
  "from-rosegold to-rosegold-dark",
  "from-blush-primary to-blush-deep",
];

export default function InstagramSection() {
  return (
    <section className="py-20 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="font-script text-xl text-blush-primary mb-2">follow along</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal">
            <span className="text-gradient-brand">@{IG_HANDLE}</span>
          </h2>
          <p className="font-sans text-sm text-charcoal/50 mt-3">
            Follow us for daily inspo, new drops, and behind-the-scenes content
          </p>
        </div>

        {/* Scrollable strip */}
        <div className="relative">
          {/* Right fade mask */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-cream to-transparent" />

          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {gradients.map((g, i) => (
              <a
                key={i}
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-44 h-44 rounded-3xl overflow-hidden relative group cursor-pointer"
                aria-label={`View @${IG_HANDLE} on Instagram`}
              >
                <div className={`w-full h-full bg-gradient-to-br ${g} flex items-center justify-center`}>
                  <span className="text-4xl opacity-40 group-hover:opacity-70 transition-opacity">
                    {["💋", "🌸", "🎀", "✨", "💕", "🌹"][i]}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blush-primary/0 group-hover:bg-blush-primary/20 transition-all duration-200 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-blush-primary text-blush-primary font-sans text-sm px-8 py-3 rounded-full hover:bg-blush-light/40 transition-all duration-200"
          >
            Follow on Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
}
