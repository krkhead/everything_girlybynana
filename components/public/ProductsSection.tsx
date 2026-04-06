import ProductCard from "./ProductCard";
import type { Product } from "@/lib/db/schema";

interface Props {
  products: Product[];
}

export default function ProductsSection({ products }: Props) {
  return (
    <section id="products" className="py-20 px-5 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-script text-xl text-blush-primary mb-2">our collection</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-charcoal leading-none">
            Shop the <span className="text-gradient-brand">Girly</span> Edit
          </h2>
          <p className="font-sans text-sm text-charcoal/50 mt-4 max-w-md mx-auto">
            Every product is carefully selected so you look and feel your best — no compromise.
          </p>
        </div>

        {products.length === 0 ? (
          /* Empty state */
          <div className="text-center py-20">
            <span className="text-6xl block mb-4">🌸</span>
            <p className="font-serif text-3xl text-charcoal/60 mb-2">Coming Soon</p>
            <p className="font-sans text-sm text-charcoal/40 mb-6">
              New products are on their way!
            </p>
            <a
              href="https://www.instagram.com/everything_girlybynana/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-brand text-white font-sans text-sm px-6 py-3 rounded-full hover:shadow-glow transition-all"
            >
              Follow us on Instagram
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
