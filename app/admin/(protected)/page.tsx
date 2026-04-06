import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";
import Link from "next/link";
import ProductTable from "@/components/admin/ProductTable";

export default async function AdminDashboard() {
  const allProducts = await db.select().from(products).orderBy(products.createdAt);

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-script text-lg text-blush-primary">dashboard</p>
          <h1 className="font-serif text-4xl font-light text-charcoal leading-none">
            Your Products
          </h1>
        </div>
        <Link
          href="/admin/products/new"
          className="bg-gradient-brand text-white font-sans text-sm px-6 py-3 rounded-full hover:shadow-glow transition-all"
        >
          + Add Product
        </Link>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Products", value: allProducts.length },
          { label: "In Stock", value: allProducts.filter((p) => p.inStock).length },
          { label: "Out of Stock", value: allProducts.filter((p) => !p.inStock).length },
        ].map((stat) => (
          <div key={stat.label} className="glass-card rounded-2xl p-4 text-center">
            <p className="font-serif text-3xl text-gradient-brand font-light">{stat.value}</p>
            <p className="font-sans text-xs text-charcoal/50 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <ProductTable products={allProducts} />
    </div>
  );
}
