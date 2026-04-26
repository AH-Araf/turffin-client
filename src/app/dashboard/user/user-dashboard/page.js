"use client";

import Image from "next/image";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { DashboardUserIcon, UserPortalShell } from "../_components/UserPortalShell";

const lexend = Lexend({ subsets: ["latin"] });

const IMG_ARENA =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC7SSlf2IgSfcapDouWCLeUZ9EK4-LbL-xehdxbgdC2mpk_zwZmxTNUbaKmK0OBxrZMytr7Brsxl8kuJTZ2B7kkaIMYorY2Tb6XLSKm0qGaJtL454MD2t5O78T9dKdiOnSoG5mDne6igyL02os3zkMF0KCphIT4ygRWUx4iZCAHBlOkLv3vz5TbzipP7HL0i_NCR8NFxVDy8RQwiwmmn3vRK3gO7v7dksNDlkrBIwGbkoRJgKwmqk73p29zXUwlvTH9so3QYj_CMg";
const IMG_HALL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDfJ72uF5BAMoyecg2ftXOKqNLO_aat41hIGu_WPnC_vmAFLKoUyi6oGTeAqd8ohvpQ5G2wRWZ9ePZoECms48T75gEu09vfstBEksXo21Gyx8NTjMbFp5g8wcaTOck5POU_TAWlvM-vQqe5mD6XffT6NqtGGHP3HhSJ7-17l7yWgu0-kpl1mEJDg_yVSmcrZ0IhdMv7sxPEGvaTZqzMu9a4-IsLQl_EgMA9_9VhhsyeRkUt3xs3RHB6qD8QazPTsDjOEmEis98O1w";

function SearchHeader() {
  return (
    <div className="relative hidden w-full max-w-md md:block">
      <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
        <DashboardUserIcon name="search" className="h-4 w-4" />
      </span>
      <input
        type="search"
        placeholder="Search matches..."
        className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-turf-on-surface outline-none transition-shadow focus:border-turf-primary focus:ring-2 focus:ring-turf-primary-container/40"
      />
    </div>
  );
}

