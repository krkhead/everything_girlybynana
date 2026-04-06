"use client";
import Link from "next/link";
import { formatNaira } from "@/lib/format";
import { deleteProduct } from "@/app/admin/actions";
import type { Product } from "@/lib/db/schema";

interface Props {
  products: Product[];
}

export default function ProductTable({ products }: Props) {
  async function handleDelete(id: number) {
    if (!confirm("Delete this product? This cannot be undone.")) return;
    await deleteProduct(id);
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16 border-2 border-dashed border-blush/30 rounded-3xl">
        <span className="text-5xl block mb-4">🛍️</span>
        <p className="font-serif text-2xl text-charcoal/50 mb-2">No products yet</p>
        <p className="font-sans text-sm text-charcoal/35 mb-6">
          Add your first product to get started
        </p>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 bg-gradient-brand text-white font-sans text-sm px-6 py-3 rounded-full hover:shadow-glow transition-all"
        >
          + Add Product
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-3xl border border-blush/20 bg-white/60">
      <table className="w-full">
        <thead>
          <tr className="border-b border-blush/20">
            {["Product", "Price", "Category", "Stock", "Badge", "Actions"].map((h) => (
              <th
                key={h}
                className="font-sans text-xs text-charcoal/40 uppercase tracking-wider text-left px-5 py-4 first:rounded-tl-3xl last:rounded-tr-3xl"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr
              key={p.id}
              className={`border-b border-blush/10 last:border-0 hover:bg-blush-light/20 transition-colors ${
                i % 2 === 0 ? "" : "bg-cream/40"
              }`}
            >
              <td className="px-5 py-4">
                <p className="font-serif text-base text-charcoal">{p.name}</p>
                {p.description && (
                  <p className="font-sans text-xs text-charcoal/40 line-clamp-1 mt-0.5">
                    {p.description}
                  </p>
                )}
              </td>
              <td className="px-5 py-4 font-sans text-sm text-rosegold font-medium">
                {formatNaira(p.price)}
              </td>
              <td className="px-5 py-4 font-sans text-xs text-charcoal/55 capitalize">
                {p.category ?? "—"}
              </td>
              <td className="px-5 py-4">
                <span
                  className={`font-sans text-xs px-2.5 py-1 rounded-full ${
                    p.inStock
                      ? "bg-green-50 text-green-600"
                      : "bg-red-50 text-red-500"
                  }`}
                >
                  {p.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </td>
              <td className="px-5 py-4 font-sans text-xs text-charcoal/55">
                {p.badge ?? "—"}
              </td>
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <Link
                    href={`/admin/products/${p.id}/edit`}
                    className="font-sans text-xs text-blush-primary hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="font-sans text-xs text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
