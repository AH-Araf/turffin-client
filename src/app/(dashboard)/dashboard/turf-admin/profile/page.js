"use client";

import Image from "next/image";
import { Lexend } from "next/font/google";
import { useState } from "react";
import { TurfAdminIcon, TurfAdminShell } from "@/features/dashboard/turfAdmin/components/TurfAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

const IMG_G1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCeNXLzh9-wFpoC6yOFweA0GFnsZ38rG_ycPs18dx2qo0OS0OrPSDKtKrWOXghP_jwF-hUYs7jXvQwob5LFf5AOiLBHFQi2OVuBrKnYH-JZFSUB3MPtsGhIywgQO2Tcbw-7eyGuvc-OjSUa0GR45XkCE6Gbnz9qoNVkdNn06X7oARRG16JWbHUH1ekIb7ZVv1Jm7P4NXHsHRgDP6ZBFopeEhmoe7TnvTCL2WFitbCzvzG67O0C5ln3SCtdC0IXBYVleEY2_qh5AjQ";
const IMG_G2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDvvirSk-Gcah8EnJ8DzbNC1bvrdmysesHGZg1psq4dsvaOlfCoMjQ2GiZ8LT8SIFl9T7ncsidqqZzLc4MiRLv4rNYtj9E41c329AM0t80kl4v3q8hv0eZoXIXPkcggFFI0xvkogbGpow4MYGI1UauXaLoL8wdRhB5Qrh8rhlOKgHeetOlFb2OScfzsvQsXGTxLKKHgoxsYopaxNsSuLSMxlhPtcwboEQJxLiAKP6xVMzUws77OtGVMKlyxmMOb_y6OOzz7tpnPsw";
const IMG_G3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8547-bcYU9DyHfYz4pTIT7WIQCfKeRG1WlvMhdAzc8nlBQhhffXVDekQC97i7SRdtw1WWG7BYOWunwe4IZ8spYDM1Wb5WL9GJMy4tbTZT2l_-dTpF3Df9eeXiTZBfJiIcnU1if24OPO1geoPVCvZCW4C67-dEQBDP5pidCue317WZebQzIIeqTf7QobH3rfkF5QEvMRRMwa2tZDjeo73-cvRzUvpTaYjYf28mTA9GTVq5WAoZJd98r3pyY6Ka3-yGxLm6hgbDkg";

const DAY_TABS = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const TIME_BLOCKS = [
  { key: "morning", label: "Morning (06:00 AM - 12:00 PM)" },
  { key: "afternoon", label: "Afternoon (12:00 PM - 06:00 PM)" },
  { key: "evening", label: "Evening (06:00 PM - 12:00 AM)" },
  { key: "lateNight", label: "Late night (12:00 AM - 06:00 AM)" },
];

function getDefaultPrice(day, blockKey) {
  if (blockKey === "morning") return 1200;
  if (blockKey === "afternoon") return 1800;
  if (blockKey === "evening") return 2200;
  return 2500;
}

function createInitialPricingState() {
  return DAY_TABS.reduce((acc, day) => {
    acc[day] = TIME_BLOCKS.reduce((slotAcc, slot) => {
      slotAcc[slot.key] = getDefaultPrice(day, slot.key);
      return slotAcc;
    }, {});
    return acc;
  }, {});
}