export default function Page() {
  return (
    <UserPortalShell maxWidthClass="max-w-7xl" headerCenter={<SearchHeader />}>
      <section className="relative mb-10 overflow-hidden rounded-xl bg-turf-primary p-8 text-white shadow-xl">
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-turf-primary-container/10 blur-3xl" aria-hidden />
        <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row">
          <div className="flex-1">
            <h1 className={`${lexend.className} mb-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl`}>
              Ready to play, Rafid?
            </h1>
            <p className="mb-6 max-w-lg text-lg text-white/90">
              There are 12 slots available at your favorite facility today. Lace up and get back on the pitch.
            </p>
            <Link
              href="/browse-turf"
              className={`${lexend.className} inline-flex items-center gap-2 rounded-lg bg-turf-primary-container px-8 py-3 font-bold text-turf-on-primary-container shadow transition-all hover:opacity-95 active:scale-[0.98]`}
            >
              <DashboardUserIcon name="sports_soccer" className="h-5 w-5" />
              Book a pitch now
            </Link>
          </div>
          <div className="w-full max-w-xs rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl lg:w-1/3">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/70">Wallet balance</p>
            <p className={`${lexend.className} mb-4 text-4xl font-bold`}>৳28,450</p>
            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm">
              <span className="flex items-center gap-1 text-white/90">
                <DashboardUserIcon name="add_circle" className="h-4 w-4" />
                Quick top-up
              </span>
              <span className="rounded bg-white/20 px-2 py-1 text-xs">Voucher: TF-20</span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-turf-primary-container/20">
                <DashboardUserIcon name="event_available" className="h-6 w-6 text-turf-primary" />
              </div>
              <span className="text-sm font-bold text-turf-primary">+2 this week</span>
            </div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Total bookings</h2>
            <p className={`${lexend.className} text-3xl font-bold text-slate-900`}>48</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-200/80">
                <DashboardUserIcon name="timer" className="h-6 w-6 text-turf-secondary" />
              </div>
              <span className="text-sm font-bold text-turf-secondary">Next: 2h 15m</span>
            </div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Play time</h2>
            <p className={`${lexend.className} text-3xl font-bold text-slate-900`}>124 hrs</p>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:col-span-2">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <h2 className={`${lexend.className} text-lg font-semibold text-turf-on-surface`}>Recent activity</h2>
              <button type="button" className="text-sm font-bold text-turf-primary hover:underline">
                View all
              </button>
            </div>
            <div className="divide-y divide-slate-100">
              <div className="flex items-center gap-4 p-6 transition-colors hover:bg-slate-50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <DashboardUserIcon name="check_circle" className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-slate-900">Booking confirmed: Bashundhara R-Arena</p>
                  <p className="text-xs text-slate-500">5-a-side pitch · 2 hours</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">-৳4,500</p>
                  <p className="text-[10px] font-semibold uppercase text-slate-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 transition-colors hover:bg-slate-50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <DashboardUserIcon name="account_balance_wallet" className="h-5 w-5 text-blue-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-slate-900">Wallet top-up</p>
                  <p className="text-xs text-slate-500">Via card · **** 4242</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-turf-primary">+৳10,000</p>
                  <p className="text-[10px] font-semibold uppercase text-slate-400">Yesterday</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 transition-colors hover:bg-slate-50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
                  <DashboardUserIcon name="star" className="h-5 w-5 text-amber-600" filled />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-slate-900">Review left: Uttara Sports Hub</p>
                  <p className="text-xs text-slate-500">&quot;Great surface, lighting could be better&quot;</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">+10 pts</p>
                  <p className="text-[10px] font-semibold uppercase text-slate-400">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-4">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <h2 className={`${lexend.className} text-lg font-semibold text-turf-on-surface`}>Upcoming matches</h2>
            </div>
            <div className="space-y-4 p-4">
              <div className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-turf-primary-container">
                <div className="mb-4 flex items-start justify-between">
                  <span className="rounded bg-turf-primary-container/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-turf-on-primary-container">
                    Confirmed
                  </span>
                  <button type="button" className="text-slate-400 hover:text-turf-primary" aria-label="More options">
                    <DashboardUserIcon name="more_vert" className="h-5 w-5" />
                  </button>
                </div>
                <div className="mb-4 flex gap-4">
                  <Image
                    src={IMG_ARENA}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16 shrink-0 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Premier Turf Arena</h3>
                    <p className="flex items-center gap-1 text-xs text-slate-500">
                      <DashboardUserIcon name="location_on" className="h-3.5 w-3.5" />
                      Gulshan
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-slate-200 py-2 text-xs">
                  <div>
                    <p className="text-slate-400">Date</p>
                    <p className="font-bold text-slate-900">Oct 24, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400">Time</p>
                    <p className="font-bold text-slate-900">18:00 – 19:00</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-turf-primary-container">
                <div className="mb-4 flex items-start justify-between">
                  <span className="rounded bg-slate-200 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700">
                    Pending
                  </span>
                  <button type="button" className="text-slate-400 hover:text-turf-primary" aria-label="More options">
                    <DashboardUserIcon name="more_vert" className="h-5 w-5" />
                  </button>
                </div>
                <div className="mb-4 flex gap-4">
                  <Image
                    src={IMG_HALL}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16 shrink-0 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Grand Sports Hall</h3>
                    <p className="flex items-center gap-1 text-xs text-slate-500">
                      <DashboardUserIcon name="location_on" className="h-3.5 w-3.5" />
                      Banani
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-slate-200 py-2 text-xs">
                  <div>
                    <p className="text-slate-400">Date</p>
                    <p className="font-bold text-slate-900">Oct 26, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400">Time</p>
                    <p className="font-bold text-slate-900">20:30 – 22:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-4">
              <Link
                href="/dashboard/user/user-bookings"
                className={`${lexend.className} block w-full rounded-lg border border-slate-300 py-3 text-center text-sm font-bold text-slate-800 transition-colors hover:bg-white`}
              >
                View full schedule
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-slate-900 p-6 text-white">
            <div className="relative z-10">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-turf-primary-container">
                Top rated near you
              </span>
              <h3 className={`${lexend.className} mb-4 text-lg font-bold`}>Olympia Multi-Sport</h3>
              <div className="mb-6 flex items-center gap-2 text-sm">
                <DashboardUserIcon name="star" className="h-4 w-4 text-amber-400" filled />
                <span className="font-bold">4.9</span>
                <span className="text-xs text-slate-400">(420 reviews)</span>
              </div>
              <Link
                href="/browse-turf"
                className="inline-flex items-center gap-1 text-xs font-bold text-turf-primary-container hover:underline"
              >
                Explore facility
                <DashboardUserIcon name="arrow_forward" className="h-3 w-3" />
              </Link>
            </div>
            <div className="pointer-events-none absolute -right-5 -top-5 rotate-12 opacity-20 transition-transform group-hover:rotate-0">
              <DashboardUserIcon name="stadium" className="h-28 w-28 text-white" />
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/browse-turf"
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-turf-primary text-white shadow-2xl transition-transform hover:scale-105 active:scale-95"
        aria-label="Book a pitch"
      >
        <DashboardUserIcon name="add" className="h-7 w-7 text-white" />
      </Link>
    </UserPortalShell>
  );
}
