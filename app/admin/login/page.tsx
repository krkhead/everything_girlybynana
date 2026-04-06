"use client";
import { signIn } from "next-auth/react";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const form = e.currentTarget;
      const email = (form.elements.namedItem("email") as HTMLInputElement).value
        .trim()
        .toLowerCase();
      const password = (form.elements.namedItem("password") as HTMLInputElement).value;

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/admin",
      });

      if (!result?.ok || result.error) {
        setError("Invalid email or password.");
        setLoading(false);
        return;
      }

      router.replace(result.url ?? "/admin");
      router.refresh();
    } catch {
      setError("Something went wrong while signing in. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-5">
      <div className="w-full max-w-sm glass-card rounded-4xl p-8 shadow-glass">
        <div className="text-center mb-8">
          <p className="font-script text-2xl text-blush-primary mb-1">admin</p>
          <h1 className="font-serif text-3xl font-light text-gradient-brand">
            Everything Girly
          </h1>
          <p className="font-sans text-xs text-charcoal/50 mt-2">
            Sign in to manage your products
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-xs text-charcoal/60 uppercase tracking-wider">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="font-sans text-sm bg-white/70 border border-blush/30 rounded-2xl px-4 py-3 outline-none focus:border-blush-primary transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-xs text-charcoal/60 uppercase tracking-wider">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="font-sans text-sm bg-white/70 border border-blush/30 rounded-2xl px-4 py-3 outline-none focus:border-blush-primary transition-colors"
            />
          </div>

          {error && <p className="font-sans text-xs text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-brand text-white font-sans text-sm font-medium py-3 rounded-full mt-2 hover:shadow-glow transition-all disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
