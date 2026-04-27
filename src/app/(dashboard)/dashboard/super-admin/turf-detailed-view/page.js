"use client";

import Image from "next/image";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { SuperAdminShell, TurfAdminIcon } from "@/features/dashboard/superAdmin/components/SuperAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

const HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuABoyzEODyaUAfRzekq0G-vREnlxz51zWTv3HxarhDqr6_r9jdgJUkJR1_N44bYoDb45wLbQpNxB7kR_lxtO2yV7--BDSD24ODV6UyTzZfiLYKfFlf75jIJ7U9wrOJThxRsT56crdoVRy_IhVUqqiOoa7TT_XGkDDEO39FVnW88jucw4Xk2ke5xVjy1BXow7nWHnkkBb3vdh9x9ZvMtJR7pQp-EobHlgLlt0GzRjOXlox-_3mZkf-dXIOv7AAcOwMvgiYquVh644Q";
const U1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDj1C_ggUl9r56EjMNZwVzbn2NLMZV9jNFlqK0GDupTTxW5k--xGHY6Z2yIbbj1YOVKXMCJycjY-BUvSU46PFBHgqYDtvA6yZEGa-H9Fk3CQdupqfwJkQOXAkh3pK60JrNEjPzQxhmRwaMxGt8guxzp56Se5LLLmQ84APi2zsCi3ZFZl6NLkKBL4E8ySb7Cn0MJWps_XtACgHP3CdJNbaLFhCVyjG_C5PTbMSa9RmIL4fBQnSK1f6QhF1C2zPFdJ8qg9WADy3ljOA";
const U2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCRlSMFcroAE1OrcTvIAc67eLT74bqUMLxrcLeFVu1DiGyQChI01BUEsJ5NACnGAbRqjnkJpAusXmSV9KtlckU57QGqlehzS10kV_b6x0s6EyapPzsS7MjIfLu_d6wkx7DYxPeRpOVDno-dF_7dEyQK063HyOIN0Udvli27VSgQAC2joZNgUd377ddVWO_4P3XONX3L_cgBLQ97yzN0jOZGo-n_oSIB0C0Zv-u2maGlzNesKSo8tN9Ird1xuDNimaCwbYSzc2wt6g";
const U3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCF-4pEK39HX40wKycSBFZGas5TFyrmWivbTYnDJN5hpfEZe8ICtctP6zFFp7jL1SmE0gAjOV8tMLKMc8Dh9MjwnYV4-D8PzwSLXl6kwlU6NTC5MFbMj5xoxP2sehiYkRvDjVd8-vo7oMrqsPPvxy3utxD1zTwuo-j4wNErMc2n69uzhMckG7itVPUjl_SUP-gwW2gWfj8OQoDbziYuqzBzbd8JjIApV38WSRfASG8N9X-vznIYkRydL4hnFZ7D1ZBi3MbHSJKMxA";
const OWNER =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBbSFVE0bYij0bEsmgp0N1KTmMIZ5jC-nXxxTdhWCzI3zO6PWPd3TACz1SreXyL3QcY_lgHmzGpGgpVCtUuXiK2Fpm7iCXG_s_WETfxecHjq0IiSHJwd6MmhoL2opKDPRH4MLQ2zo3rt67s9z3--MglfkqxAqvffRD1lged9n9YGVl_jG5XFHnyzc7YUq-6YFBkti9ZuTlzys6sGZkx8QawqwTVrHC34pIsxTEeW8D2rZ3uR2iPa3U7-uKzar9Wwio67gsix2Qz9w";
const MAP =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBcqfwVkff9Urwo8mT-MXGJrXRtsuQOhvHupCxSx1hx7dxhb_ggtaXUCAKSucboKdFE67rUaRjP2FAolHE5uMQbHuvtpHTR9NDjXthEKKV9cTPwOheDo2SKgUrRPWSnujK_OYkO7CVT_UpFdkzHx4hpIvntpDbBzDWJIoJMVfpYZw-oowFZi8QbYKtEcU4LKnBc0hIuDawF1J9VyfcFiKBMEq3no0bUairaCTd7Czl3h2TGZUVb4as6b3IWL4htv8FkLuGqrhG7Qw";

