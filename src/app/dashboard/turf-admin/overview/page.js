"use client";

import Image from "next/image";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { TurfAdminIcon, TurfAdminShell, TurfAdminSearchHeader } from "../_components/TurfAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

const IMG_SARAH =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuADFWg0j3ZZliXPCiP3tgltWjYvHqA0PKt-PFgbWLX1MlZRW-Ddx8PwaMo1T1nz4fyh0BaSoqR0ir1RvnbIWq88JXcSMAu0R1UYzhS2-g5eUE4jyuULPD-Fyr1AdsK8uBVSzXyUi55cDbuGiN5A8E-kPJopuRIcCqNwZnl_WBQE1gXEqKM_N7HBJ_r7zZg_2z7R-mNSqfIkGegR6vUrbpZa4RdsaWh_XMbnHo65yRnAjiVezDrYVizDvx8PkYTQTrd5A9CIFy6Baw";

const STAFF = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBHuf2JBZPXWDOjEkgR0fA_TRO14CZpCTgacVItYPKYfkuUgL7tAfdCSd3MmFOf87-1jhvmtDnlNHpMFrhApwWp5H5lMw73K4rzzLh7OL1TG-6n0BqehVskfEUsn8f_tfzGRbvbhdudLmfvz69vzLIVEF6XlRS0o0UIMSYtTIHzEENxe4X4HqE9609M8wU7MXSnLujCNHlOSCCouNzWqitDGhYZARR0r__rneyWoSZjoN7KjpS31FfWxdctTq7fqferKY47YLyfMA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBHQ9HJjlbDJemO-vWZabjEAt5B4sTUaMn19TWdWBUbMCuzItShjkkNb2hL9dTtV6jwIV2SmCZdyTkacQTnRdlXJCdReK4kbbxlU64yadYmSvGqJ9hn1Gy_8T-DK2IIR3zhUZtu6sDnK1yEkprafkgqgbd7IuUQvsugRloxQIyG853g3WRE-wK9C3ZZt9TL51ySsCRBffqkYyLFqs5vnu7dsxQ4HJWvKnBWjiWuppu3NXCcdwH-JcmgcGQ-cPWUFOnohrq2pki0vA",
];

function StatCard({ icon, delta, label, value, bars }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">{icon}</div>
        <span className="rounded bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">{delta}</span>
      </div>
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <h3 className={`${lexend.className} text-xl font-bold text-slate-900`}>{value}</h3>
      <div className="mt-4 flex h-8 items-end gap-1">{bars}</div>
    </div>
  );
}

function MiniBar({ className }) {
  return <div className={`w-full rounded-sm ${className}`} />;
}

