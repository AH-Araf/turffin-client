"use client";

import Link from "next/link";
import { useState } from "react";
import { Inter, Lexend } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

const benefitImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCqqKrxNm8IHPw78lDVgxiJFG1-ETGPpKtlSfzz2gFThbG7QIOr9HUuCu4OhD629Wf8_G5WBgPR1h5KrelWCbHs-F6ipGZaTcb0xoRgwTPV-suJjRGwp6hHaUB_sHcKozhJf6fUHpq_K_DU8sgcoCciPVdP6P3U6mlJaG2IbuynNiMQXnM7aGo96qXOM5bIlSaSe18azrAbJ2UYO6HKykn9gZre99vD-PELlidF7jS6JkhupGglXrHiL9QnoXQYTnPazC0ID1SnrQ";

const googleIcon =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCs_mwF2lS-Dm0NHHcX-CEWMKLjwmJZp1pSCS7tiSPRMAsMXE6lyNXLf70GEwj9D-SvSwxJ9eDpND3wYplM6qpM0_TcVAGtfiSMnoMshhuvse6Sc7jLFvvOaufma2kAjOjCEs3Q6PZDryRiDrCbVVs8nkGaAVs--lxR4rYEfz23UXSwxlbKCPZsnZ5745oSdIRJqtlw1xhsvcQDQ7YLt3kq0PgsqbL2Aefxa_HgcNsXIteh6KEcSTIJe9m699-xz79wFe1PDei42A";

const facebookIcon =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ2XewzyNOppU4zmnIshrtKiGTCHFCNgGXAXnkRs-UN-oz3rj8xdQXACDOrJxbWWTHTLl4dCXuKII4PvVVDWLnqmA_USOOyPhFjFArl9gG095U-A9MyEqUrGFqVK3qgL-d3ph_ruUO7XtqYrCHvThD1cz7hEVvEJTVOFxhpgM_qNe8JWS9fjba_WoWFzTL6os2wG7rlKYlZPnKddUw1jCd-IH6IqhhCet64um48g8lIpVifUaYvwzo1IV7BorsRYyqaJ96EM913w";

const benefits = [
  {
    title: "Instant bookings",
    body: "Real-time availability for premium turfs in Dhaka, Chattogram, and more.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M15 1H9v2h6V1zm-4 4H7v2h4V5zM4 3H2v18h2v-2H4V3zm2 16H2v2h2v-2zm2 0H6v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2 0h-2v2h2v-2zm2-2h-2V7h-2V5H8V3H6v2H4V3H2v2h2v12h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2V5h-2V3h2v14z" />
      </svg>
    ),
  },
  {
    title: "Analytics for venues",
    body: "Track peak hours, utilization, and revenue when you manage a listed venue.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.1-4-4L2 16.99z" />
      </svg>
    ),
  },
  {
    title: "Membership perks",
    body: "Priority access to high-demand slots and partner offers on Turffin.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 16.17l6.59-6.59L18 11l-8 8z" />
      </svg>
    ),
  },
];

function ArrowForwardIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.5-1.25 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
    </svg>
  );
}

function SoccerIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 3.3l2.8 1.2-1.2 2.8-2.8-1.2L13 5.3zM8.2 6.5l2.8-1.2L12 7.4 9.2 8.6 8.2 6.5zM5.5 10l1.2-2.8L9.4 8.2 8.2 11l-2.7-1zM5.3 15l-1.2-2.8L6.5 8.2 8.2 11 5.5 12.2V15zm4.2 3.2L6.5 17l1.2-2.8 2.8 1.2-1.2 2.8zM12 20.2l-2.8-1.2L10.2 16h3.6l.9 3-2.7 1.2zM16.2 18.2l-2.8-1.2-1-3.3h3.2l1.2 2.7-1.2 1.1zM18.5 15h-2.6l-1-3.3L18.5 10v5zm1.2-5.2L18.5 7l-2.8 1.2-1-3.2h4.3l.7 2.1.4 2.5z" />
    </svg>
  );
}

function StadiumRoleIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M2 5h20v2H2V5zm0 4h4v3H2V9zm6 0h8v3H8V9zm10 0h4v3h-4V9zM2 16h4v3H2v-3zm6 0h8v3H8v-3zm10 0h4v3h-4v-3zM2 20h20v2H2v-2z" />
    </svg>
  );
}

export function RegisterView() {
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("athlete");

  function onContinue() {
    setMessage("Step 2 will be available when onboarding is live. You can still browse and book as a guest in the meantime.");
  }

  function onFormSubmit(e) {
    e.preventDefault();
    onContinue();
  }

  return (
    <div
      className={`${inter.className} bg-turf-surface text-turf-on-surface antialiased md:min-h-[calc(100dvh-5rem)]`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col md:min-h-[min(100%,calc(100dvh-5rem))] md:flex-row">
        <section className="flex w-full flex-col justify-center border-b border-slate-100/80 bg-turf-primary/5 p-8 md:w-5/12 md:border-b-0 md:border-r md:py-12 md:pl-8 md:pr-6 lg:px-10 lg:py-14">
          <div className="max-w-md space-y-8 md:mx-0">
            <div>
              <h1 className={`${lexend.className} text-3xl font-bold leading-tight text-turf-primary md:text-4xl`}>
                Elevate your game.
              </h1>
              <p className="mt-3 text-lg text-turf-on-surface-variant">
                Join players and venue partners on Turffin—Bangladesh’s turf booking network for football, cricket, and
                more.
              </p>
            </div>
            <div className="grid gap-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex gap-4 rounded-xl border border-turf-primary/10 bg-white p-4 shadow-turf-glow md:p-5"
                >
                  <div className="shrink-0 rounded-lg bg-turf-primary-container/20 p-2 text-turf-primary">{b.icon}</div>
                  <div>
                    <h3 className={`${lexend.className} text-base font-semibold text-turf-on-surface`}>{b.title}</h3>
                    <p className="text-sm text-turf-on-surface-variant">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg md:h-64">
              <img
                src={benefitImage}
                alt="Synthetic turf field under stadium lights"
                className="h-full w-full object-cover"
                width={800}
                height={400}
              />
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-4 md:p-5">
                <p className={`${lexend.className} text-sm font-medium text-white md:text-base`}>
                  150+ partner venues and counting on Turffin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white p-8 md:w-7/12 md:py-12 md:pl-6 md:pr-8 lg:px-10 lg:py-14">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 flex items-center gap-1.5">
              <div className="h-1.5 w-8 rounded-full bg-turf-primary-container transition-all" />
              <div className="h-1.5 w-3 rounded-full bg-slate-200" />
              <div className="h-1.5 w-3 rounded-full bg-slate-200" />
            </div>
            <header className="mb-8">
              <h2 className={`${lexend.className} text-2xl font-semibold text-turf-on-surface md:text-3xl`}>
                Create your account
              </h2>
              <p className="mt-1 text-turf-on-surface-variant">Step 1 of 3: General information</p>
            </header>

            {message ? (
              <p className="mb-6 rounded-lg border border-slate-200 bg-turf-surface-low px-4 py-3 text-sm text-turf-on-surface-variant">
                {message}
              </p>
            ) : null}

            <form className="space-y-5" onSubmit={onFormSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="reg-first"
                    className={`${lexend.className} text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant`}
                  >
                    First name
                  </label>
                  <input
                    id="reg-first"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="Rafid"
                    className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-3 pr-4 text-turf-on-surface focus:border-turf-primary focus:outline-none focus:ring-4 focus:ring-turf-primary-container/20"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="reg-last"
                    className={`${lexend.className} text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant`}
                  >
                    Last name
                  </label>
                  <input
                    id="reg-last"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Hassan"
                    className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-3 pr-4 text-turf-on-surface focus:border-turf-primary focus:outline-none focus:ring-4 focus:ring-turf-primary-container/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="reg-email"
                  className={`${lexend.className} text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant`}
                >
                  Email address
                </label>
                <input
                  id="reg-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-200 bg-white py-3 px-4 text-turf-on-surface focus:border-turf-primary focus:outline-none focus:ring-4 focus:ring-turf-primary-container/20"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="reg-password"
                  className={`${lexend.className} text-xs font-semibold uppercase tracking-widest text-turf-on-surface-variant`}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="reg-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="new-password"
                    minLength={8}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-4 pr-12 text-turf-on-surface focus:border-turf-primary focus:outline-none focus:ring-4 focus:ring-turf-primary-container/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-turf-primary"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                <p className="text-xs text-turf-on-surface-variant">At least 8 characters with a number and a symbol.</p>
              </div>

              <div className="space-y-4 border-t border-slate-100 pt-6">
                <h3 className={`${lexend.className} text-lg font-semibold text-turf-on-surface`}>Select your role</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="group relative flex cursor-pointer flex-col rounded-xl border-2 border-slate-100 p-4 transition hover:border-turf-primary-container hover:bg-turf-primary/5 has-checked:border-turf-primary has-checked:bg-turf-primary/5 sm:p-5">
                    <input
                      type="radio"
                      name="role"
                      value="athlete"
                      checked={role === "athlete"}
                      onChange={() => setRole("athlete")}
                      className="absolute right-3 top-3 h-4 w-4 text-turf-primary"
                    />
                    <span className="mb-3 text-turf-primary">
                      <SoccerIcon />
                    </span>
                    <span className={`${lexend.className} font-bold text-turf-on-surface`}>Athlete / user</span>
                    <span className="text-xs text-turf-on-surface-variant">Book turfs and track your sessions.</span>
                  </label>
                  <label className="group relative flex cursor-pointer flex-col rounded-xl border-2 border-slate-100 p-4 transition hover:border-turf-primary-container hover:bg-turf-primary/5 has-checked:border-turf-primary has-checked:bg-turf-primary/5 sm:p-5">
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      checked={role === "admin"}
                      onChange={() => setRole("admin")}
                      className="absolute right-3 top-3 h-4 w-4 text-turf-primary"
                    />
                    <span className="mb-3 text-turf-primary">
                      <StadiumRoleIcon />
                    </span>
                    <span className={`${lexend.className} font-bold text-turf-on-surface`}>Venue admin</span>
                    <span className="text-xs text-turf-on-surface-variant">Manage your venue, bookings, and hours.</span>
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={onContinue}
                className={`${lexend.className} flex w-full items-center justify-center gap-2 rounded-xl bg-turf-primary py-4 text-lg font-bold text-turf-on-primary transition hover:brightness-110 active:scale-[0.98]`}
                style={{ boxShadow: "0 10px 15px -3px rgba(0, 109, 54, 0.3)" }}
              >
                Continue to step 2
                <ArrowForwardIcon />
              </button>

              <p className="pt-1 text-center text-turf-on-surface-variant">
                Already have an account?{" "}
                <Link href="/login" className="font-bold text-turf-primary hover:underline">
                  Log in
                </Link>
              </p>
            </form>

            <div className="mt-8">
              <div className="relative flex items-center py-2">
                <div className="grow border-t border-slate-200" />
                <span
                  className={`${lexend.className} shrink-0 px-3 text-xs font-semibold uppercase tracking-widest text-slate-400`}
                >
                  Or sign up with
                </span>
                <div className="grow border-t border-slate-200" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMessage("Google sign-up is coming soon.")}
                  className={`${lexend.className} flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-sm text-turf-on-surface transition hover:bg-slate-50`}
                >
                  <img src={googleIcon} alt="" width={20} height={20} className="h-5 w-5" />
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => setMessage("Facebook sign-up is coming soon.")}
                  className={`${lexend.className} flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-sm text-turf-on-surface transition hover:bg-slate-50`}
                >
                  <img src={facebookIcon} alt="" width={20} height={20} className="h-5 w-5" />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
