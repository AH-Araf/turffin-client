"use client";

import { useState } from "react";
import { Lexend } from "next/font/google";
import { TurfAdminIcon, TurfAdminSearchHeader, TurfAdminShell } from "@/features/dashboard/turfAdmin/components/TurfAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

const staffRows = [
  {
    id: "TA-9802",
    name: "Marcus Sterling",
    role: "Manager",
    roleTone: "bg-emerald-100 text-emerald-700",
    contact: "m.sterling@elite-turf.com",
    activity: "2 mins ago",
    access: "Full access",
    accessIcon: "verified",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7q7JaPkX2NTRjxWMFb77GJxW8Erdw_ytv002vPATdz9Uf4fmd7CnaCi2p5ndEqWezX-suAzXq8Um6majKxHHGEMRARy4RYF6bwtx6KesevQ4nJDi8T42MOwJ-WE9a1BrzHz2ZaeivJbP-1NNe4g9jYzgjhB8y6TGquNriPWq7wtxtwA-YiRdHMDeaRGRlVxB_loWLCiW8UAYYUAqNeuba3H2q8EimmScs-R6Mp1agCmxhJOmlAsVFQdfnW0mJgi67-oIl4_qBJw",
  },
  {
    id: "TA-4412",
    name: "Sarah Jenkins",
    role: "Moderator",
    roleTone: "bg-blue-100 text-blue-700",
    contact: "s.jenkins@elite-turf.com",
    activity: "4 hours ago",
    access: "Bookings only",
    accessIcon: "calendar_month",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEsAHSkt6tuCIIeklPDABmOhG_QfZpNSRtq8ghU2AXPr-e3ih1UiIISgBhtrXqze64KR9m-EmprTU87M2Cu018JbvPKVnbd3gzqfrUkueWspuqMcafUJmC-gyLQgh0ka6L11ETSP7CipuZ5DxKFADvo3Ms0mzqMhL3MrWJ0Gp29Usb1R5xxc8TGvnxpVwGQntAc9ieByFQ71zIn7gibcdp4SlMpQYGdGLsB23I9IEyTfbgqe4E4P9ddIZ2-neMIpQzPiRRQyVfjA",
  },
];

const roleCards = [
  {
    title: "Manager role",
    description: "Full control over schedules, personnel, and financial reporting.",
    icon: "verified_user",
    iconTone: "bg-emerald-400/20 text-emerald-400",
  },
  {
    title: "Moderator role",
    description: "Can manage bookings and calendars without finance privileges.",
    icon: "event_note",
    iconTone: "bg-blue-400/20 text-blue-400",
  },
];

function KPI({ icon, iconTone, label, value, hint }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className={`rounded-lg p-2 ${iconTone}`}>
          <TurfAdminIcon name={icon} className="h-6 w-6" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">{hint}</span>
      </div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className={`${lexend.className} mt-1 text-3xl font-black text-slate-900`}>{value}</p>
    </div>
  );
}

