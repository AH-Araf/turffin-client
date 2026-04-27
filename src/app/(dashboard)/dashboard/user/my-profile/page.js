"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Lexend } from "next/font/google";
import { DashboardUserIcon, UserPortalShell } from "@/features/dashboard/user/components/UserPortalShell";

const lexend = Lexend({ subsets: ["latin"] });

const PROMO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDAkh3CM2UnlhKIFshQfqzE11tLliiWMFtCt4p9lkC-mBP4GpKJXBatrtDWN8Q5q55OWQg4HRw6NmZjkjjoEai9puqRct4_qo_Ej-o1-wPZOzgViIDNxauWHlQAlmmvOhTumyaZ9SeI7Qp5wfFVNTG-t7rob20MrLgiDXEEAXgIFysKTWisxCUVCPB2fw8leG-XcX2k6xZMIr88jaDAQk2322Q42tajyYuZv_LEtPBbKmeCdgDJKiZeM8ZZQ4jeQ9tSdrWMFUocrw";

export default function Page() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [savedHint, setSavedHint] = useState("");

  function onUpdateInfo(e) {
    e.preventDefault();
    setSavedHint("Profile changes are saved locally for this demo.");
    setTimeout(() => setSavedHint(""), 3200);
  }

  return (
    <UserPortalShell
      maxWidthClass="max-w-6xl"
      headerCenter={
        <div className="flex items-center justify-center gap-1 text-sm md:gap-2">
          <span className="font-medium text-slate-500">Settings</span>
          <DashboardUserIcon name="chevron_right" className="h-4 w-4 text-slate-300" />
          <span className="font-bold text-slate-300 lg:text-slate-900">Profile</span>
        </div>
      }
    >
      <header className="mb-8 md:mb-10">
        <h1 className={`${lexend.className} mb-2 text-3xl font-bold tracking-[-0.02em] text-turf-on-surface md:text-4xl`}>
          Account profile
        </h1>
        <p className="text-lg text-turf-secondary">Manage your personal presence and secure your turf access.</p>
      </header>

      {savedHint ? (
        <p
          className="mb-6 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-turf-on-surface-variant shadow-sm"
          role="status"
        >
          {savedHint}
        </p>
      ) : null}

      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        <div className="col-span-12 space-y-6 lg:col-span-8 lg:space-y-8">
          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-5 md:px-8">
              <h2 className={`${lexend.className} flex items-center gap-3 text-lg font-semibold text-turf-on-surface`}>
                <DashboardUserIcon name="person" className="h-6 w-6 text-turf-primary" />
                Personal information
              </h2>
              <span className="rounded-full bg-turf-primary-container/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-turf-on-primary-container">
                Primary identity
              </span>
            </div>
            <form className="space-y-6 p-6 md:p-8" onSubmit={onUpdateInfo}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Full name</label>
                  <input
                    name="fullName"
                    defaultValue="Rafid Hassan"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-turf-on-surface outline-none transition-all focus:border-turf-primary focus:ring-2 focus:ring-turf-primary-container/40"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Display name</label>
                  <input
                    name="displayName"
                    defaultValue="RafidH"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-turf-on-surface outline-none transition-all focus:border-turf-primary focus:ring-2 focus:ring-turf-primary-container/40"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Email address</label>
                  <div className="relative">
                    <input
                      name="email"
                      defaultValue="rafid@example.com"
                      className="w-full rounded-lg border border-slate-200 py-3 pl-4 pr-12 text-turf-on-surface outline-none transition-all focus:border-turf-primary focus:ring-2 focus:ring-turf-primary-container/40"
                      type="email"
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-turf-primary">
                      <DashboardUserIcon name="verified" className="h-5 w-5" />
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Phone number</label>
                  <input
                    name="phone"
                    defaultValue="+880 1XXX-XXXXXX"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-turf-on-surface outline-none transition-all focus:border-turf-primary focus:ring-2 focus:ring-turf-primary-container/40"
                    type="tel"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Preferred timezone</label>
                <select
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-white bg-size-[1.2rem] bg-position-[right_1rem_center] bg-no-repeat px-4 py-3 text-turf-on-surface outline-none transition-all focus:border-turf-primary focus:ring-2 focus:ring-turf-primary-container/40"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%236d7b6d' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  }}
                >
                  <option>(GMT+06:00) Dhaka</option>
                  <option>(GMT+00:00) London</option>
                  <option>(GMT-05:00) New York</option>
                  <option>(GMT+01:00) Paris</option>
                  <option>(GMT+09:00) Tokyo</option>
                </select>
              </div>
              <div className="-mx-6 border-t border-slate-100 bg-slate-50 px-6 py-5 md:-mx-8 md:px-8">
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className={`${lexend.className} rounded-lg bg-turf-primary-container px-8 py-3 font-bold text-turf-on-primary-container shadow transition-all hover:shadow-md active:scale-[0.98]`}
                  >
                    Update information
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-5 md:px-8">
              <h2 className={`${lexend.className} flex items-center gap-3 text-lg font-semibold text-turf-on-surface`}>
                <DashboardUserIcon name="lock" className="h-6 w-6 text-red-700" />
                Security &amp; authentication
              </h2>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
                <div className="md:col-span-1">
                  <h3 className={`${lexend.className} mb-2 text-base font-semibold text-turf-on-surface`}>Change password</h3>
                  <p className="text-sm text-slate-500">Regularly updating your password keeps your bookings secure.</p>
                </div>
                <div className="space-y-4 md:col-span-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Current password</label>
                    <input
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition-all focus:border-turf-primary focus:ring-2 focus:ring-turf-primary-container/40"
                      type="password"
                      placeholder="••••••••••••"
                      autoComplete="current-password"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">New password</label>
                      <input
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition-all focus:border-turf-primary focus:ring-2 focus:ring-turf-primary-container/40"
                        type="password"
                        autoComplete="new-password"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Confirm new password</label>
                      <input
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition-all focus:border-turf-primary focus:ring-2 focus:ring-turf-primary-container/40"
                        type="password"
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className={`${lexend.className} rounded-lg border-2 border-slate-900 px-6 py-2 font-bold text-slate-900 transition-all hover:bg-slate-900 hover:text-white active:scale-[0.98]`}
                  >
                    Reset password
                  </button>
                </div>
              </div>

              <hr className="my-8 border-slate-100" />

              <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-100/80 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-turf-primary shadow-sm">
                    <DashboardUserIcon name="shield_lock" className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className={`${lexend.className} text-base font-semibold text-slate-800`}>Two-factor authentication</h3>
                    <p className="text-sm text-slate-600">Add an extra layer of security to your account.</p>
                  </div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={twoFactor}
                  onClick={() => setTwoFactor((v) => !v)}
                  className={`relative h-7 w-14 shrink-0 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-turf-primary-container/50 ${twoFactor ? "bg-turf-primary" : "bg-slate-200"}`}
                >
                  <span
                    className={`absolute left-0.5 top-0.5 block h-6 w-6 rounded-full border border-gray-300 bg-white shadow transition-transform ${twoFactor ? "translate-x-7" : "translate-x-0"}`}
                  />
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="col-span-12 space-y-6 lg:col-span-4 lg:space-y-8">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-white shadow-2xl">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-[80px]" aria-hidden />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]" aria-hidden />
            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between">
                <h2 className={`${lexend.className} text-lg font-semibold`}>Identity shield</h2>
                <DashboardUserIcon name="verified_user" className="h-10 w-10 text-emerald-400" />
              </div>
              <div className="mb-8 text-center">
                <div className="mb-4 inline-flex h-32 w-32 items-center justify-center rounded-full border-8 border-emerald-400/20 border-t-emerald-400">
                  <div>
                    <span className="block text-3xl font-black">92%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Strength</span>
                  </div>
                </div>
                <h3 className={`${lexend.className} text-base font-semibold text-emerald-400`}>Excellent protection</h3>
                <p className="mt-1 text-sm text-slate-400">Your account security is in the top 5% of all users.</p>
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <DashboardUserIcon name="check_circle" className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span>Verified email address</span>
                </li>
                <li className="flex items-center gap-3">
                  <DashboardUserIcon name="check_circle" className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span>Two-factor auth {twoFactor ? "enabled" : "off"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <DashboardUserIcon name="check_circle" className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span>Recovery phone linked</span>
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <DashboardUserIcon name="pending" className="h-5 w-5 shrink-0" />
                  <span>Last password change: 82 days ago</span>
                </li>
              </ul>
              <button
                type="button"
                className={`${lexend.className} mt-10 w-full rounded-xl border border-white/10 bg-white/10 py-3 font-bold text-white transition-all hover:bg-white/20`}
              >
                Run security audit
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Account statistics</h2>
            <div className="space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-turf-secondary">Total bookings</p>
                  <p className="text-2xl font-bold text-slate-900">42</p>
                </div>
                <span className="flex items-center gap-1 text-sm font-bold text-turf-primary">
                  <DashboardUserIcon name="trending_up" className="h-4 w-4" />
                  +12%
                </span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-turf-secondary">Hours played</p>
                  <p className="text-2xl font-bold text-slate-900">128.5</p>
                </div>
                <DashboardUserIcon name="timer" className="h-6 w-6 text-slate-300" />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-turf-secondary">Member since</p>
                  <p className="text-2xl font-bold text-slate-900">Oct 2023</p>
                </div>
                <DashboardUserIcon name="history" className="h-6 w-6 text-slate-300" />
              </div>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image src={PROMO_SRC} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 400px" />
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent p-6">
              <h3 className={`${lexend.className} mb-2 text-lg font-semibold text-white`}>Book the stadium</h3>
              <p className="mb-4 text-sm text-slate-300">Elite members get 20% off prime-time stadium bookings this weekend.</p>
              <Link
                href="/browse-turf"
                className={`${lexend.className} block w-full rounded-lg bg-turf-primary-container py-3 text-center font-bold text-turf-on-primary-container transition-opacity hover:opacity-90`}
              >
                View availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </UserPortalShell>
  );
}
