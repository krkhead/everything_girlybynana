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

function parsePrice(priceRaw: string) {
  const price = nairaToKobo(priceRaw);

  if (!Number.isFinite(price) || price < 0) {
    throw new Error("Price must be a valid non-negative amount");
  }

  return price;
}

export async function createProduct(formData: FormData) {
  await requireAdmin();

  const name = ((formData.get("name") as string) ?? "").trim();
  const priceRaw = (formData.get("price") as string) ?? "";
  const description = formData.get("description") as string;
  const category = ((formData.get("category") as string) ?? "").trim();
  const imageUrl = ((formData.get("imageUrl") as string) ?? "").trim();
  const badge = formData.get("badge") as string;
  const inStock = formData.get("inStock") === "true";

  if (!name || !priceRaw) throw new Error("Name and price are required");

  await db.insert(products).values({
    name,
    price: parsePrice(priceRaw),
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

  const name = ((formData.get("name") as string) ?? "").trim();
  const priceRaw = (formData.get("price") as string) ?? "";
  const description = formData.get("description") as string;
  const category = ((formData.get("category") as string) ?? "").trim();
  const imageUrl = ((formData.get("imageUrl") as string) ?? "").trim();
  const badge = formData.get("badge") as string;
  const inStock = formData.get("inStock") === "true";

  if (!name || !priceRaw) throw new Error("Name and price are required");

  await db
    .update(products)
    .set({
      name,
      price: parsePrice(priceRaw),
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
