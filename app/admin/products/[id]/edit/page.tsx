import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import ProductForm from "@/components/admin/ProductForm";
import { updateProduct } from "@/app/admin/actions";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export default async function EditProductPage({ params }: Props) {
  const id = parseInt(params.id);
  if (isNaN(id)) notFound();

  const [product] = await db.select().from(products).where(eq(products.id, id));
  if (!product) notFound();

  const action = updateProduct.bind(null, id);

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
          <p className="font-script text-lg text-blush-primary">editing</p>
          <h1 className="font-serif text-4xl font-light text-charcoal leading-none">
            {product.name}
          </h1>
        </div>
      </div>
      <ProductForm product={product} action={action} submitLabel="Save Changes" />
    </div>
  );
}
