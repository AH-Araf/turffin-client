"use client";

import Link from "next/link";
import { useState } from "react";
import { Lexend } from "next/font/google";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForgotPassword } from "@/hooks/useForgotPassword";
import { AuthMarketingShell } from "./AuthMarketingShell";

const lexend = Lexend({ subsets: ["latin"] });

export function ForgotPasswordView() {
  const { requestReset, isLoading, isSuccess, successMessage, error, resetState } = useForgotPassword();
  const [email, setEmail] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    resetState();
    const norm = email.trim().toLowerCase();
    if (!norm) return;
    await requestReset({ email: norm });
  }

  return (
    <AuthMarketingShell heroSubtitle="Reset your password securely">
      <div className="rounded-xl border border-white/10 bg-white p-8 shadow-2xl md:p-10">
        <header className="mb-8">
          <h2 className={`${lexend.className} mb-2 text-2xl font-semibold text-turf-on-surface md:text-3xl`}>
            Forgot password?
          </h2>
          <p className="text-turf-on-surface-variant">
            Enter your account email. We&apos;ll send a reset link (valid for 15 minutes) if this address is registered.
          </p>
        </header>

        {isSuccess ? (
          <div className="space-y-4">
            <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900" role="status">
              {successMessage}
            </p>
            <p className="text-sm text-turf-on-surface-variant">
              Didn&apos;t get an email? Check spam, or try again in a few minutes. In local development without SMTP, check your
              API server logs for the reset link.
            </p>
            <Button asChild variant="accent" className="h-12 w-full">
              <Link href="/login">Back to sign in</Link>
            </Button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={onSubmit}>
            {error ? (
              <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
            ) : null}

            <div>
              <label
                htmlFor="forgot-email"
                className={`${lexend.className} mb-2 block text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant`}
              >
                Email address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  id="forgot-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 pl-10"
                />
              </div>
            </div>

            <Button type="submit" variant="accent" className="h-12 w-full text-base" disabled={isLoading || !email.trim()}>
              {isLoading ? "Sending…" : "Send reset link"}
            </Button>

            <Link
              href="/login"
              className={`${lexend.className} flex items-center justify-center gap-2 text-sm font-semibold text-turf-primary hover:text-turf-primary-pressed`}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to login
            </Link>
          </form>
        )}
      </div>
    </AuthMarketingShell>
  );
}
