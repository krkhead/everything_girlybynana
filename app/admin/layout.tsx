export const dynamic = "force-dynamic";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";
import SessionProviderWrapper from "@/components/admin/SessionProviderWrapper";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  return (
    <SessionProviderWrapper>
      <div className="min-h-screen bg-cream">
        <AdminNav />
        <main className="max-w-5xl mx-auto px-5 py-10">{children}</main>
      </div>
    </SessionProviderWrapper>
  );
}
