"use client";

import Image from "next/image";
import { Lexend } from "next/font/google";
import { TurfAdminIcon, TurfAdminShell, TurfAdminSearchHeader } from "../_components/TurfAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

const IMG_MARCO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCMq5maILbLDOGXWwFni-Mv3hpQ66uzq-oxK5kgw7kAOuLH0pWiXxbhWsLLdBm8JuXloO0C_1QyY-i-NKh7yGAvH06PHzBZqizMc349vuNGODmUMR65JaZQSppBFlH_dwDwQWfra5oEFMOH9kI7ur7oKY3t8RN8CUrjPqdbCGnmMGdP11rcTCjVW18K-TkWFlgWDb-BfOUEZFoMMSPuWJLX-5fx7pldy25uYaGRTY8Gp3vlOYBNyOlI0mNAKbI1QBEWGzIWK9YoSQ";
const IMG_SARAH =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfkPxXa30UXToGmxFIKmGbbAQeozOa8f0PhYPsZ-v3hz1spWX8_rsDju2dv1Ukv7LurJ8I1LcDsiWaSJWVMihp_-Zm9ALKVFYDniX6_zMPZkfKxbhtcQ0ZG66Hic_UZ9EAEHCVE2pOPcIOkjaoYSya-W7JwZH6dB3A-xaNwHg3cKWpBMg4bYQydo_xFygg1l7s5oPyXfLVAtHWH8dbQkRp6MtD5yZMUwztc_Sy15IVzAebXEWthVadztFxZOzqTfo_fdwb0RxPXw";

