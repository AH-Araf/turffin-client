"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lexend } from "next/font/google";
import { Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/useLogin";
import { getDashboardHomePath, sanitizeReturnPath } from "@/lib/dashboard-routes";
import { useDashboardAuth } from "@/providers/DashboardAuthProvider";
import { AUTH_PAGE_HERO_IMAGE, AUTH_PAGE_OVERLAY_STYLE } from "@/lib/auth-page-assets";

const lexend = Lexend({ subsets: ["latin"] });

const googleIcon =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCs_mwF2lS-Dm0NHHcX-CEWMKLjwmJZp1pSCS7tiSPRMAsMXE6lyNXLf70GEwj9D-SvSwxJ9eDpND3wYplM6qpM0_TcVAGtfiSMnoMshhuvse6Sc7jLFvvOaufma2kAjOjCEs3Q6PZDryRiDrCbVVs8nkGaAVs--lxR4rYEfz23UXSwxlbKCPZsnZ5745oSdIRJqtlw1xhsvcQDQ7YLt3kq0PgsqbL2Aefxa_HgcNsXIteh6KEcSTIJe9m699-xz79wFe1PDei42A";

const facebookIcon =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ2XewzyNOppU4zmnIshrtKiGTCHFCNgGXAXnkRs-UN-oz3rj8xdQXACDOrJxbWWTHTLl4dCXuKII4PvVVDWLnqmA_USOOyPhFjFArl9gG095U-A9MyEqUrGFqVK3qgL-d3ph_ruUO7XtqYrCHvThD1cz7hEVvEJTVOFxhpgM_qNe8JWS9fjba_WoWFzTL6os2wG7rlKYlZPnKddUw1jCd-IH6IqhhCet64um48g8lIpVifUaYvwzo1IV7BorsRYyqaJ96EM913w";

function StadiumIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M2 5h20v2H2V5zm0 4h4v3H2V9zm6 0h8v3H8V9zm10 0h4v3h-4V9zM2 16h4v3H2v-3zm6 0h8v3H8v-3zm10 0h4v3h-4v-3zM2 20h20v2H2v-2z" />
    </svg>
  );
}

export function LoginView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { refreshSession } = useDashboardAuth();
  const { login, isLoading, error, resetLoginState } = useLogin();
  const [message, setMessage] = useState("");
  const [registeredNotice, setRegisteredNotice] = useState(false);
  const [passwordResetNotice, setPasswordResetNotice] = useState(false);

  useEffect(() => {
    setRegisteredNotice(searchParams.get("registered") === "1");
    setPasswordResetNotice(searchParams.get("reset") === "1");
  }, [searchParams]);

  async function onSubmit(e) {
    e.preventDefault();
    resetLoginState();
    setMessage("");
    setRegisteredNotice(false);
    setPasswordResetNotice(false);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "");

    try {
      const session = await login({ email, password });
      await refreshSession();
      const role = session?.user?.role ?? "user";
      const home = getDashboardHomePath(role);
      const next = sanitizeReturnPath(searchParams.get("next"), home);
      router.push(next);
    } catch {
      // Error state is handled by the hook.
    }
  }

  return (
    <div className="relative isolate z-10 min-h-dvh w-full overflow-x-hidden text-turf-on-surface antialiased">
      {/* Background: no backdrop-filter (heavy during scroll); GPU layer on image only. */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={AUTH_PAGE_HERO_IMAGE}
          alt="Illuminated sports stadium at dusk"
          className="h-full min-h-full w-full object-cover object-center [transform:translate3d(0,0,0)]"
          width={2560}
          height={2048}
          fetchPriority="high"
          decoding="async"
          draggable={false}
        />
        <div className="absolute inset-0" style={AUTH_PAGE_OVERLAY_STYLE} />
      </div>

      <main className="relative z-10 mx-auto flex w-full min-h-dvh max-w-[480px] flex-col justify-center px-6 py-12 pb-[max(3rem,env(safe-area-inset-bottom,0px)+1.5rem)]">
        <div className="mb-8 text-center md:mb-10">
          <h1 className={`${lexend.className} mb-2 text-4xl font-bold italic tracking-tighter text-white md:text-5xl`} style={{ letterSpacing: "-0.02em" }}>
            Turffin
          </h1>
          <p className="text-lg font-medium text-turf-primary-container">Book &amp; play on premium turfs</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white p-8 shadow-2xl md:p-10">
          <header className="mb-8">
            <h2 className={`${lexend.className} mb-2 text-2xl font-semibold text-turf-on-surface md:text-3xl`}>Welcome back</h2>
            <p className="text-turf-on-surface-variant">Log in to manage your bookings and teams.</p>
          </header>

          {registeredNotice ? (
            <p className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Account created. Sign in with your email and password.
            </p>
          ) : null}
          {passwordResetNotice ? (
            <p className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Your password was updated. Sign in with your new password.
            </p>
          ) : null}
          {error ? <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
          {message ? <p className="mb-4 rounded-lg border border-slate-200 bg-turf-surface-low px-4 py-3 text-sm text-turf-on-surface-variant">{message}</p> : null}

          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label htmlFor="login-email" className={`${lexend.className} mb-2 block text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant`}>
                Email address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input id="login-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="h-12 pl-10" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="login-password" className={`${lexend.className} text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant`}>
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className={`${lexend.className} text-xs font-semibold uppercase tracking-widest text-turf-primary transition hover:text-turf-primary-pressed`}
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  minLength={8}
                  maxLength={72}
                  placeholder="••••••••"
                  className="h-12 pl-10"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input id="login-remember" name="remember" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-turf-primary focus:ring-turf-primary-container" />
              <label htmlFor="login-remember" className="ml-3 cursor-pointer text-turf-on-surface-variant select-none">
                Remember this device
              </label>
            </div>

            <Button type="submit" variant="accent" className="h-12 w-full text-base" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div>
            <div className="relative flex justify-center">
              <span className={`${lexend.className} bg-white px-4 text-xs font-semibold uppercase tracking-widest text-slate-500`}>Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button type="button" onClick={() => setMessage("Google sign-in is coming soon.")} variant="secondary" className="h-11 gap-2">
              <img src={googleIcon} alt="" width={20} height={20} className="h-5 w-5" />
              <span>Google</span>
            </Button>
            <Button type="button" onClick={() => setMessage("Facebook sign-in is coming soon.")} variant="secondary" className="h-11 gap-2">
              <img src={facebookIcon} alt="" width={20} height={20} className="h-5 w-5" />
              <span>Facebook</span>
            </Button>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center">
            <p className="text-turf-on-surface-variant">
              Don&apos;t have an account yet?{" "}
              <Link href="/register" className="ml-1 font-bold text-turf-primary decoration-turf-primary underline-offset-4 hover:underline">
                Join Turffin
              </Link>
            </p>
          </div>
        </div>

        <footer className="mt-8 flex flex-wrap justify-center gap-4 gap-y-2 md:gap-6">
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-white/60 transition hover:text-white">Privacy policy</a>
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-white/60 transition hover:text-white">Terms</a>
          <Link href="/support" className="text-xs font-semibold uppercase tracking-widest text-white/60 transition hover:text-white">Support</Link>
        </footer>
      </main>

      <div className="pointer-events-none absolute bottom-6 right-4 z-[1] opacity-20 sm:right-8 sm:p-4">
        <StadiumIcon className="h-24 w-24 text-turf-primary-container sm:h-28 sm:w-28 md:h-32 md:w-32" />
      </div>
    </div>
  );
}
