import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminHash = process.env.ADMIN_PASSWORD_HASH;

        if (!adminEmail || !adminHash) return null;

        const submittedEmail = normalizeEmail(credentials.email);
        const configuredEmail = normalizeEmail(adminEmail);
        const valid = await bcrypt.compare(credentials.password, adminHash);

        if (submittedEmail !== configuredEmail) return null;
        if (!valid) return null;

        return { id: "1", email: configuredEmail, name: "Nana" };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.email = user.email;
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) session.user.email = token.email as string;
      return session;
    },
  },
};
