"use client";

import { Lexend } from "next/font/google";
import { TurfAdminIcon, TurfAdminShell, TurfAdminSearchHeader } from "../_components/TurfAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export default function Page() {
  return (
    <TurfAdminShell headerCenter={<TurfAdminSearchHeader placeholder="Search analytics..." />}>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className={`${lexend.className} text-2xl font-semibold text-slate-900 md:text-3xl`}>Performance analytics</h2>
          <p className="text-slate-500">Real-time insights for Pro Turf Management</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <TurfAdminIcon name="calendar_month" className="h-4 w-4" />
            Last 30 days
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-turf-primary px-4 py-2 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
          >
            <TurfAdminIcon name="download" className="h-4 w-4" />
            Export report
          </button>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total earnings", value: "$42,850.00", badge: "+12.5%", badgeClass: "text-emerald-600 bg-emerald-50", icon: "payments", iconWrap: "bg-emerald-50 text-emerald-600" },
          { label: "Peak utilization", value: "88.4%", badge: "Optimal", badgeClass: "text-blue-600 bg-blue-50", icon: "trending_up", iconWrap: "bg-blue-50 text-blue-600" },
          { label: "Active bookings", value: "1,248", badge: "24 New", badgeClass: "text-amber-600 bg-amber-50", icon: "book_online", iconWrap: "bg-amber-50 text-amber-600" },
          { label: "Cancellations", value: "42", badge: "-3.2%", badgeClass: "text-red-600 bg-red-50", icon: "cancel", iconWrap: "bg-red-50 text-red-600" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex items-start justify-between">
              <div className={`rounded-lg p-2 ${m.iconWrap}`}>
                <TurfAdminIcon name={m.icon} className="h-5 w-5" />
              </div>
              <span className={`rounded-full px-2 py-1 text-xs font-semibold ${m.badgeClass}`}>{m.badge}</span>
            </div>
            <p className="text-sm font-medium text-slate-500">{m.label}</p>
            <h3 className={`${lexend.className} mt-1 text-2xl font-bold text-slate-900`}>{m.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h4 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Revenue growth</h4>
            <div className="flex gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-turf-primary" /> Current
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-slate-200" /> Previous
              </span>
            </div>
          </div>
          <div className="flex h-64 items-end justify-between gap-2 px-2 sm:gap-4">
            {MONTHS.map((mo, i) => (
              <div key={mo} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-full w-full items-end justify-center gap-1">
                  <div className="w-1/3 rounded-t-sm bg-slate-100" style={{ height: `${50 + (i % 3) * 10}%` }} />
                  <div className="w-1/3 rounded-t-sm bg-turf-primary" style={{ height: `${60 + i * 6}%` }} />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">{mo}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-4">
          <h4 className={`${lexend.className} mb-6 text-lg font-semibold text-slate-900`}>Cancellation reasons</h4>
          <div className="relative mb-6 flex flex-1 items-center justify-center">
            <svg className="h-48 w-48 -rotate-90" viewBox="0 0 192 192">
              <circle cx="96" cy="96" r="70" fill="transparent" stroke="#f1f5f9" strokeWidth="24" />
              <circle cx="96" cy="96" r="70" fill="transparent" stroke="#006d36" strokeDasharray="260 440" strokeWidth="24" />
              <circle cx="96" cy="96" r="70" fill="transparent" stroke="#facc15" strokeDasharray="100 440" strokeDashoffset="-260" strokeWidth="24" />
              <circle cx="96" cy="96" r="70" fill="transparent" stroke="#ef4444" strokeDasharray="80 440" strokeDashoffset="-360" strokeWidth="24" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`${lexend.className} text-3xl font-bold text-slate-900`}>42</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Total</span>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { c: "bg-turf-primary", l: "Weather", p: "58%" },
              { c: "bg-yellow-400", l: "Scheduling", p: "24%" },
              { c: "bg-red-500", l: "Other", p: "18%" },
            ].map((row) => (
              <div key={row.l} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-600">
                  <span className={`h-2 w-2 rounded-full ${row.c}`} />
                  {row.l}
                </span>
                <span className="font-bold text-slate-900">{row.p}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-6">
          <h4 className={`${lexend.className} mb-6 text-lg font-semibold text-slate-900`}>Popular days</h4>
          <div className="space-y-4">
            {[
              ["Saturday", 92],
              ["Sunday", 88],
              ["Friday", 74],
              ["Wednesday", 61],
              ["Monday", 45],
            ].map(([day, pct]) => (
              <div key={day} className="space-y-1">
                <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
                  <span>{day}</span>
                  <span>{pct}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-turf-primary-container" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-6">
          <h4 className={`${lexend.className} mb-6 text-lg font-semibold text-slate-900`}>Peak hour traffic</h4>
          <div className="flex h-48 items-end justify-between gap-2">
            {[
              ["08:00", 30, false],
              ["10:00", 45, false],
              ["12:00", 40, false],
              ["14:00", 55, false],
              ["16:00", 85, false],
              ["18:00", 100, true],
              ["20:00", 95, true],
              ["22:00", 70, false],
            ].map(([label, h, peak]) => (
              <div key={label} className="group flex flex-1 flex-col items-center gap-2">
                <div
                  className={`w-full rounded-t-sm transition-colors ${peak ? "bg-turf-primary-container group-hover:bg-turf-primary" : "bg-slate-200 group-hover:bg-turf-primary"}`}
                  style={{ height: `${h}%` }}
                />
                <span className={`text-[10px] ${peak ? "font-bold text-turf-primary" : "text-slate-400"}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="fixed bottom-8 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-turf-primary text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
        aria-label="Add"
      >
        <TurfAdminIcon name="add" className="h-7 w-7" />
      </button>
    </TurfAdminShell>
  );
}
