"use client";

import Image from "next/image";
import { useState } from "react";
import { Lexend } from "next/font/google";
import { TurfAdminIcon, TurfAdminShell, TurfAdminSearchHeader } from "../_components/TurfAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

const CAL_GRID = "grid grid-cols-[80px_repeat(7,minmax(0,1fr))]";

const DAYS = [
  { d: "MON", n: "14", hi: false },
  { d: "TUE", n: "15", hi: false },
  { d: "WED", n: "16", hi: false },
  { d: "THU", n: "17", hi: true },
  { d: "FRI", n: "18", hi: false },
  { d: "SAT", n: "19", hi: false },
  { d: "SUN", n: "20", hi: false },
];

const DECOR_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCA2xxJq1rRpADncsBZO9QVP1vGLJ0XAFvMx6hw-hBzg4HJUWFT1913oXTbmhiR8aQaUSkBYuE72RaHwF6OTmIqHZ8r8oN-UWR7m6EEAeXJIqrw1ZNyYCpElcFGdAAOK-F7auzdVt_0j9NHOsRNZMOGRX0M0HSrLALET2yrhpM41gjip1Q0L1k7ompyzYaKRvTYDK2n8_7tOEW5fJK2S2SoNO-3vAB5sNPFXNziA-7nlnCmWipAB7jjrlL2C60V3HPLsWgXZSOVew";

