import Image from "next/image";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { formatNaira } from "@/lib/format";
import type { Product } from "@/lib/db/schema";

const EMOJI_MAP: Record<string, string> = {
  lipgloss: "💋",
  "lip-balm": "🌸",
  bonnet: "🎀",
  accessories: "💎",
};

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const priceStr = formatNaira(product.price);
  const whatsappUrl = buildWhatsAppUrl(product.name, priceStr);
  const emoji = product.category ? EMOJI_MAP[product.category] ?? "✨" : "✨";

  return (
    <div className="group relative glass-card rounded-4xl shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col">
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 bg-rosegold text-white font-sans text-xs px-3 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      {/* Out-of-stock overlay */}
      {!product.inStock && (
        <div className="absolute inset-0 z-20 bg-white/60 backdrop-blur-sm flex items-center justify-center rounded-4xl">
          <span className="font-sans text-sm text-charcoal/60 border border-charcoal/20 px-4 py-2 rounded-full bg-white/80">
            Out of Stock
          </span>
        </div>
      )}

      {/* Image / placeholder */}
      <div className="relative aspect-[3/4] bg-gradient-card flex items-center justify-center overflow-hidden rounded-t-4xl">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <span className="text-6xl">{emoji}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-serif text-xl font-light text-charcoal leading-tight">
          {product.name}
        </h3>
        {product.description && (
          <p className="font-sans text-sm text-charcoal/55 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        )}
        <p className="font-sans text-lg font-semibold text-rosegold mt-auto">
          {priceStr}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-brand text-white font-sans text-sm font-medium rounded-full py-3 px-6 hover:shadow-glow hover:scale-105 transition-all duration-200 min-h-[44px]"
        >
          Order on WhatsApp 💬
        </a>
        <p className="text-center font-sans text-[10px] text-charcoal/40">
          Opens WhatsApp · Direct to Nana
        </p>
      </div>
    </div>
  );
}
