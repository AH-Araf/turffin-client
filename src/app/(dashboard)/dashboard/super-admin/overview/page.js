"use client";

import Image from "next/image";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { SuperAdminShell, SuperAdminSearchHeader, TurfAdminIcon } from "@/features/dashboard/superAdmin/components/SuperAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

const IMG_JOHN =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD2VDzYK9U8ph2D5ZBCaKD3IgoL2HvAKkuOOA6zNQZ3ZkI_EiDXPAHYCFHTXddCgNNe4lrd4fhy8yZOt92qlGD6LEOdw-EUwjugGazvSPT99gYRhrbkGpF2r2_YzwX04BCiiNoLnev2I0wBsTXJtPHvMd61Rio3gmCsvlcJ6sT0UQ3itUA40obDBT8WildEkIWZmzED7ZGoHZ9BgNp1ngRinhZ0ajSWkxv0KLgdoFgf-0uA_EYXbzEUiqCzl6kdAc6g-KuEKRPhkA";
const IMG_SARAH =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC3XPR5HAVXCTOQRjknVVC9ed1MAJZb0e5thZaerg7cSQ71zTVS9WKPNdv9-TxTnURHA0VE3TZ2DBi5VGDAYZWZTZrFgX71Vlohg8DniG1datG8FeKsGRnwL5v7kWGQiXwEgWS2H3uajftKoCyg0j7kFZe0y9I-Z-ZLTQORCpti1rfLl-QlaHzt33WNJxD70taFP6GOUxNSefzAiQVrb6KRsNdjfcxQ5R18JEkCs3NncqF2tX9m3iHucMqNQHHWd43wVqjZOjTCnA";
const IMG_BEN =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAhtkSzuOrHI3u3UMoGJmBPDcaDRSrFgSUv5PFM7o_Uc64vWTo74NU7jJXumgUIDk8x6cAtBUlCwU4R809qsX50E64dtodc7drmTRkWLN4FMyZO0EwZ-Lz6dcfkilVJa-kI1LscrzgEsEbOLC0b-7x5NHNdZ-VRrawFzV8R0xA390knntreDs8y7N1MPkT32b79gavWc5EYAxFzlPbh-uM4jSiMytQg2UsSf1MePmNS1FwBObDIlhlDqQ0sZ_3sgYizapm34eksOA";