export default function Page() {
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <TurfAdminShell headerCenter={<TurfAdminSearchHeader placeholder="Search bookings or customers..." />}>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className={`${lexend.className} text-2xl font-semibold text-turf-on-surface md:text-3xl`}>Weekly schedule</h2>
          <p className="text-turf-on-surface-variant">October 14 — October 20, 2023</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex rounded-lg bg-slate-100 p-1">
            {["Day", "Week", "Month"].map((label) => (
              <button
                key={label}
                type="button"
                className={`rounded-md px-4 py-1.5 text-sm font-semibold transition-colors ${
                  label === "Week" ? "bg-white text-turf-primary shadow-sm" : "text-slate-500"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center overflow-hidden rounded-lg border border-slate-200">
            <button type="button" className="border-r border-slate-200 p-2 transition-colors hover:bg-slate-50" aria-label="Previous week">
              <TurfAdminIcon name="chevron_left" className="h-5 w-5" />
            </button>
            <button type="button" className="px-4 py-2 text-sm font-bold">
              Today
            </button>
            <button type="button" className="border-l border-slate-200 p-2 transition-colors hover:bg-slate-50" aria-label="Next week">
              <TurfAdminIcon name="chevron_right" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-6 text-xs">
        <span className="flex items-center gap-2 font-semibold uppercase tracking-wider text-slate-500">
          <span className="h-3 w-3 rounded-full border border-turf-primary" /> Available
        </span>
        <span className="flex items-center gap-2 font-semibold uppercase tracking-wider text-slate-500">
          <span className="h-3 w-3 rounded-full bg-slate-200" /> Booked
        </span>
        <span className="flex items-center gap-2 font-semibold uppercase tracking-wider text-slate-500">
          <span className="h-3 w-3 rounded-full bg-yellow-400" /> Selected slot
        </span>
        <span className="flex items-center gap-2 font-semibold uppercase tracking-wider text-slate-500">
          <span className="h-3 w-3 rounded-full border border-emerald-500 bg-emerald-500/20" /> Offline booking
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className={`${CAL_GRID} border-b border-slate-200 bg-slate-50`}>
          <div className="p-4" />
          {DAYS.map((day) => (
            <div
              key={day.n}
              className={`border-l border-slate-200 p-4 text-center ${day.hi ? "bg-emerald-50" : ""}`}
            >
              <p className={`text-xs font-semibold uppercase tracking-wider ${day.hi ? "text-emerald-600" : "text-slate-500"}`}>{day.d}</p>
              <p className={`text-lg font-bold ${day.hi ? "text-emerald-700" : "text-slate-900"}`}>{day.n}</p>
            </div>
          ))}
        </div>
        <div className="max-h-[560px] overflow-y-auto">
          <div className={`${CAL_GRID} min-h-[100px] border-b border-slate-100`}>
            <div className="flex items-start justify-end pr-4 pt-2 text-xs font-semibold uppercase text-slate-400">08:00 AM</div>
            <div className="border-l border-slate-100 p-1">
              <button
                type="button"
                onClick={() => setBookOpen(true)}
                className="flex h-full min-h-[88px] w-full flex-col justify-between rounded border border-emerald-500 bg-white p-2 text-left text-[10px] text-emerald-600 transition-colors hover:bg-emerald-50"
              >
                <span className="font-bold">AVAILABLE</span>
                <span>1 hr / $45</span>
              </button>
            </div>
            <div className="border-l border-slate-100 p-1">
              <div className="flex h-full min-h-[88px] items-center justify-center rounded border border-slate-200 bg-slate-100 p-2 text-[10px] italic text-slate-400 line-through">
                BOOKED
              </div>
            </div>
            <div className="border-l border-slate-100 p-1">
              <div className="flex h-full min-h-[88px] flex-col justify-between rounded border border-emerald-500 bg-white p-2 text-[10px] text-emerald-600">
                <span className="font-bold">AVAILABLE</span>
              </div>
            </div>
            <div className="border-l border-slate-100 p-1">
              <button
                type="button"
                onClick={() => setBookOpen(true)}
                className="flex h-full min-h-[88px] w-full flex-col justify-between rounded border-2 border-slate-900 bg-yellow-400 p-2 text-left text-[10px] text-slate-900"
              >
                <span className="font-bold uppercase">Selecting…</span>
                <TurfAdminIcon name="touch_app" className="h-4 w-4" />
              </button>
            </div>
            {[0, 1, 2].map((i) => (
              <div key={i} className="border-l border-slate-100 p-1" />
            ))}
          </div>
          <div className={`${CAL_GRID} min-h-[100px] border-b border-slate-100`}>
            <div className="flex items-start justify-end pr-4 pt-2 text-xs font-semibold uppercase text-slate-400">09:00 AM</div>
            <div className="border-l border-slate-100 p-1" />
            <div className="border-l border-slate-100 p-1">
              <div className="flex h-full min-h-[88px] flex-col justify-between rounded border border-emerald-500 bg-emerald-500/10 p-2 text-[10px] text-emerald-700">
                <div>
                  <p className="font-bold uppercase tracking-wider">James Wilson</p>
                  <p>Offline booking</p>
                </div>
                <span className="w-fit rounded border border-emerald-200 bg-white px-1 text-[9px]">Paid cash</span>
              </div>
            </div>
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="border-l border-slate-100 p-1" />
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setBookOpen(true)}
        className={`${lexend.className} fixed bottom-8 right-8 z-40 flex h-12 items-center gap-2 rounded-full bg-turf-primary px-5 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90 md:hidden`}
      >
        <TurfAdminIcon name="add" className="h-5 w-5" />
        Book slot
      </button>

      <div
        className={`fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm transition-opacity ${
          bookOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!bookOpen}
      >
        <button type="button" className="absolute inset-0" aria-label="Close" onClick={() => setBookOpen(false)} />
        <div
          className={`relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
            bookOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 p-6">
            <div>
              <h3 className={`${lexend.className} text-lg font-semibold text-turf-on-surface`}>Book slot</h3>
              <p className="text-sm text-slate-500">Thu, Oct 17 · 08:00 AM - 09:00 AM</p>
            </div>
            <button type="button" className="rounded-full p-2 transition-colors hover:bg-slate-200" onClick={() => setBookOpen(false)} aria-label="Close">
              <TurfAdminIcon name="close" className="h-5 w-5" />
            </button>
          </div>
          <form className="flex flex-1 flex-col overflow-y-auto p-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">Customer full name</label>
                <input
                  placeholder="e.g. Michael Jordan"
                  className="w-full rounded-lg border border-slate-200 py-3 outline-none focus:border-turf-primary focus:ring-2 focus:ring-turf-primary/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">Phone number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-lg border border-slate-200 py-3 outline-none focus:border-turf-primary focus:ring-2 focus:ring-turf-primary/20"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">Duration</label>
                  <select className="w-full appearance-none rounded-lg border border-slate-200 py-3 outline-none focus:ring-2 focus:ring-turf-primary/20">
                    <option>60 minutes</option>
                    <option>90 minutes</option>
                    <option>120 minutes</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">Pricing (USD)</label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                    <input type="number" defaultValue="45.00" className="w-full rounded-lg border border-slate-200 py-3 pl-7 outline-none focus:ring-2 focus:ring-turf-primary/20" />
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">Collect payment offline</p>
                    <p className="text-xs text-slate-500">Cash, check, or point of sale</p>
                  </div>
                  <label className="relative inline-block h-6 w-11 cursor-pointer">
                    <input type="checkbox" defaultChecked className="peer sr-only" />
                    <span className="absolute inset-0 rounded-full bg-slate-200 transition-colors peer-checked:bg-turf-primary" />
                    <span className="absolute left-[2px] top-[2px] h-5 w-5 rounded-full border border-gray-300 bg-white transition-transform peer-checked:translate-x-5 peer-checked:border-white" />
                  </label>
                </div>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-4">
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">$45.00</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Processing fee</span>
                  <span className="font-medium text-slate-900">$0.00</span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-4">
                  <span className="font-bold">Total amount</span>
                  <span className={`${lexend.className} text-xl font-bold text-turf-primary`}>$45.00</span>
                </div>
              </div>
            </div>
          </form>
          <div className="border-t border-slate-100 bg-white p-6">
            <button
              type="button"
              className={`${lexend.className} w-full rounded-xl bg-turf-primary py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:opacity-90 active:scale-[0.98]`}
            >
              Confirm manual booking
            </button>
            <button type="button" className="mt-2 w-full py-3 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-700" onClick={() => setBookOpen(false)}>
              Discard selection
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none fixed bottom-8 right-8 z-30 hidden h-40 w-64 rotate-3 overflow-hidden rounded-2xl border-4 border-white opacity-80 shadow-2xl md:block">
        <Image src={DECOR_IMG} alt="" fill className="object-cover" sizes="256px" />
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-slate-900/60 to-transparent p-4">
          <span className="text-xs font-bold uppercase tracking-widest text-white">Live: Main pitch</span>
        </div>
      </div>
    </TurfAdminShell>
  );
}
