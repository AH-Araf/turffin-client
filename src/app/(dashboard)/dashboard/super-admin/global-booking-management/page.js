"use client";

import { Lexend } from "next/font/google";
import { SuperAdminShell, SuperAdminSearchHeader, TurfAdminIcon } from "@/features/dashboard/superAdmin/components/SuperAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

export default function GlobalBookingManagementPage() {
  return (
    <SuperAdminShell headerCenter={<SuperAdminSearchHeader placeholder="Search bookings, venues, or customers..." />}>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className={`${lexend.className} text-2xl font-bold text-slate-900 md:text-3xl`}>Global bookings</h2>
          <p className="text-slate-600">Master oversight of all platform activity.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            <TurfAdminIcon name="upload_file" className="h-4 w-4" />
            Export CSV
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
          >
            <TurfAdminIcon name="add" className="h-4 w-4" />
            New booking
          </button>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-xl border border-red-200/60 bg-red-50/80 p-6 lg:col-span-4">
          <div className="mb-4 flex items-center gap-3">
            <TurfAdminIcon name="warning" className="h-6 w-6 text-red-700" />
            <h3 className={`${lexend.className} text-lg font-semibold text-red-800`}>Conflict alerts</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start justify-between rounded-lg border border-red-100 bg-white/70 p-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">Overlapping request</p>
                <p className="text-xs text-slate-600">Elite Turf • Pitch A</p>
                <p className="mt-1 text-xs font-bold text-red-700">14:00 - 15:30 (Today)</p>
              </div>
              <button type="button" className="text-xs font-bold text-red-700 hover:underline">
                Resolve
              </button>
            </div>
            <div className="flex items-start justify-between rounded-lg border border-red-100 bg-white/70 p-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">Double booking</p>
                <p className="text-xs text-slate-600">City Arena • Court 2</p>
                <p className="mt-1 text-xs font-bold text-red-700">18:00 - 19:00 (Today)</p>
              </div>
              <button type="button" className="text-xs font-bold text-red-700 hover:underline">
                Resolve
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-8">
          <div className="mb-6 flex items-center gap-3">
            <TurfAdminIcon name="filter_list" className="h-6 w-6 text-emerald-700" />
            <h3 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Advanced filtering</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-slate-500">Date range</label>
              <div className="relative">
                <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-slate-400">
                  <TurfAdminIcon name="calendar_month" className="h-5 w-5" />
                </span>
                <input readOnly className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" defaultValue="Oct 12 - Oct 19" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-slate-500">Sport type</label>
              <select className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                <option>All sports</option>
                <option>Football</option>
                <option>Cricket</option>
                <option>Tennis</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-slate-500">Venue</label>
              <select className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                <option>All venues</option>
                <option>Elite Turf Park</option>
                <option>Central Arena</option>
                <option>Riverside Sports</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-slate-500">Payment status</label>
              <select className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                <option>All statuses</option>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50">
              Clear all filters
            </button>
            <button type="button" className="rounded-lg bg-emerald-700 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-emerald-800">
              Apply filters
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-600">Booking ID</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-600">Customer</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-600">Venue &amp; sport</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-600">Time slot</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-600">Amount</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-600">Status</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { id: "#TM-88219", name: "John Dorsey", venue: "Elite Turf Center", sub: "Football • Pitch A", slot: "Today, 14:00", len: "90 minutes", amt: "$120.00", st: "Confirmed" },
                { id: "#TM-88218", name: "Sarah Miller", venue: "Central Arena", sub: "Tennis • Court 2", slot: "Tomorrow, 10:00", len: "60 minutes", amt: "$45.00", st: "Pending" },
              ].map((r) => (
                <tr key={r.id} className="transition-colors hover:bg-slate-50">
                  <td className="px-6 py-4 font-mono text-sm text-slate-800">{r.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800">
                        {r.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")}
                      </div>
                      <span className="text-sm font-semibold text-slate-900">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-slate-900">{r.venue}</p>
                    <p className="text-xs text-slate-500">{r.sub}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-900">{r.slot}</p>
                    <p className="text-xs text-slate-500">{r.len}</p>
                  </td>
                  <td className="px-6 py-4 font-mono text-sm text-slate-900">{r.amt}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        r.st === "Confirmed"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                          : "border-amber-200 bg-amber-50 text-amber-800"
                      }`}
                    >
                      {r.st}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button type="button" className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600" aria-label="More">
                      <TurfAdminIcon name="more_vert" className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SuperAdminShell>
  );
}
