"use client";

import Image from "next/image";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { SuperAdminShell, SuperAdminSearchHeader, TurfAdminIcon } from "../_components/SuperAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

const EMERALD =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuABoyzEODyaUAfRzekq0G-vREnlxz51zWTv3HxarhDqr6_r9jdgJUkJR1_N44bYoDb45wLbQpNxB7kR_lxtO2yV7--BDSD24ODV6UyTzZfiLYKfFlf75jIJ7U9wrOJThxRsT56crdoVRy_IhVUqqiOoa7TT_XGkDDEO39FVnW88jucw4Xk2ke5xVjy1BXow7nWHnkkBb3vdh9x9ZvMtJR7pQp-EobHlgLlt0GzRjOXlox-_3mZkf-dXIOv7AAcOwMvgiYquVh644Q";
const SKYLINE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA5XyIBrd3hRR70CkzRebc1N3ma_hgWTQTcuF6QvHVjLp4QCrZyZdrxI9JwGHdCnYtOd8VrTw-YymcY9uISDzQ5LHm_f436EsAOeIf9ZHY0CVO_Xno-jCAi4LrY5lEG_gPLaOiVWC_VJUbrsXdRtuzHqTbzdOy7HU_-iyubLrc0pqNmZreh46gG_RxfaRLJQpBmciQgs96gHuZGZ6I8btpxydIf06lX5_IzJ-y32IoymCQTD6JIm8-Gt4PSueNAuPRVbX19KPoV1g";
const MGR1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAsPR5keIwOJlsXfAfsg4ZfosBfznSl81ANWSLA3eZRryevFufml7OlicjSw4LbEmWEwtAd8m4_4VMbqxM56kNS9kJuw-QyM1QAAC62N3Tj2usFz3Iq-JRecD9J_vA7bTJ_5dZOwPUChj-mEp-3HtNZ3o7nz6T84-A-SaovVEU4V5Ei0uIx9jjp4M8O_LPkZwGJdkUH9Y3ugQe0bl9FJK_J7DEfSpswV51iXYMnOQcKv3iM5Efxe2SMW4yoa2QnV1txVXGw4-UaFw";
const MGR2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBUq-b19cbLCJVhOnvpFsOYCHrENIbN0OFegfhqGiEqRKYDzzvazC_qw7g4TldOBquCsv3lg2MnFRF2znvtgC616wFP9ahDhJ-NTA2VAMaYdhUR7K6XGeFsG4yQvfpz1_08bwvXANPkee0ro1D8TD-aZcOegdvFdyDlmYPK5Jfo732ga6gA4QAimUOMc1oNjNMjUUT7e6K91IlbR2P_stAvb1UEWMDV2pgqtgy3mEDPWAZyYqnQajJhqpc4giRS1uujzWe8jTRL0g";

