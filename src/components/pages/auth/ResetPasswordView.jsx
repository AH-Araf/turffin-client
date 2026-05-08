"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Lexend } from "next/font/google";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useResetPassword } from "@/hooks/useResetPassword";
import { AuthMarketingShell } from "./AuthMarketingShell";

const lexend = Lexend({ subsets: ["latin"] });

const PASSWORD_HINT = "8–72 characters with upper, lower, and a number.";

function passwordMeetsRules(p) {
  return p.length >= 8 && p.length <= 72 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(p);
}

export function ResetPasswordView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token")?.trim() ?? "";

  const { resetPassword, isLoading, error, resetState } = useResetPassword();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState("");

  useEffect(() => {
    resetState();
    setLocalError("");
  }, [token, resetState]);

  async function onSubmit(e) {
    e.preventDefault();
    setLocalError("");
    resetState();

    if (!token) {
      setLocalError("Reset link is missing or invalid. Request a new link from the forgot password page.");
      return;
    }
    if (!passwordMeetsRules(password)) {
      setLocalError(`Password does not meet requirements. ${PASSWORD_HINT}`);
      return;
    }
    if (password !== confirm) {
      setLocalError("Passwords do not match.");
      return;
    }

    try {
      await resetPassword({ token, password });
      router.replace("/login?reset=1");
    } catch {
      // Hook surfaces API error
    }
  }

  const combinedError = localError || error;

  return (
    <AuthMarketingShell heroSubtitle="Choose a new password">
      <div className="rounded-xl border border-white/10 bg-white p-8 shadow-2xl md:p-10">
        <header className="mb-8">
          <h2 className={`${lexend.className} mb-2 text-2xl font-semibold text-turf-on-surface md:text-3xl`}>
            Set new password
          </h2>
          <p className="text-turf-on-surface-variant">
            {token
              ? "Enter a strong password you haven’t used here before."
              : "Open the link from your email, or request a new reset below."}
          </p>
        </header>

        {!token ? (
          <div className="space-y-4">
            <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              This page needs a valid reset token in the URL. Use the link from your email, or request a new one.
            </p>
            <Button asChild variant="accent" className="h-12 w-full">
              <Link href="/forgot-password">Request reset link</Link>
            </Button>
            <Link
              href="/login"
              className={`${lexend.className} block text-center text-sm font-semibold text-turf-primary hover:underline`}
            >
              Back to login
            </Link>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={onSubmit}>
            {combinedError ? (
              <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{combinedError}</p>
            ) : null}

            <div>
              <label
                htmlFor="reset-password"
                className={`${lexend.className} mb-2 block text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant`}
              >
                New password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  id="reset-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  minLength={8}
                  maxLength={72}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-12 pl-10 pr-12"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-turf-primary"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <p className="mt-1.5 text-xs text-turf-on-surface-variant">{PASSWORD_HINT}</p>
            </div>

            <div>
              <label
                htmlFor="reset-password-confirm"
                className={`${lexend.className} mb-2 block text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant`}
              >
                Confirm password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  id="reset-password-confirm"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  minLength={8}
                  maxLength={72}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="••••••••"
                  className="h-12 pl-10"
                />
              </div>
            </div>

            <Button type="submit" variant="accent" className="h-12 w-full text-base" disabled={isLoading}>
              {isLoading ? "Updating…" : "Update password"}
            </Button>

            <Link
              href="/login"
              className={`${lexend.className} block text-center text-sm font-semibold text-turf-primary hover:underline`}
            >
              Back to login
            </Link>
          </form>
        )}
      </div>
    </AuthMarketingShell>
  );
}
