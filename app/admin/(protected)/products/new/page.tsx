import ProductForm from "@/components/admin/ProductForm";
import { createProduct } from "@/app/admin/actions";
import Link from "next/link";

export default function NewProductPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link
          href="/admin"
          className="font-sans text-sm text-charcoal/40 hover:text-charcoal/70 transition-colors"
        >
          ← Back
        </Link>
        <div>
          <p className="font-script text-lg text-blush-primary">add new</p>
          <h1 className="font-serif text-4xl font-light text-charcoal leading-none">
            New Product
          </h1>
        </div>
      </div>
      <ProductForm action={createProduct} submitLabel="Add Product" />
    </div>
  );
}
