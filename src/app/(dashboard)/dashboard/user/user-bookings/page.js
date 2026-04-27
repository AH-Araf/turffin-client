"use client";

import Image from "next/image";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { DashboardUserIcon, UserPortalShell } from "@/features/dashboard/user/components/UserPortalShell";

const lexend = Lexend({ subsets: ["latin"] });

const IMG_SOCCER =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCLg7IiZkJ4IAlH4HRh7m7xzbQXXOklcdz0kTdrGQLbXo15l9PKyl3cuhNNUJ1-GMJvONCPYH9KY97brxA9G_IQ0JBOJe7mg056-udgh9sqAtzxugoEX5HF9998_Os8kcmOP1EANGystI0vb35YxIzr_pAWcXog2nUSyHr3GMap1VdGXHTxEBCzfEOBFsZcLvyRiLX7QgiNyC6c3u-Bv-nnsdxy2Plj4XE1iB5u0712XHTQz-is5a8IqEb8ZwuYo6qFt6rEDUK2CA";
const IMG_BASKET =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuApzbqmAsuPqtSNO77Q93xQ4q5ZfYFPr2cIWAly1LPGZW7yX9kDLTGlfkCvj7OEK25dVzt2s3ljiu2shTvMJgTgsskwaL3Y1t_q8oR2ecBRSW9hfps9qoY-ectx5Hb1sH0t0qnAghy1li0ZkqGTwi1KbQzEiQeNnP9Uei5Mq8WL2WIi4IKSyQrrBgCjk6vyz7umEiNsGBwjunq3QXVJEPE2751R3W5Ku2u0E3gvDSN2UgDgoFlUt3Xaq6gMnbw_6rwPm3GFWQ0Rqw";
const IMG_MAP =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA_qGlrkhbjJ3msJNNzxqIbK7EsTbxQnx6vWZWmpuEWFsAhBC-jR3C2fUaft05z6IY2YZiavHwG7D32Nga0mdAmcybLUcjljyfat-3KEUrJFBLP0Cq4CC_GvGok20ZFrp7lKTU8_qq_JCD8dhGQz6nmtpXsbxjfc7o23AkdE-RCWUo1_zGlp_4bP1nvPjGG2qkOx3rL2p_glouU5KflenC1Ka66nLNBki5aQR4BXpYVswtu6TYK8AjdzD4xSW8p6NGVsGnYQuVVKw";

function SearchHeader() {
  return (
    <div className="relative hidden w-full max-w-md md:block">
      <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
        <DashboardUserIcon name="search" className="h-4 w-4" />
      </span>
      <input
        type="search"
        placeholder="Search matches, venues..."
        className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-turf-on-surface outline-none transition-shadow focus:border-turf-primary focus:ring-2 focus:ring-turf-primary-container/40"
      />
    </div>
  );
}

