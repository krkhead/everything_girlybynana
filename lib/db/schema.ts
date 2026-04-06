import { pgTable, serial, text, integer, boolean, timestamp } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  // Price stored in Kobo (₦15,000 = 1_500_000 kobo) for integer precision
  price: integer("price").notNull(),
  description: text("description"),
  category: text("category"),   // 'lipgloss' | 'bonnet' | 'lip-balm' | 'accessories'
  imageUrl: text("image_url"),  // Vercel Blob public URL
  inStock: boolean("in_stock").default(true).notNull(),
  badge: text("badge"),         // 'Fan Fave' | 'New' | null
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
