"use server";
import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { nairaToKobo } from "@/lib/format";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");
}

export async function createProduct(formData: FormData) {
  await requireAdmin();

  const name = formData.get("name") as string;
  const priceRaw = formData.get("price") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const badge = formData.get("badge") as string;
  const inStock = formData.get("inStock") === "true";

  if (!name || !priceRaw) throw new Error("Name and price are required");

  await db.insert(products).values({
    name: name.trim(),
    price: nairaToKobo(priceRaw),
    description: description?.trim() || null,
    category: category || null,
    imageUrl: imageUrl || null,
    badge: badge?.trim() || null,
    inStock,
  });

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function updateProduct(id: number, formData: FormData) {
  await requireAdmin();

  const name = formData.get("name") as string;
  const priceRaw = formData.get("price") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const badge = formData.get("badge") as string;
  const inStock = formData.get("inStock") === "true";

  if (!name || !priceRaw) throw new Error("Name and price are required");

  await db
    .update(products)
    .set({
      name: name.trim(),
      price: nairaToKobo(priceRaw),
      description: description?.trim() || null,
      category: category || null,
      imageUrl: imageUrl || null,
      badge: badge?.trim() || null,
      inStock,
      updatedAt: new Date(),
    })
    .where(eq(products.id, id));

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deleteProduct(id: number) {
  await requireAdmin();
  await db.delete(products).where(eq(products.id, id));
  revalidatePath("/");
  revalidatePath("/admin");
}