export default function Page() {
  return (
    <TurfAdminShell headerCenter={<TurfAdminSearchHeader placeholder="Search bookings..." />}>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className={`${lexend.className} text-2xl font-semibold text-turf-on-surface md:text-3xl`}>Booking requests</h2>
          <p className="text-turf-on-surface-variant">Review and manage incoming turf reservation requests.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 font-semibold text-turf-on-surface transition-colors hover:bg-slate-50"
          >
            <TurfAdminIcon name="file_download" className="h-5 w-5" />
            Export CSV
          </button>
          <button
            type="button"
            className={`${lexend.className} inline-flex items-center gap-2 rounded-lg bg-turf-primary-container px-6 py-2 text-sm font-bold text-turf-on-primary-container shadow-sm transition-all hover:opacity-90 active:scale-95`}
          >
            <TurfAdminIcon name="add" className="h-5 w-5" />
            New booking
          </button>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Pending requests", value: "24", sub: "+12% from yesterday", subIcon: "trending_up", subColor: "text-red-600", icon: "pending", box: "bg-slate-200 text-slate-600" },
          { label: "Approved today", value: "18", sub: "85% conversion rate", subIcon: "arrow_forward", subColor: "text-turf-primary", icon: "check_circle", box: "bg-emerald-100 text-turf-primary" },
          { label: "Avg. response time", value: "14", suffix: "mins", sub: "-4m improvement", subIcon: "trending_down", subColor: "text-turf-primary", icon: "timer", box: "bg-blue-100 text-blue-700" },
          { label: "Est. revenue", value: "$3,420", sub: "From pending queue", subIcon: null, subColor: "text-slate-500", icon: "payments", box: "bg-emerald-100/50 text-turf-on-primary-container" },
        ].map((card) => (
          <div key={card.label} className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{card.label}</span>
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${card.box}`}>
                <TurfAdminIcon name={card.icon} className="h-5 w-5" />
              </div>
            </div>
            <p className={`${lexend.className} text-2xl font-bold text-turf-on-surface`}>
              {card.value}
              {card.suffix ? <span className="ml-1 text-base font-normal text-slate-600">{card.suffix}</span> : null}
            </p>
            <p className={`flex items-center gap-1 text-xs font-medium ${card.subColor}`}>
              {card.subIcon ? <TurfAdminIcon name={card.subIcon} className="h-3.5 w-3.5" /> : null}
              {card.sub}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-100 bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium transition-colors hover:bg-slate-50">
              <TurfAdminIcon name="filter_list" className="h-[18px] w-[18px]" />
              All turfs
            </button>
            <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium transition-colors hover:bg-slate-50">
              Status: Pending
              <TurfAdminIcon name="keyboard_arrow_down" className="h-[18px] w-[18px]" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Showing 1-8 of 24 requests</span>
            <div className="ml-2 flex">
              <button type="button" className="rounded-l border border-slate-200 p-1 hover:bg-slate-100" aria-label="Previous">
                <TurfAdminIcon name="chevron_left" className="h-[18px] w-[18px]" />
              </button>
              <button type="button" className="rounded-r border border-l-0 border-slate-200 p-1 hover:bg-slate-100" aria-label="Next">
                <TurfAdminIcon name="chevron_right" className="h-[18px] w-[18px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                {["Requester", "Turf facility", "Date & time", "Amount", "Status", "Actions"].map((h) => (
                  <th
                    key={h}
                    className={`px-6 py-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500 ${h === "Actions" ? "text-right" : ""}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              <tr className="transition-colors hover:bg-slate-50/80">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <Image src={IMG_MARCO} alt="" width={36} height={36} className="h-9 w-9 rounded-full border border-slate-100 object-cover shadow-sm" />
                    <div>
                      <p className="font-bold text-turf-on-surface">Marco Rossi</p>
                      <p className="text-xs font-normal text-slate-500">Inter Milan Youth Coach</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-turf-primary" />
                    <span>Elite Pitch A (Indoor)</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p>Oct 24, 2023</p>
                  <p className="text-xs text-slate-500">06:00 PM - 08:00 PM</p>
                </td>
                <td className="px-6 py-5">
                  <p className="font-bold">$240.00</p>
                  <span className="mt-0.5 inline-block rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">PREPAID</span>
                </td>
                <td className="px-6 py-5">
                  <span className="rounded-full border border-amber-200 bg-amber-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-amber-700">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2">
                    <button type="button" className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50" aria-label="Decline">
                      <TurfAdminIcon name="close" className="h-5 w-5" />
                    </button>
                    <button type="button" className={`${lexend.className} rounded-lg bg-turf-primary-container px-4 py-2 text-xs font-bold text-turf-on-primary-container shadow-sm transition-shadow hover:shadow-md`}>
                      Accept
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-50/80">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <Image src={IMG_SARAH} alt="" width={36} height={36} className="h-9 w-9 rounded-full border border-slate-100 object-cover shadow-sm" />
                    <div>
                      <p className="font-bold text-turf-on-surface">Sarah Jenkins</p>
                      <p className="text-xs text-slate-500">Weekend Warriors FC</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                    <span>Main Stadium Turf</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p>Oct 25, 2023</p>
                  <p className="text-xs text-slate-500">04:00 PM - 05:30 PM</p>
                </td>
                <td className="px-6 py-5">
                  <p className="font-bold">$185.00</p>
                  <span className="mt-0.5 inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600">PAY LATER</span>
                </td>
                <td className="px-6 py-5">
                  <span className="rounded-full border border-amber-200 bg-amber-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-amber-700">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2">
                    <button type="button" className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50" aria-label="Decline">
                      <TurfAdminIcon name="close" className="h-5 w-5" />
                    </button>
                    <button type="button" className={`${lexend.className} rounded-lg bg-turf-primary-container px-4 py-2 text-xs font-bold text-turf-on-primary-container shadow-sm`}>
                      Accept
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-50/80">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">DB</div>
                    <div>
                      <p className="font-bold text-turf-on-surface">David Beckham</p>
                      <p className="text-xs text-slate-500">Miami Schools Div.</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                    <span>East Side Field 4</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p>Oct 26, 2023</p>
                  <p className="text-xs text-slate-500">09:00 AM - 11:00 AM</p>
                </td>
                <td className="px-6 py-5">
                  <p className="font-bold">$120.00</p>
                  <span className="mt-0.5 inline-block rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">PREPAID</span>
                </td>
                <td className="px-6 py-5">
                  <span className="rounded-full border border-amber-200 bg-amber-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-amber-700">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2">
                    <button type="button" className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50" aria-label="Decline">
                      <TurfAdminIcon name="close" className="h-5 w-5" />
                    </button>
                    <button type="button" className={`${lexend.className} rounded-lg bg-turf-primary-container px-4 py-2 text-xs font-bold text-turf-on-primary-container shadow-sm`}>
                      Accept
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-slate-100 bg-white px-6 py-6 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-turf-on-surface">3</span> of <span className="font-semibold text-turf-on-surface">24</span> pending requests
          </p>
          <nav className="flex gap-1">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                type="button"
                className={`flex h-9 w-9 items-center justify-center rounded-lg font-bold transition-colors ${
                  n === 1 ? "bg-turf-primary text-white" : "hover:bg-slate-100"
                }`}
              >
                {n}
              </button>
            ))}
            <span className="flex h-9 w-9 items-center justify-center text-slate-400">…</span>
            <button type="button" className="flex h-9 w-9 items-center justify-center rounded-lg font-bold hover:bg-slate-100">
              8
            </button>
          </nav>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className={`${lexend.className} mb-4 text-lg font-semibold text-turf-on-surface`}>Conflict alerts</h3>
          <div className="space-y-4">
            <div className="flex gap-4 rounded-lg border border-red-100 bg-red-50/50 p-4">
              <TurfAdminIcon name="warning" className="h-6 w-6 shrink-0 text-red-600" />
              <div>
                <p className="text-sm font-bold text-red-900">Potential double booking</p>
                <p className="mt-1 text-xs text-red-800/80">
                  Marco Rossi&apos;s request overlaps with maintenance schedule on Pitch A (Oct 24, 07:30 PM).
                </p>
                <button type="button" className="mt-2 text-xs font-bold text-red-700 underline">
                  Resolve conflict
                </button>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-emerald-100 bg-emerald-50/40 p-4">
              <TurfAdminIcon name="info" className="h-6 w-6 shrink-0 text-turf-primary" />
              <div>
                <p className="text-sm font-bold text-turf-on-primary-container">Priority client</p>
                <p className="mt-1 text-xs text-turf-on-primary-container/80">Sarah Jenkins has booked 15+ sessions this month. Consider approving quickly.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-6 text-white shadow-xl">
          <div className="relative z-10">
            <h3 className={`${lexend.className} mb-2 text-lg font-semibold text-emerald-400`}>Peak hours optimization</h3>
            <p className="mb-4 text-sm text-slate-400">Thursday evenings are currently 92% occupied. Consider dynamic pricing for the remaining slots.</p>
            <div className="mt-6 flex h-32 items-end gap-1">
              {[30, 45, 65, 90, 85, 55].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm bg-emerald-500" style={{ height: `${h}%`, opacity: 0.2 + i * 0.12 }} />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span className="text-emerald-400">Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>
      </div>
    </TurfAdminShell>
  );
}