function BreadcrumbHeader() {
  return (
    <div className="hidden min-w-0 items-center gap-2 text-sm text-slate-500 md:flex">
      <Link href="/dashboard/super-admin/turf-management" className="hover:text-emerald-700">
        Turfs
      </Link>
      <TurfAdminIcon name="chevron_right" className="h-4 w-4 shrink-0 text-slate-400" />
      <span className="truncate font-semibold text-slate-900">Emerald Arena</span>
    </div>
  );
}

export default function TurfDetailedViewPage() {
  return (
    <SuperAdminShell headerCenter={<BreadcrumbHeader />}>
      <div className="relative mb-8 overflow-hidden rounded-2xl border border-emerald-900/20 shadow-lg">
        <div className="relative h-48 w-full sm:h-56 md:h-64">
          <Image src={HERO} alt="" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 896px" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-emerald-300">Facility preview</p>
          <h1 className={`${lexend.className} text-2xl font-bold md:text-4xl`}>Emerald Arena</h1>
        </div>
      </div>

      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className={`${lexend.className} text-2xl font-bold text-slate-900 md:hidden`}>Emerald Arena</h2>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="rounded bg-emerald-100 px-2 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">Active</span>
            <span className="flex items-center gap-1 text-sm text-slate-600">
              <TurfAdminIcon name="location_on" className="h-4 w-4 text-slate-500" />
              Austin, Texas
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-50">
            <TurfAdminIcon name="edit" className="h-5 w-5" />
            Edit details
          </button>
          <button type="button" className="rounded-lg bg-emerald-700 px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-800">
            Generate report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Total bookings</p>
                <h3 className={`${lexend.className} text-2xl font-bold text-slate-900`}>1,284</h3>
                <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-700">
                  <TurfAdminIcon name="trending_up" className="h-3 w-3" /> +12% this month
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <TurfAdminIcon name="event_note" className="h-6 w-6" filled />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Total revenue</p>
                <h3 className={`${lexend.className} text-2xl font-bold text-slate-900`}>$42,500</h3>
                <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-700">
                  <TurfAdminIcon name="trending_up" className="h-3 w-3" /> +8% this month
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <TurfAdminIcon name="payments" className="h-6 w-6" filled />
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <h4 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Recent bookings</h4>
              <button type="button" className="text-sm font-semibold text-emerald-700 hover:underline">
                View all
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-slate-100 bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-xs font-semibold uppercase text-slate-500">User</th>
                    <th className="px-6 py-3 text-xs font-semibold uppercase text-slate-500">Date &amp; time</th>
                    <th className="px-6 py-3 text-xs font-semibold uppercase text-slate-500">Amount</th>
                    <th className="px-6 py-3 text-xs font-semibold uppercase text-slate-500">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-semibold uppercase text-slate-500">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { user: "Marcus Wright", img: U1, d: "Oct 24, 2023", t: "18:00 - 19:30", amt: "$120.00", st: "CONFIRMED", stc: "bg-emerald-100 text-emerald-700" },
                    { user: "Sarah Jenkins", img: U2, d: "Oct 24, 2023", t: "20:00 - 21:00", amt: "$85.00", st: "PENDING", stc: "bg-blue-100 text-blue-700" },
                    { user: "David Miller", img: U3, d: "Oct 23, 2023", t: "16:00 - 17:00", amt: "$85.00", st: "CANCELLED", stc: "bg-red-100 text-red-800" },
                  ].map((r) => (
                    <tr key={r.user} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Image src={r.img} alt="" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
                          <span className="text-sm font-medium text-slate-900">{r.user}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-900">{r.d}</div>
                        <div className="text-xs text-slate-500">{r.t}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-900">{r.amt}</td>
                      <td className="px-6 py-4">
                        <span className={`rounded px-2 py-1 text-[10px] font-bold ${r.stc}`}>{r.st}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button type="button" className="text-slate-400 hover:text-slate-600" aria-label="More">
                          <TurfAdminIcon name="more_vert" className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className={`${lexend.className} mb-4 text-lg font-semibold text-slate-900`}>Facility description</h4>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                Premium FIFA-grade synthetic turf field designed for professional football and community matches. Features high-intensity LED floodlighting for night play and professional goal posts.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <TurfAdminIcon name="aspect_ratio" className="h-5 w-5 text-emerald-700" />
                  100×60 meters
                </div>
                <div className="flex items-center gap-2">
                  <TurfAdminIcon name="groups" className="h-5 w-5 text-emerald-700" />
                  11v11 capacity
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className={`${lexend.className} mb-4 text-lg font-semibold text-slate-900`}>Amenities</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  ["shower", "Showers"],
                  ["local_parking", "Parking"],
                  ["lightbulb", "Night lights"],
                  ["coffee", "Cafe area"],
                  ["meeting_room", "Lockers"],
                ].map(([icon, label]) => (
                  <span key={label} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
                    <TurfAdminIcon name={icon} className="h-4 w-4 text-slate-600" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:col-span-4">
          <div className="rounded-xl bg-slate-900 p-6 text-white shadow-xl">
            <h4 className={`${lexend.className} mb-6 text-lg font-semibold`}>Quick actions</h4>
            <div className="space-y-4">
              <button type="button" className="group flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 text-left transition-colors hover:bg-white/10">
                <div className="flex items-center gap-3">
                  <TurfAdminIcon name="pause_circle" className="h-6 w-6 text-red-400" />
                  <div>
                    <p className="text-sm font-bold">Pause bookings</p>
                    <p className="text-xs text-slate-400">Suspend public availability</p>
                  </div>
                </div>
                <TurfAdminIcon name="chevron_right" className="h-5 w-5 text-slate-500 group-hover:text-white" />
              </button>
              <button type="button" className="group flex w-full items-center justify-between rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-left transition-colors hover:bg-emerald-500/20">
                <div className="flex items-center gap-3">
                  <TurfAdminIcon name="autorenew" className="h-6 w-6 text-emerald-400" />
                  <div>
                    <p className="text-sm font-bold text-emerald-300">Renew subscription</p>
                    <p className="text-xs text-emerald-400/80">Upgrade facility package</p>
                  </div>
                </div>
                <TurfAdminIcon name="chevron_right" className="h-5 w-5 text-emerald-400 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className={`${lexend.className} mb-6 text-lg font-semibold text-slate-900`}>Facility owner</h4>
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-200">
                <Image src={OWNER} alt="" fill className="object-cover" sizes="64px" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">Robert Sanchez</p>
                <p className="text-sm text-slate-500">Elite Turf Management LLC</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
                <TurfAdminIcon name="mail" className="h-5 w-5 text-slate-400" />
                robert@eliteturf.com
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
                <TurfAdminIcon name="call" className="h-5 w-5 text-slate-400" />
                +1 (512) 555-0198
              </div>
            </div>
            <button type="button" className="mt-6 w-full rounded-lg border border-slate-200 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50">
              Message owner
            </button>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-48 bg-slate-100">
              <Image src={MAP} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 400px" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-8 w-8 animate-bounce items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg">
                  <TurfAdminIcon name="location_on" className="h-4 w-4 text-white" filled />
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-bold text-slate-900">Emerald Arena South</p>
              <p className="text-xs text-slate-500">2100 Sports Blvd, Suite 400, Austin, TX 78701</p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        <Link href="/dashboard/super-admin/turf-management" className="font-semibold text-emerald-700 hover:underline">
          ← Back to turf inventory
        </Link>
      </p>
    </SuperAdminShell>
  );
}
