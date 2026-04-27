"use client";

import Image from "next/image";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { DashboardUserIcon, UserPortalShell } from "@/features/dashboard/user/components/UserPortalShell";

const lexend = Lexend({ subsets: ["latin"] });

const IMG_PROMO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCOeonVDXMHvRzC96baCowO9JMiIsHL-4CTXo3-lISexfYXlGVpXKQMh6u11VlA0YaUeDe0GX57F0wwBg0IYBFRtlKsF1d5SsARFwBx6maEeH7XwU3texdRtsclRraHj80G5NQfyBSW-Wr9DoCPD73ILRrGQVX_txafnvVjAIB7IbGKJYMAc2TuXdd5xYTIib9_uCoXMKb1HruEhxDVLUNyxNSqbvwcnAhFkhjd8ltm467_HQVa0sxTwf2nEuHpZLf9GhPh-YQC-g";

const HISTORY_ROWS = [
  {
    id: "1",
    facility: "Arena Alpha - Pitch 4",
    sport: "5-a-side Football",
    date: "Oct 24, 2023",
    time: "18:00 - 19:30 (90 min)",
    status: "completed",
    amount: "$45.00",
    paymentLine: "PAID • VISA ****4242",
    paymentTone: "paid",
    icon: "sports_soccer",
    iconBg: "bg-emerald-100 text-emerald-700",
    cancelled: false,
  },
  {
    id: "2",
    facility: "Elite Padel Center",
    sport: "Court 2 • Padel",
    date: "Oct 21, 2023",
    time: "09:00 - 10:00 (60 min)",
    status: "cancelled",
    amount: "$30.00",
    paymentLine: "REFUNDED",
    paymentTone: "refund",
    icon: "sports_tennis",
    iconBg: "bg-blue-100 text-blue-700",
    cancelled: true,
  },
  {
    id: "3",
    facility: "The Hoop Box",
    sport: "Full Court • Basketball",
    date: "Oct 18, 2023",
    time: "20:00 - 22:00 (120 min)",
    status: "completed",
    amount: "$65.00",
    paymentLine: "PAID • CREDITS",
    paymentTone: "paid",
    icon: "sports_basketball",
    iconBg: "bg-orange-100 text-orange-700",
    cancelled: false,
  },
  {
    id: "4",
    facility: "Arena Alpha - Pitch 1",
    sport: "7-a-side Football",
    date: "Oct 15, 2023",
    time: "17:00 - 18:30 (90 min)",
    status: "completed",
    amount: "$55.00",
    paymentLine: "PAID • VISA ****4242",
    paymentTone: "paid",
    icon: "sports_soccer",
    iconBg: "bg-emerald-100 text-emerald-700",
    cancelled: false,
  },
];

function SearchHeader() {
  return (
    <div className="relative hidden w-full max-w-md md:block">
      <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
        <DashboardUserIcon name="search" className="h-4 w-4" />
      </span>
      <input
        type="search"
        placeholder="Search bookings..."
        className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-turf-on-surface outline-none transition-shadow focus:border-turf-primary focus:ring-2 focus:ring-turf-primary-container/40"
      />
    </div>
  );
}

function StatusPill({ status }) {
  if (status === "cancelled") {
    return (
      <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-red-900">
        Cancelled
      </span>
    );
  }
  return (
    <span className="rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
      Completed
    </span>
  );
}

