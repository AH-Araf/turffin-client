"use client";

import Link from "next/link";
import { useState } from "react";
import { Lexend } from "next/font/google";
import { Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const lexend = Lexend({ subsets: ["latin"] });

const backgroundImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAhEp86S8b33JBDpLqosk8oJSBvyRmK6ugohDPDV68NhSp30DwsDGMLejnH2hKJt_uZZDJVquWPEjW78JCNLq-SGbThEW7bajm1o-9iap8v2iR5iBBWkazDwA8y2owVkNSA66nhl7wgHk0cDa2lJhowXlrDt2rUEL65usZFiRYNCOsbR9M3rppCCFyQU5x_n9mgzwSBFCUeamWAy4ohaNyzGVexAj-oX_jLQZ1sIAFgYi4xUIXVnFQd3LDb0AiXiRuPqk9vwG-9YQ";

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
  const [message, setMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setMessage("Sign-in is not connected yet. Use Browse Turf to book as a guest for now.");
  }

  return (
    <div className="fixed inset-0 z-100 flex min-h-0 flex-col text-turf-on-surface antialiased">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Illuminated sports stadium at dusk"
          className="h-full w-full object-cover"
          width={2560}
          height={2048}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{
            background: "linear-gradient(135deg, rgba(25, 28, 30, 0.9) 0%, rgba(0, 109, 54, 0.6) 100%)",
          }}
        />
      </div>

      <main className="relative z-10 mx-auto flex w-full min-h-0 max-w-[480px] flex-1 flex-col justify-center px-6 py-10">
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
                <a href="#" className={`${lexend.className} text-xs font-semibold uppercase tracking-widest text-turf-primary transition hover:text-turf-primary-pressed`}>
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input id="login-password" name="password" type="password" autoComplete="current-password" required placeholder="••••••••" className="h-12 pl-10" />
              </div>
            </div>

            <div className="flex items-center">
              <input id="login-remember" name="remember" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-turf-primary focus:ring-turf-primary-container" />
              <label htmlFor="login-remember" className="ml-3 cursor-pointer text-turf-on-surface-variant select-none">
                Remember this device
              </label>
            </div>

            <Button type="submit" variant="accent" className="h-12 w-full text-base">Sign in</Button>
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

      <div className="pointer-events-none fixed bottom-0 right-0 z-0 p-8 opacity-20">
        <StadiumIcon className="h-28 w-28 text-turf-primary-container md:h-32 md:w-32" />
      </div>
    </div>
  );
}