export default function TurfManagementPage() {
  return (
    <SuperAdminShell headerCenter={<SuperAdminSearchHeader placeholder="Search facilities, managers, or IDs..." />}>
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className={`${lexend.className} mb-1 text-2xl font-bold text-slate-900 md:text-3xl`}>Turf inventory</h2>
          <p className="text-slate-600">Manage and monitor all registered sports facilities across the network.</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-800 active:scale-[0.98]"
        >
          <TurfAdminIcon name="add_circle" className="h-5 w-5" />
          Register new turf
        </button>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "Total turfs", value: "1,284", icon: "stadium", delta: "+12%", tone: "emerald" },
          { label: "Active now", value: "1,192", icon: "check_circle", tone: "blue" },
          { label: "Pending approval", value: "42", icon: "pending_actions", tone: "amber", ring: true },
          { label: "Deactivated", value: "50", icon: "cancel", tone: "slate" },
        ].map((s) => (
          <div
            key={s.label}
            className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm ${s.ring ? "ring-2 ring-emerald-500/30" : ""}`}
          >
            <div className="mb-4 flex items-start justify-between">
              <div
                className={`rounded-lg p-2 ${
                  s.tone === "emerald"
                    ? "bg-emerald-50 text-emerald-600"
                    : s.tone === "blue"
                      ? "bg-blue-50 text-blue-600"
                      : s.tone === "amber"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-slate-50 text-slate-600"
                }`}
              >
                <TurfAdminIcon name={s.icon} className="h-5 w-5" />
              </div>
              {s.delta ? <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">{s.delta}</span> : null}
            </div>
            <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">{s.label}</h4>
            <p className={`${lexend.className} text-2xl font-bold text-slate-900`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap border-b border-slate-200 px-4 sm:px-6">
          {["All turfs", "Active", "Pending approval (42)", "Deactivated"].map((t, i) => (
            <button
              key={t}
              type="button"
              className={`border-b-2 px-4 py-4 text-sm font-semibold transition-colors sm:px-6 ${
                i === 2 ? "border-emerald-500 text-emerald-600" : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Turf details</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Manager</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Type</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Status</th>
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="transition-colors hover:bg-slate-50/50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                      <Image src={EMERALD} alt="" fill className="object-cover" sizes="64px" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Emerald Arena</p>
                      <p className="flex items-center gap-1 text-xs text-slate-500">
                        <TurfAdminIcon name="location_on" className="h-3 w-3 shrink-0" />
                        Downtown Sports Hub, Sector 4
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Image src={MGR1} alt="" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Robert Vance</p>
                      <p className="text-[10px] text-slate-500">vance@turfhub.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded bg-blue-50 px-2 py-1 text-[10px] font-bold tracking-wider text-blue-700">7-A-SIDE</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex w-fit items-center gap-1.5 rounded-full bg-amber-50 px-2 py-1 text-amber-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Pending</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <button type="button" className="flex h-8 items-center gap-1 rounded bg-emerald-50 px-3 text-[11px] font-bold text-emerald-600 hover:bg-emerald-100">
                      <TurfAdminIcon name="check_circle" className="h-3.5 w-3.5" />
                      Approve
                    </button>
                    <Link
                      href="/dashboard/super-admin/turf-detailed-view"
                      className="flex h-8 w-8 items-center justify-center rounded text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                      aria-label="View turf"
                    >
                      <TurfAdminIcon name="visibility" className="h-[18px] w-[18px]" />
                    </Link>
                    <button type="button" className="flex h-8 w-8 items-center justify-center rounded text-slate-400 hover:bg-red-50 hover:text-red-600">
                      <TurfAdminIcon name="block" className="h-[18px] w-[18px]" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-50/50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                      <Image src={SKYLINE} alt="" fill className="object-cover" sizes="64px" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Skyline Pitch</p>
                      <p className="flex items-center gap-1 text-xs text-slate-500">
                        <TurfAdminIcon name="location_on" className="h-3 w-3 shrink-0" />
                        Grand Hotel Rooftop, North
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Image src={MGR2} alt="" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Elena Rodriquez</p>
                      <p className="text-[10px] text-slate-500">elena@skyline.pro</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded bg-indigo-50 px-2 py-1 text-[10px] font-bold tracking-wider text-indigo-700">5-A-SIDE</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex w-fit items-center gap-1.5 rounded-full bg-amber-50 px-2 py-1 text-amber-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Pending</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <button type="button" className="flex h-8 items-center gap-1 rounded bg-emerald-50 px-3 text-[11px] font-bold text-emerald-600 hover:bg-emerald-100">
                      <TurfAdminIcon name="check_circle" className="h-3.5 w-3.5" />
                      Approve
                    </button>
                    <Link
                      href="/dashboard/super-admin/turf-detailed-view"
                      className="flex h-8 w-8 items-center justify-center rounded text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                      aria-label="View turf"
                    >
                      <TurfAdminIcon name="visibility" className="h-[18px] w-[18px]" />
                    </Link>
                    <button type="button" className="flex h-8 w-8 items-center justify-center rounded text-slate-400 hover:bg-red-50 hover:text-red-600">
                      <TurfAdminIcon name="block" className="h-[18px] w-[18px]" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SuperAdminShell>
  );
}
