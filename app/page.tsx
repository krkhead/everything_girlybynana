import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import AnnouncementBar from "@/components/public/AnnouncementBar";
import Navigation from "@/components/public/Navigation";
import HeroSection from "@/components/public/HeroSection";
import ProductsSection from "@/components/public/ProductsSection";
import AboutSection from "@/components/public/AboutSection";
import WhyUsSection from "@/components/public/WhyUsSection";
import InstagramSection from "@/components/public/InstagramSection";
import TestimonialsSection from "@/components/public/TestimonialsSection";
import Footer from "@/components/public/Footer";

export const revalidate = 60; // ISR: revalidate every 60 seconds

async function getProducts() {
  try {
    return await db.select().from(products).where(eq(products.inStock, true));
  } catch {
    return [];
  }
}

export default async function Home() {
  const productList = await getProducts();

  return (
    <main>
      <AnnouncementBar />
      <Navigation />
      <HeroSection />
      <ProductsSection products={productList} />
      <AboutSection />
      <WhyUsSection />
      <InstagramSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