export default function SuperAdminOverviewPage() {
  return (
    <SuperAdminShell headerCenter={<SuperAdminSearchHeader placeholder="Search facilities, users, or reports..." />}>
      <div className="mb-8">
        <h2 className={`${lexend.className} text-2xl font-bold tracking-tight text-slate-900 md:text-3xl`}>System overview</h2>
        <p className="mt-1 text-slate-600">Real-time performance metrics and global platform health.</p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex items-start justify-between">
            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
              <TurfAdminIcon name="group" className="h-5 w-5" />
            </div>
            <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">
              <TurfAdminIcon name="trending_up" className="h-3.5 w-3.5" /> 12.5%
            </span>
          </div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Total active users</p>
          <h3 className={`${lexend.className} text-2xl font-bold text-slate-900`}>24,582</h3>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex items-start justify-between">
            <div className="rounded-lg bg-sky-100 p-2 text-sky-700">
              <TurfAdminIcon name="stadium" className="h-5 w-5" />
            </div>
            <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">
              <TurfAdminIcon name="trending_up" className="h-3.5 w-3.5" /> 8.2%
            </span>
          </div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Managed turfs</p>
          <h3 className={`${lexend.className} text-2xl font-bold text-slate-900`}>1,412</h3>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex items-start justify-between">
            <div className="rounded-lg bg-turf-primary-container/30 p-2 text-emerald-800">
              <TurfAdminIcon name="payments" className="h-5 w-5" />
            </div>
            <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">
              <TurfAdminIcon name="trending_up" className="h-3.5 w-3.5" /> 24.1%
            </span>
          </div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Total revenue MTD</p>
          <h3 className={`${lexend.className} text-2xl font-bold text-slate-900`}>$482,900</h3>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b border-slate-100 p-6">
            <div>
              <h4 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Growth trend</h4>
              <p className="text-sm text-slate-600">User acquisition vs revenue growth</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800"
              >
                Last 30 days
              </button>
              <button type="button" className="rounded-lg px-3 py-1 text-xs font-semibold text-slate-500 hover:bg-slate-50">
                YTD
              </button>
            </div>
          </div>
          <div className="relative flex min-h-[280px] flex-1 flex-col justify-end p-6">
            <div className="absolute inset-x-6 inset-y-10 flex items-end gap-2">
              {[40, 55, 45, 65, 80, 70, 90, 95].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm transition-colors ${i === 7 ? "bg-turf-primary-container" : "bg-emerald-600/20 hover:bg-emerald-600/30"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <svg className="absolute inset-0 h-full w-full overflow-visible px-6 py-10" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path
                d="M0,180 Q50,140 100,150 T200,80 T300,50 T400,20"
                fill="none"
                stroke="#006d36"
                strokeWidth="3"
              />
            </svg>
            <div className="mt-4 flex justify-between border-t border-slate-100 pt-4 text-[11px] font-bold uppercase tracking-wide text-slate-500">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-6">
            <h4 className={`${lexend.className} text-lg font-semibold text-slate-900`}>System activity</h4>
          </div>
          <div className="space-y-6 p-6">
            {[
              { icon: "verified_user", tone: "emerald", title: "New facility verified", desc: "Elite Soccer Center, London has been approved.", time: "2 mins ago" },
              { icon: "gpp_maybe", tone: "red", title: "Security alert", desc: "Multiple failed login attempts from IP: 192.168.1.1", time: "15 mins ago" },
              { icon: "update", tone: "blue", title: "System backup complete", desc: "Global database backup successfully stored.", time: "1 hour ago" },
              { icon: "payments", tone: "amber", title: "Large transaction alert", desc: "Premium subscription renewal ($24k) processed.", time: "4 hours ago" },
            ].map((a) => (
              <div key={a.title} className="flex gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    a.tone === "emerald"
                      ? "bg-emerald-100 text-emerald-600"
                      : a.tone === "red"
                        ? "bg-red-100 text-red-600"
                        : a.tone === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-amber-100 text-amber-600"
                  }`}
                >
                  <TurfAdminIcon name={a.icon} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{a.title}</p>
                  <p className="mb-1 text-xs text-slate-600">{a.desc}</p>
                  <span className="text-[10px] font-bold uppercase text-slate-400">{a.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-auto border-t border-slate-100 p-4 text-center text-sm font-bold uppercase tracking-wide text-emerald-700 transition-colors hover:bg-slate-50"
          >
            View full audit log
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 p-6">
          <h4 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Recent user registrations</h4>
          <Link href="/dashboard/super-admin/user-management" className="text-sm font-bold text-emerald-700 hover:underline">
            Manage all users
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">User</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Role</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Date joined</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: "John Dorsey", email: "john.d@example.com", role: "Facility manager", status: "Active", date: "Oct 24, 2023", img: IMG_JOHN },
                { name: "Sarah Miller", email: "s.miller@outlook.com", role: "Super admin", status: "Active", date: "Oct 23, 2023", img: IMG_SARAH },
                { name: "Ben Thompson", email: "ben.t@turfmasters.co", role: "Organizer", status: "Pending", date: "Oct 22, 2023", img: IMG_BEN },
              ].map((u) => (
                <tr key={u.email} className="transition-colors hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Image src={u.img} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-slate-900">{u.name}</p>
                        <p className="text-xs text-slate-600">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800">{u.role}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-[10px] font-black uppercase ${u.status === "Active" ? "rounded bg-emerald-100 px-2 py-1 text-emerald-700" : "rounded bg-amber-100 px-2 py-1 text-amber-800"}`}
                    >
                      {u.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800">{u.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button type="button" className="p-2 text-slate-400 transition-colors hover:text-emerald-700" aria-label="More">
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