export default function Page() {
  return (
    <TurfAdminShell headerCenter={<TurfAdminSearchHeader />}>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 space-y-6 lg:col-span-9">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className={`${lexend.className} text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl`}>
                Overview dashboard
              </h2>
              <p className="text-slate-600">Monitoring Pro Turf Management performance.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
              >
                <TurfAdminIcon name="calendar_month" className="h-4 w-4" />
                Last 30 days
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-turf-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
              >
                <TurfAdminIcon name="download" className="h-4 w-4" />
                Export report
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={<TurfAdminIcon name="payments" className="h-5 w-5" />}
              delta="+12.5%"
              label="Total revenue"
              value="$24,450.00"
              bars={
                <>
                  <MiniBar className="h-1/2 bg-emerald-100" />
                  <MiniBar className="h-2/3 bg-emerald-100" />
                  <MiniBar className="h-1/3 bg-emerald-100" />
                  <MiniBar className="h-4/5 bg-emerald-500" />
                  <MiniBar className="h-full bg-emerald-500" />
                </>
              }
            />
            <StatCard
              icon={<TurfAdminIcon name="stadium" className="h-5 w-5" />}
              delta="+5.2%"
              label="Occupancy rate"
              value="88.4%"
              bars={
                <>
                  <MiniBar className="h-2/3 bg-emerald-100" />
                  <MiniBar className="h-3/4 bg-emerald-500" />
                  <MiniBar className="h-1/2 bg-emerald-100" />
                  <MiniBar className="h-full bg-emerald-500" />
                  <MiniBar className="h-4/5 bg-emerald-500" />
                </>
              }
            />
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded-lg bg-yellow-50 p-2 text-yellow-600">
                  <TurfAdminIcon name="pending_actions" className="h-5 w-5" />
                </div>
                <span className="rounded bg-yellow-50 px-2 py-1 text-[10px] font-bold text-yellow-600">12 New</span>
              </div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Pending requests</p>
              <h3 className={`${lexend.className} text-xl font-bold text-slate-900`}>24</h3>
              <div className="mt-4 flex h-8 items-end gap-1">
                <MiniBar className="h-full bg-yellow-100" />
                <MiniBar className="h-1/2 bg-yellow-100" />
                <MiniBar className="h-2/3 bg-yellow-500" />
                <MiniBar className="h-1/3 bg-yellow-100" />
                <MiniBar className="h-3/4 bg-yellow-500" />
              </div>
            </div>
            <StatCard
              icon={<TurfAdminIcon name="group" className="h-5 w-5" />}
              delta="+82"
              label="Total customers"
              value="1,204"
              bars={
                <>
                  <MiniBar className="h-1/3 bg-emerald-100" />
                  <MiniBar className="h-2/3 bg-emerald-100" />
                  <MiniBar className="h-3/4 bg-emerald-500" />
                  <MiniBar className="h-full bg-emerald-500" />
                  <MiniBar className="h-1/2 bg-emerald-100" />
                </>
              }
            />
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h4 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Performance overview</h4>
                <p className="text-sm text-slate-500">Revenue and occupancy growth tracking.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <span className="h-3 w-3 rounded-full bg-turf-primary" /> Revenue
                </span>
                <span className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <span className="h-3 w-3 rounded-full bg-blue-200" /> Booking vol.
                </span>
              </div>
            </div>
            <div className="relative flex h-64 items-end justify-between gap-2 px-2 sm:gap-4">
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-0 w-full border-b border-slate-100" />
                ))}
              </div>
              {["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"].map((m, i) => (
                <div key={m} className="group flex flex-1 flex-col items-center justify-end gap-1">
                  <div className="flex w-full flex-col items-center justify-end gap-1" style={{ height: "12rem" }}>
                    <div
                      className="w-full rounded-t-sm bg-turf-primary/20 transition-all group-hover:bg-turf-primary/40"
                      style={{ height: `${35 + i * 5}%` }}
                    />
                    <div className="w-full rounded-t-sm bg-turf-primary" style={{ height: `${45 + i * 7}%` }} />
                  </div>
                  <span className="mt-2 text-[10px] font-medium text-slate-400">{m}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col justify-between gap-2 border-b border-slate-100 p-6 sm:flex-row sm:items-center">
              <h4 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Upcoming bookings</h4>
              <Link href="/dashboard/turf-admin/booking-requests" className="text-sm font-semibold text-turf-primary hover:underline">
                View all bookings
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="border-b border-slate-100 bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Customer</th>
                    <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Turf/Facility</th>
                    <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Date &amp; time</th>
                    <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Status</th>
                    <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-slate-500">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <tr className="transition-colors hover:bg-slate-50/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-800">
                          MK
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Marcus King</p>
                          <p className="text-[10px] text-slate-500">marcus@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-700">Champions Field A</td>
                    <td className="px-6 py-4 text-slate-700">Oct 24, 6:00 PM</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                        Confirmed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900">$120.00</td>
                  </tr>
                  <tr className="transition-colors hover:bg-slate-50/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Image src={IMG_SARAH} alt="" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
                        <div>
                          <p className="font-semibold text-slate-900">Sarah Chen</p>
                          <p className="text-[10px] text-slate-500">sarah.c@webmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-700">Indoor Arena 2</td>
                    <td className="px-6 py-4 text-slate-700">Oct 24, 7:30 PM</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-yellow-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-yellow-700">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900">$85.00</td>
                  </tr>
                  <tr className="transition-colors hover:bg-slate-50/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-600">
                          DS
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">David Smith</p>
                          <p className="text-[10px] text-slate-500">david.s@smithcorp.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-700">South Turf 1</td>
                    <td className="px-6 py-4 text-slate-700">Oct 25, 9:00 AM</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                        Confirmed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900">$150.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3">
          <div className="sticky top-24 flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm lg:h-[calc(100vh-8rem)]">
            <div className="flex items-center justify-between border-b border-slate-100 p-6">
              <h4 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Today&apos;s schedule</h4>
              <button type="button" className="rounded-full p-1 transition-colors hover:bg-slate-100" aria-label="More">
                <TurfAdminIcon name="more_vert" className="h-5 w-5 text-slate-400" />
              </button>
            </div>
            <div className="space-y-6 overflow-y-auto p-6">
              <div className="relative pl-8">
                <div className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-slate-100" />
                {[
                  { t: "08:00 AM - 10:00 AM", title: "Youth Academy Drill", sub: "Champions Field A", active: true },
                  { t: "11:30 AM - 01:00 PM", title: "Maintenance Window", sub: "Indoor Arena 1", active: false },
                  { t: "02:00 PM - 04:00 PM", title: "Varsity Match", sub: "Main Stadium", active: true },
                  { t: "05:00 PM - 06:00 PM", title: "Private Coaching", sub: "Training Pad 4", warn: true },
                  { t: "07:00 PM - 09:00 PM", title: "Corporate League", sub: "All Fields", active: false },
                ].map((ev, idx) => (
                  <div key={ev.title} className={`relative ${idx < 4 ? "pb-8" : ""}`}>
                    <div
                      className={`absolute left-[-30px] top-1 h-4 w-4 rounded-full border-4 border-white shadow-sm ring-1 ring-slate-100 ${
                        ev.warn ? "bg-yellow-400" : ev.active ? "bg-turf-primary" : "bg-slate-200"
                      }`}
                    />
                    <p
                      className={`mb-1 text-xs font-bold ${ev.warn ? "text-yellow-600" : ev.active ? "text-turf-primary" : "text-slate-500"}`}
                    >
                      {ev.t}
                    </p>
                    <div
                      className={`rounded-lg border-l-4 p-3 ${
                        ev.warn
                          ? "border-yellow-400 bg-yellow-50"
                          : ev.active
                            ? "border-turf-primary bg-emerald-50"
                            : "border-slate-300 bg-slate-50"
                      }`}
                    >
                      <p className="text-sm font-bold text-slate-900">{ev.title}</p>
                      <p className="text-[10px] text-slate-500">{ev.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto rounded-b-xl border-t border-slate-100 bg-slate-50/50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {STAFF.map((src) => (
                    <Image key={src.slice(-20)} src={src} alt="" width={24} height={24} className="h-6 w-6 rounded-full border-2 border-white object-cover" />
                  ))}
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-turf-primary text-[8px] font-bold text-white">
                    +3
                  </div>
                </div>
                <p className="text-[10px] font-medium text-slate-500">On-site staff today</p>
              </div>
              <button
                type="button"
                className={`${lexend.className} w-full rounded border border-slate-200 bg-white py-2 text-xs font-bold uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-50`}
              >
                Manage staff
              </button>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/browse-turf"
        className="group fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-turf-primary text-white shadow-2xl transition-all hover:scale-105 active:scale-95"
        aria-label="Quick booking"
      >
        <TurfAdminIcon name="add" className="h-7 w-7" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
          Quick booking
        </span>
      </Link>
    </TurfAdminShell>
  );
}