function AddStaffDrawer({ open, onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Close add staff panel"
        aria-hidden={!open}
        className={`fixed inset-0 z-60 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-70 w-full max-w-md border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="flex items-center justify-between border-b border-slate-100 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-turf-primary text-white shadow-lg shadow-turf-primary/20">
                <TurfAdminIcon name="person_add" className="h-6 w-6" />
              </div>
              <div>
                <h3 className={`${lexend.className} text-lg font-bold text-slate-900`}>Add new staff</h3>
                <p className="text-sm text-slate-500">Create a role-based account for your team.</p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-700"
              onClick={onClose}
            >
              <TurfAdminIcon name="close" className="h-5 w-5" />
            </button>
          </div>

          <form className="flex-1 space-y-5 p-6">
            <div>
              <label htmlFor="full-name" className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Full name
              </label>
              <input
                id="full-name"
                type="text"
                placeholder="e.g. Robert Smith"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-turf-primary focus:ring-2 focus:ring-turf-primary/30"
              />
            </div>
            <div>
              <label htmlFor="work-email" className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Email address
              </label>
              <input
                id="work-email"
                type="email"
                placeholder="r.smith@elite-turf.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-turf-primary focus:ring-2 focus:ring-turf-primary/30"
              />
            </div>
            <div>
              <label htmlFor="new-password" className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Password
              </label>
              <div className="relative">
                <input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-turf-primary focus:ring-2 focus:ring-turf-primary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                >
                  <TurfAdminIcon name={showPassword ? "visibility" : "visibility"} className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="role" className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Role
              </label>
              <div className="relative">
                <select
                  id="role"
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-sm font-medium outline-none transition-all focus:border-turf-primary focus:ring-2 focus:ring-turf-primary/30"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  <option value="manager">Manager (Full access)</option>
                  <option value="moderator">Moderator (Limited access)</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <TurfAdminIcon name="keyboard_arrow_down" className="h-4 w-4" />
                </span>
              </div>
            </div>
          </form>

          <div className="border-t border-slate-100 bg-slate-50/50 p-6">
            <button
              type="button"
              className={`${lexend.className} w-full rounded-xl bg-slate-900 py-4 text-sm font-bold text-white transition hover:bg-black active:scale-[0.98]`}
            >
              Create staff account
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function Page() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <TurfAdminShell headerCenter={<TurfAdminSearchHeader placeholder="Search team members..." />}>
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className={`${lexend.className} text-2xl font-semibold text-slate-900 md:text-3xl`}>Organization team</h2>
            <p className="text-slate-600">Manage administrative access and role permissions.</p>
          </div>
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className={`${lexend.className} inline-flex items-center gap-2 rounded-lg bg-turf-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90`}
          >
            <TurfAdminIcon name="person_add" className="h-4 w-4" />
            Add member
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <KPI icon="groups" iconTone="bg-slate-100 text-slate-600" label="Total members" value="42" hint="+12%" />
          <KPI
            icon="settings"
            iconTone="bg-emerald-50 text-emerald-600"
            label="Active managers"
            value="08"
            hint="Active seats"
          />
          <KPI icon="security" iconTone="bg-blue-50 text-blue-600" label="Active moderators" value="15" hint="Limited access" />
        </div>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 px-6 py-4">
            <h3 className={`${lexend.className} text-lg font-bold text-slate-900`}>Active personnel</h3>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-turf-primary/10 px-3 py-2 text-xs font-bold text-turf-primary transition-colors hover:bg-turf-primary/20"
              >
                <TurfAdminIcon name="add_circle" className="h-4 w-4" />
                Add staff
              </button>
              <button type="button" className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                Filter
              </button>
              <button type="button" className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                Export CSV
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-slate-50 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                <tr>
                  <th className="px-6 py-3">Name / identity</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3">Contact</th>
                  <th className="px-6 py-3">Last activity</th>
                  <th className="px-6 py-3">Access level</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {staffRows.map((row) => (
                  <tr key={row.id} className="group transition-colors hover:bg-slate-50/80">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <img src={row.avatar} alt={row.name} className="h-8 w-8 rounded-full object-cover" width={32} height={32} />
                        <div>
                          <p className={`${lexend.className} text-sm font-bold leading-tight text-slate-900`}>{row.name}</p>
                          <p className="text-[10px] text-slate-500">ID: {row.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${row.roleTone}`}>{row.role}</span>
                    </td>
                    <td className="px-6 py-3 text-xs text-slate-600">{row.contact}</td>
                    <td className="px-6 py-3 text-xs whitespace-nowrap text-slate-500">{row.activity}</td>
                    <td className="px-6 py-3">
                      <span className="flex items-center gap-1 text-xs font-medium text-slate-700">
                        <TurfAdminIcon
                          name={row.accessIcon}
                          className={`h-4 w-4 ${row.accessIcon === "verified" ? "text-emerald-500" : "text-slate-400"}`}
                        />
                        {row.access}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-right">
                      <div className="inline-flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                        <button type="button" className="rounded-md p-1.5 text-slate-400 transition-all hover:bg-emerald-50 hover:text-emerald-600">
                          <TurfAdminIcon name="edit" className="h-4 w-4" />
                        </button>
                        <button type="button" className="rounded-md p-1.5 text-slate-400 transition-all hover:bg-red-50 hover:text-red-600">
                          <TurfAdminIcon name="delete" className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <section className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-white">
            <div className="relative z-10">
              <h4 className={`${lexend.className} mb-2 text-xl font-bold`}>Access guidelines</h4>
              <p className="mb-6 max-w-sm text-sm text-slate-400">
                Keep role assignment tight for better security while enabling smooth daily operations.
              </p>
              <div className="space-y-4">
                {roleCards.map((role) => (
                  <div key={role.title} className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${role.iconTone}`}>
                      <TurfAdminIcon name={role.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{role.title}</p>
                      <p className="text-xs text-slate-500">{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <TurfAdminIcon name="security" className="h-44 w-44" />
            </div>
          </section>

          <section className="flex flex-col items-center justify-center rounded-2xl border-2 border-turf-primary-container bg-turf-primary-container/10 p-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-turf-primary text-white">
              <TurfAdminIcon name="mail" className="h-8 w-8" />
            </div>
            <h4 className={`${lexend.className} mb-2 text-xl font-bold text-slate-900`}>Bulk invite staff</h4>
            <p className="mb-6 max-w-xs text-sm text-slate-600">
              Need to onboard a whole department? Use a secure invite link and let them complete onboarding directly.
            </p>
            <button type="button" className={`${lexend.className} rounded-xl bg-slate-900 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-black`}>
              Send invite link
            </button>
          </section>
        </div>
      </div>

      <AddStaffDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </TurfAdminShell>
  );
}