export default function Page() {
  return (
    <UserPortalShell maxWidthClass="max-w-7xl" headerCenter={<SearchHeader />}>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className={`${lexend.className} mb-2 text-3xl font-bold tracking-tight text-turf-on-surface md:text-4xl`}>
            Booking history
          </h1>
          <p className="max-w-xl text-lg text-turf-secondary">Manage and review your past athletic facility sessions.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className={`${lexend.className} inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-turf-on-surface shadow-sm transition-colors hover:bg-slate-50`}
          >
            <DashboardUserIcon name="download" className="h-[18px] w-[18px]" />
            Export CSV
          </button>
          <Link
            href="/browse-turf"
            className={`${lexend.className} inline-flex items-center gap-2 rounded-lg bg-turf-primary-container px-6 py-2 text-xs font-semibold uppercase tracking-wider text-turf-on-primary-container shadow-sm transition-all hover:opacity-95 active:scale-[0.98]`}
          >
            <DashboardUserIcon name="add_circle" className="h-[18px] w-[18px]" />
            New booking
          </Link>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-slate-500">Sport type</label>
          <select className="w-full cursor-pointer appearance-none rounded-lg border-none bg-slate-50 py-2 pl-3 pr-8 text-sm font-medium text-turf-on-surface outline-none focus:ring-2 focus:ring-turf-primary-container">
            <option>All sports</option>
            <option>Football (soccer)</option>
            <option>Padel</option>
            <option>Basketball</option>
            <option>Tennis</option>
          </select>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-slate-500">Date range</label>
          <input
            type="date"
            className="w-full rounded-lg border-none bg-slate-50 py-2 px-3 text-sm text-turf-on-surface outline-none focus:ring-2 focus:ring-turf-primary-container"
          />
        </div>
        <div className="col-span-1 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Total sessions</p>
              <p className={`${lexend.className} text-2xl font-bold text-turf-primary md:text-3xl`}>24</p>
            </div>
            <div className="border-l border-slate-100 pl-8">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Completed</p>
              <p className={`${lexend.className} text-2xl font-bold text-slate-600 md:text-3xl`}>22</p>
            </div>
            <div className="border-l border-slate-100 pl-8">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Cancelled</p>
              <p className={`${lexend.className} text-2xl font-bold text-red-600 md:text-3xl`}>2</p>
            </div>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-full bg-turf-primary-container/15 text-turf-primary transition-colors hover:bg-turf-primary hover:text-white md:self-center"
            aria-label="Open filters"
          >
            <DashboardUserIcon name="filter_list" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Facility &amp; sport</th>
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Date &amp; time</th>
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Status</th>
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Payment</th>
                <th className="px-6 py-4 text-right text-[10px] font-semibold uppercase tracking-wider text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {HISTORY_ROWS.map((row) => (
                <tr key={row.id} className="transition-colors hover:bg-slate-50/80">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${row.iconBg}`}>
                        <DashboardUserIcon name={row.icon} className="h-5 w-5" />
                      </div>
                      <div>
                        <p
                          className={`${lexend.className} text-base font-semibold ${row.cancelled ? "text-slate-400 line-through" : "text-turf-on-surface"}`}
                        >
                          {row.facility}
                        </p>
                        <p className={`text-xs ${row.cancelled ? "text-slate-400" : "text-turf-on-surface-variant"}`}>{row.sport}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className={`text-sm font-medium ${row.cancelled ? "text-slate-400 line-through" : "text-turf-on-surface"}`}>{row.date}</p>
                    <p className={`text-xs ${row.cancelled ? "text-slate-400" : "text-turf-on-surface-variant"}`}>{row.time}</p>
                  </td>
                  <td className="px-6 py-5">
                    <StatusPill status={row.status} />
                  </td>
                  <td className="px-6 py-5">
                    <p className={`text-sm font-medium ${row.cancelled ? "text-slate-400" : "text-turf-on-surface"}`}>{row.amount}</p>
                    <p
                      className={`text-[10px] font-bold uppercase ${
                        row.paymentTone === "paid" ? "text-emerald-600" : row.paymentTone === "refund" ? "text-red-600" : "text-slate-500"
                      }`}
                    >
                      {row.paymentLine}
                    </p>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <Link
                      href="/browse-turf"
                      className={`${lexend.className} mr-2 inline-flex items-center rounded-lg px-4 py-1.5 text-xs font-bold transition-all active:scale-95 ${
                        row.cancelled
                          ? "border border-slate-200 bg-white text-turf-on-surface hover:bg-slate-50"
                          : "bg-turf-primary text-white shadow-sm hover:opacity-95"
                      }`}
                    >
                      Re-book
                    </Link>
                    <button
                      type="button"
                      className="inline-flex rounded-md p-1.5 text-slate-400 transition-colors hover:bg-slate-200"
                      aria-label="More options"
                    >
                      <DashboardUserIcon name="more_vert" className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Showing 1–4 of 24 bookings</p>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-400 transition-colors hover:text-turf-on-surface"
              aria-label="Previous page"
            >
              <DashboardUserIcon name="chevron_left" className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              className={`${lexend.className} flex h-8 w-8 items-center justify-center rounded-md bg-turf-primary text-xs font-bold text-white`}
            >
              1
            </button>
            <button
              type="button"
              className={`${lexend.className} flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-xs font-bold text-slate-600 transition-colors hover:bg-slate-100`}
            >
              2
            </button>
            <button
              type="button"
              className={`${lexend.className} flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-xs font-bold text-slate-600 transition-colors hover:bg-slate-100`}
            >
              3
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-400 transition-colors hover:text-turf-on-surface"
              aria-label="Next page"
            >
              <DashboardUserIcon name="chevron_right" className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="group relative h-48 overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={IMG_PROMO}
            alt="Floodlit soccer pitch"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-linear-to-r from-black/80 to-transparent p-8">
            <span className={`${lexend.className} mb-3 w-fit rounded bg-turf-primary px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-white`}>
              Loved by you
            </span>
            <h3 className={`${lexend.className} mb-2 text-xl font-bold text-white`}>Arena Alpha - Pitch 4</h3>
            <p className="mb-4 max-w-xs text-sm text-white/70">You&apos;ve played here 12 times. Ready for another session this weekend?</p>
            <Link
              href="/browse-turf"
              className={`${lexend.className} w-fit rounded-lg bg-turf-primary-container px-6 py-2 text-xs font-bold text-turf-on-primary-container transition-all hover:brightness-110 active:scale-95`}
            >
              Quick book $45
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-slate-200/80 p-8 shadow-md dark:bg-slate-800/40">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className={`${lexend.className} mb-2 text-xl font-bold text-turf-on-surface`}>Membership perks</h3>
              <p className="max-w-xs text-sm text-slate-600">
                Upgrade to Pro to get 15% off all future bookings and early access to peak time slots.
              </p>
            </div>
            <DashboardUserIcon name="workspace_premium" className="h-12 w-12 shrink-0 text-turf-primary" filled />
          </div>
          <button
            type="button"
            className={`${lexend.className} w-fit self-end rounded-lg bg-slate-900 px-6 py-3 text-xs font-bold text-white transition-all hover:bg-black active:scale-95`}
          >
            Upgrade now
          </button>
        </div>
      </div>
    </UserPortalShell>
  );
}