export default function Page() {
  const [selectedDay, setSelectedDay] = useState("Saturday");
  const [pricingByDay, setPricingByDay] = useState(createInitialPricingState);

  const handlePriceChange = (day, blockKey, value) => {
    setPricingByDay((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [blockKey]: value,
      },
    }));
  };

  return (
    <TurfAdminShell
      headerCenter={
        <div className="hidden w-full md:block">
          <h2 className={`${lexend.className} text-xl font-bold tracking-tight text-slate-900`}>Turf profile management</h2>
        </div>
      }
    >
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 space-y-8 lg:col-span-8">
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Facility gallery</h3>
                <p className="text-sm text-slate-500">Manage high-resolution images of your turf.</p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-2 text-sm font-semibold text-turf-primary transition-colors hover:bg-emerald-100"
              >
                <TurfAdminIcon name="upload" className="h-5 w-5" />
                Upload new
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="group relative aspect-square overflow-hidden rounded-lg border-2 border-turf-primary ring-2 ring-turf-primary/20">
                <Image src={IMG_G1} alt="" fill className="object-cover" sizes="(max-width:640px) 50vw, 25vw" />
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <button type="button" className="rounded-full bg-white p-2 text-slate-900 hover:text-turf-primary">
                    <TurfAdminIcon name="visibility" className="h-5 w-5" />
                  </button>
                  <button type="button" className="rounded-full bg-white p-2 text-red-600">
                    <TurfAdminIcon name="delete" className="h-5 w-5" />
                  </button>
                </div>
                <span className="absolute left-2 top-2 rounded bg-turf-primary px-2 py-0.5 text-[10px] font-bold uppercase text-white">Primary</span>
              </div>
              {[IMG_G2, IMG_G3].map((src) => (
                <div key={src.slice(-24)} className="group relative aspect-square overflow-hidden rounded-lg">
                  <Image src={src} alt="" fill className="object-cover" sizes="(max-width:640px) 50vw, 25vw" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <button type="button" className="rounded-full bg-white p-2 text-red-600">
                      <TurfAdminIcon name="delete" className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="flex aspect-square flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 text-slate-400 transition-all hover:border-turf-primary hover:text-turf-primary"
              >
                <TurfAdminIcon name="add_a_photo" className="mb-1 h-8 w-8" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Add image</span>
              </button>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className={`${lexend.className} mb-6 text-lg font-semibold text-slate-900`}>Core information</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-slate-500">Facility name</label>
                <input
                  type="text"
                  defaultValue="Pro Turf Management Center"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-turf-primary focus:ring-2 focus:ring-turf-primary-container/40"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-slate-500">Turf type</label>
                <select className="w-full cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-turf-primary-container/40">
                  <option>FIFA Quality Pro - Synthetic</option>
                  <option>Natural hybrid grass</option>
                  <option>Standard artificial turf</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-slate-500">Field size</label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="105 x 68"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 pr-16 text-sm outline-none focus:ring-2 focus:ring-turf-primary-container/40"
                  />
                  <span className="pointer-events-none absolute right-4 top-3 text-sm text-slate-400">meters</span>
                </div>
              </div>
              <div className="col-span-2">
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-slate-500">Detailed description</label>
                <textarea
                  rows={4}
                  defaultValue="Premium grade FIFA certified synthetic turf with high density infill. Features tournament-grade floodlighting (800 lux) and electronic scoring boards. Suitable for professional match play and academy training."
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-turf-primary-container/40"
                />
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <h3 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Pricing tiers</h3>
              <span className="w-fit rounded bg-amber-100 px-2 py-1 text-[10px] font-bold uppercase text-amber-700">Set price by day and time block</span>
            </div>
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {DAY_TABS.map((day) => {
                  const isSelected = day === selectedDay;
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={[
                        "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                        isSelected
                          ? "bg-turf-primary text-white shadow-sm"
                          : "border border-slate-200 bg-white text-slate-600 hover:border-turf-primary/30 hover:text-turf-primary",
                      ].join(" ")}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">{selectedDay} pricing</h4>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">4 time blocks</span>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {TIME_BLOCKS.map((slot) => (
                    <div key={`${selectedDay}-${slot.key}`} className="flex items-center justify-between gap-2 rounded-md border border-slate-200 bg-white px-3 py-2">
                      <span className="text-sm font-medium text-slate-600">{slot.label}</span>
                      <div className="flex items-center overflow-hidden rounded border border-slate-300 bg-white">
                        <span className="px-2 text-xs text-slate-400">৳</span>
                        <input
                          type="number"
                          min="0"
                          value={pricingByDay[selectedDay][slot.key]}
                          onChange={(e) => handlePriceChange(selectedDay, slot.key, e.target.value)}
                          className="w-16 border-none py-1.5 text-center text-sm font-bold outline-none focus:ring-0"
                        />
                        <span className="px-2 text-xs text-slate-400">/hr</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="col-span-12 space-y-6 lg:col-span-4">
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Facility status</h4>
                <p className="mt-1 text-[10px] uppercase tracking-tighter text-slate-500">Currently accepting bookings</p>
              </div>
              <label className="relative inline-block h-6 w-11 cursor-pointer">
                <input type="checkbox" defaultChecked className="peer sr-only" />
                <span className="absolute inset-0 rounded-full bg-slate-200 transition-colors peer-checked:bg-turf-primary" />
                <span className="absolute left-[2px] top-[2px] h-5 w-5 rounded-full border border-gray-300 bg-white transition-transform peer-checked:translate-x-5 peer-checked:border-white" />
              </label>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 text-center">
              <div>
                <p className="text-xs uppercase text-slate-400">Bookings today</p>
                <p className={`${lexend.className} text-xl font-black text-slate-900`}>12</p>
              </div>
              <div>
                <p className="text-xs uppercase text-slate-400">Availability</p>
                <p className={`${lexend.className} text-xl font-black text-turf-primary`}>85%</p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">Documents &amp; permits</h3>
              <button type="button" className="text-slate-400 transition-colors hover:text-turf-primary" aria-label="Add document">
                <TurfAdminIcon name="add_circle" className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-3">
              {[
                { icon: "description", color: "text-emerald-600", title: "Trade_License_2024.pdf", meta: "Expires: Dec 2024" },
                { icon: "verified_user", color: "text-blue-600", title: "Safety_Audit_Report.pdf", meta: "Verified: Jan 2024" },
                { icon: "security", color: "text-amber-600", title: "Insurance_Policy.pdf", meta: "Expiring soon", warn: true },
              ].map((doc) => (
                <div
                  key={doc.title}
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 transition-colors hover:border-turf-primary/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white shadow-sm">
                    <TurfAdminIcon name={doc.icon} className={`h-5 w-5 ${doc.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-bold text-slate-900">{doc.title}</p>
                    <p className={`text-[10px] uppercase ${doc.warn ? "font-bold text-red-600" : "text-slate-500"}`}>{doc.meta}</p>
                  </div>
                  <TurfAdminIcon name="download" className="h-5 w-5 shrink-0 cursor-pointer text-slate-400 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className={`${lexend.className} mb-6 flex items-center gap-2 text-sm font-bold text-slate-900`}>
              <TurfAdminIcon name="badge" className="h-5 w-5 text-slate-400" />
              Owner profile
            </h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-[10px] font-bold uppercase text-slate-500">Primary contact name</label>
                <input
                  type="text"
                  defaultValue="Alexander J. Rodriguez"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-turf-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-bold uppercase text-slate-500">Email address</label>
                <input
                  type="email"
                  defaultValue="alex@proturf.com"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-turf-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-bold uppercase text-slate-500">Phone number</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 982-1142"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-turf-primary"
                />
              </div>
              <div className="border-t border-slate-100 pt-2">
                <label className="mb-1 block text-[10px] font-bold uppercase text-slate-500">NID / Tax registration ID</label>
                <div className="flex items-center gap-2">
                  <input readOnly type="text" defaultValue="TX-991200-Z" className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm" />
                  <TurfAdminIcon name="verified" className="h-5 w-5 shrink-0 text-emerald-500" />
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className={`${lexend.className} rounded-xl border border-slate-300 bg-white py-3 text-sm font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 active:scale-95`}
            >
              Cancel changes
            </button>
            <button
              type="button"
              className={`${lexend.className} rounded-xl bg-turf-primary py-3 text-sm font-bold text-white shadow-md shadow-emerald-500/20 transition-all hover:opacity-90 active:scale-95`}
            >
              Save profile
            </button>
          </div>
        </aside>
      </div>
    </TurfAdminShell>
  );
}