export default function Page() {
  return (
    <UserPortalShell maxWidthClass="max-w-7xl" headerCenter={<SearchHeader />}>
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h1 className={`${lexend.className} mb-2 text-3xl font-bold tracking-tight text-turf-on-surface md:text-4xl`}>
            My bookings overview
          </h1>
          <p className="max-w-xl text-lg text-turf-secondary">Manage your upcoming matches and facility reservations.</p>
        </div>
        <Link
          href="/browse-turf"
          className={`${lexend.className} inline-flex shrink-0 items-center gap-2 rounded-lg bg-turf-primary px-6 py-3 font-bold text-white shadow-lg shadow-turf-primary/20 transition-all hover:opacity-95 active:scale-[0.98]`}
        >
          <DashboardUserIcon name="add_circle" className="h-5 w-5" />
          Book new pitch
        </Link>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="flex h-32 flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Active bookings</span>
          <div className="flex items-baseline gap-2">
            <span className={`${lexend.className} text-3xl font-bold text-turf-primary`}>12</span>
            <span className="text-xs font-bold text-emerald-600">+2 this week</span>
          </div>
        </div>
        <div className="flex h-32 flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Total hours</span>
          <div className="flex items-baseline gap-2">
            <span className={`${lexend.className} text-3xl font-bold text-turf-on-surface`}>48.5</span>
            <span className="text-xs font-medium text-slate-400">Played</span>
          </div>
        </div>
        <div className="flex h-32 flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Member status</span>
          <div className="flex items-center gap-2">
            <DashboardUserIcon name="star" className="h-5 w-5 text-amber-500" filled />
            <span className={`${lexend.className} text-lg font-semibold text-turf-on-surface`}>Elite tier</span>
          </div>
        </div>
        <div className="relative flex cursor-pointer flex-col justify-center overflow-hidden rounded-xl bg-turf-primary-container p-6 transition-shadow hover:shadow-md">
          <div className="relative z-10">
            <h2 className={`${lexend.className} mb-1 text-lg font-bold text-turf-on-primary-container`}>Automate schedule</h2>
            <p className="text-xs font-medium text-turf-on-primary-container/80">AI-driven recurring slot bookings.</p>
          </div>
          <DashboardUserIcon name="bolt" className="pointer-events-none absolute -bottom-2 -right-2 h-24 w-24 text-turf-on-primary-container/10" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className={`${lexend.className} text-lg font-semibold text-turf-on-surface`}>Upcoming matches</h2>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold uppercase text-slate-400">Sort by:</span>
              <select className="cursor-pointer border-none bg-transparent font-bold text-turf-primary outline-none focus:ring-0">
                <option>Date (soonest)</option>
                <option>Facility name</option>
              </select>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-turf-primary/40">
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-48">
                <Image src={IMG_SOCCER} alt="" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="(max-width:640px) 100vw, 192px" />
                <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 backdrop-blur">
                  <DashboardUserIcon name="star" className="h-3.5 w-3.5 text-turf-primary" filled />
                  <span className="text-[10px] font-black text-slate-900">PREMIUM</span>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className={`${lexend.className} text-lg font-semibold text-turf-on-surface`}>Wembley Arena — Pitch 4</h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-turf-on-surface-variant">
                      <DashboardUserIcon name="location_on" className="h-4 w-4 shrink-0" />
                      North sector, Block A
                    </p>
                  </div>
                  <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-700">
                    Confirmed
                  </span>
                </div>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-slate-100 p-2">
                      <DashboardUserIcon name="calendar_month" className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">Date</p>
                      <p className="text-sm font-medium text-slate-900">Oct 24, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-slate-100 p-2">
                      <DashboardUserIcon name="schedule" className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">Time</p>
                      <p className="text-sm font-medium text-slate-900">18:00 – 19:30</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <DashboardUserIcon name="payments" className="h-5 w-5 text-emerald-500" />
                    Paid: ৳4,500
                  </div>
                  <button type="button" className={`${lexend.className} text-sm font-bold text-turf-primary hover:underline`}>
                    View receipt
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-turf-primary/40">
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-48">
                <Image src={IMG_BASKET} alt="" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="(max-width:640px) 100vw, 192px" />
              </div>
              <div className="flex-1 p-6">
                <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className={`${lexend.className} text-lg font-semibold text-turf-on-surface`}>Madison Square Park — Court B</h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-turf-on-surface-variant">
                      <DashboardUserIcon name="location_on" className="h-4 w-4 shrink-0" />
                      Central district
                    </p>
                  </div>
                  <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-amber-800">
                    Pending payment
                  </span>
                </div>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-slate-100 p-2">
                      <DashboardUserIcon name="calendar_month" className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">Date</p>
                      <p className="text-sm font-medium text-slate-900">Oct 26, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-slate-100 p-2">
                      <DashboardUserIcon name="schedule" className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">Time</p>
                      <p className="text-sm font-medium text-slate-900">20:00 – 21:00</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <DashboardUserIcon name="warning" className="h-5 w-5 text-amber-500" />
                    Owed: ৳3,000
                  </div>
                  <button
                    type="button"
                    className={`${lexend.className} rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-slate-800`}
                  >
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className={`${lexend.className} mb-6 flex items-center justify-between text-base font-semibold text-turf-on-surface`}>
              Recent history
              <span className="cursor-pointer text-[10px] font-black uppercase text-turf-primary">See all</span>
            </h2>
            <div className="space-y-4">
              {[
                { m: "Oct", d: "12", t: "Camp Nou training", s: "1 hour · Grass field" },
                { m: "Oct", d: "08", t: "Urban Padel Hub", s: "2 hours · Glass court" },
                { m: "Sep", d: "29", t: "Riverside Tennis", s: "1 hour · Clay court", dim: true },
              ].map((row) => (
                <button
                  key={row.t}
                  type="button"
                  className={`flex w-full items-center gap-4 text-left transition-opacity hover:opacity-90 ${row.dim ? "opacity-60" : ""}`}
                >
                  <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50">
                    <span className="text-[10px] font-bold text-emerald-600">{row.m}</span>
                    <span className="text-sm font-black leading-none text-emerald-700">{row.d}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-turf-on-surface">{row.t}</p>
                    <p className="text-[10px] text-slate-400">{row.s}</p>
                  </div>
                  <DashboardUserIcon name="chevron_right" className="h-5 w-5 text-slate-300" />
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="relative h-40 bg-slate-200">
              <Image src={IMG_MAP} alt="" fill className="object-cover" sizes="400px" />
              <div className="absolute inset-0 bg-turf-primary/10" aria-hidden />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 shadow-lg">
                <span className="h-2 w-2 animate-pulse rounded-full bg-turf-primary" />
                <span className="text-[10px] font-bold text-slate-900">Nearby: 4 open pitches</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className={`${lexend.className} mb-2 font-bold text-turf-on-surface`}>Venue locator</h3>
              <p className="mb-4 text-xs text-turf-on-surface-variant">
                Finding venues near your current location &quot;Dhaka, BD&quot;.
              </p>
              <Link
                href="/browse-turf"
                className={`${lexend.className} block w-full rounded-lg border border-slate-200 py-2 text-center text-xs font-bold text-slate-800 transition-colors hover:bg-slate-50`}
              >
                Open interactive map
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/support"
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
        aria-label="Help"
      >
        <DashboardUserIcon name="help_outline" className="h-7 w-7 text-white" />
      </Link>
    </UserPortalShell>
  );
}
