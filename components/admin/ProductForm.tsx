"use client";
import { useState } from "react";
import { koboToNaira } from "@/lib/format";
import type { Product } from "@/lib/db/schema";
import ImageUploader from "./ImageUploader";

interface Props {
  product?: Product;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
}

const CATEGORIES = [
  { value: "", label: "— Select category —" },
  { value: "lipgloss", label: "Lip Gloss" },
  { value: "lip-balm", label: "Lip Balm" },
  { value: "bonnet", label: "Bonnet" },
  { value: "accessories", label: "Accessories" },
];

export default function ProductForm({ product, action, submitLabel }: Props) {
  const [imageUrl, setImageUrl] = useState(product?.imageUrl ?? "");
  const [inStock, setInStock] = useState(product?.inStock ?? true);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    formData.set("imageUrl", imageUrl);
    formData.set("inStock", String(inStock));

    try {
      await action(formData);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-6 max-w-lg">
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs text-charcoal/60 uppercase tracking-wider">
          Product Name *
        </label>
        <input
          name="name"
          required
          defaultValue={product?.name ?? ""}
          placeholder="e.g. Glossy Lip Gloss"
          className="font-sans text-sm bg-white border border-blush/30 rounded-2xl px-4 py-3 outline-none focus:border-blush-primary transition-colors"
        />
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs text-charcoal/60 uppercase tracking-wider">
          Price (₦) *
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-sm text-charcoal/40">
            ₦
          </span>
          <input
            name="price"
            type="number"
            required
            min="0"
            step="50"
            defaultValue={product ? koboToNaira(product.price) : ""}
            placeholder="15000"
            className="font-sans text-sm bg-white border border-blush/30 rounded-2xl pl-8 pr-4 py-3 w-full outline-none focus:border-blush-primary transition-colors"
          />
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs text-charcoal/60 uppercase tracking-wider">
          Description
        </label>
        <textarea
          name="description"
          rows={3}
          defaultValue={product?.description ?? ""}
          placeholder="A short product description..."
          className="font-sans text-sm bg-white border border-blush/30 rounded-2xl px-4 py-3 outline-none focus:border-blush-primary transition-colors resize-none"
        />
      </div>

      {/* Category */}
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs text-charcoal/60 uppercase tracking-wider">
          Category
        </label>
        <select
          name="category"
          defaultValue={product?.category ?? ""}
          className="font-sans text-sm bg-white border border-blush/30 rounded-2xl px-4 py-3 outline-none focus:border-blush-primary transition-colors"
        >
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      {/* Badge */}
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs text-charcoal/60 uppercase tracking-wider">
          Badge (optional)
        </label>
        <input
          name="badge"
          defaultValue={product?.badge ?? ""}
          placeholder="e.g. New · Fan Fave · Best Seller"
          className="font-sans text-sm bg-white border border-blush/30 rounded-2xl px-4 py-3 outline-none focus:border-blush-primary transition-colors"
        />
      </div>

      {/* Image upload */}
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs text-charcoal/60 uppercase tracking-wider">
          Product Image
        </label>
        <ImageUploader currentUrl={imageUrl} onUpload={setImageUrl} />
      </div>

      {/* In stock */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={inStock}
          onClick={() => setInStock(!inStock)}
          className={`relative w-12 h-6 rounded-full transition-colors ${
            inStock ? "bg-blush-primary" : "bg-charcoal/20"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
              inStock ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
        <span className="font-sans text-sm text-charcoal/70">
          {inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-brand text-white font-sans text-sm font-medium py-3.5 rounded-full hover:shadow-glow transition-all disabled:opacity-60 mt-2"
      >
        {loading ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}
