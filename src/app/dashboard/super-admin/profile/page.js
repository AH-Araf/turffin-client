"use client";

import Image from "next/image";
import { Lexend } from "next/font/google";
import { SuperAdminShell, SuperAdminSearchHeader, TurfAdminIcon } from "../_components/SuperAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

const IMG_LARGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCaCgahAFVP5EzhOwazjI06tukhhwQI_qHLoN28RByaAOn_TZ1iSuYRMDVSh1W98fehZQztBSVaQayfRFUD7U8UjfRGSxuvggKuQ3FMkEYO6Ic2XzYTwZ04jqe4oDKlo00RHBX8lUa-1bPAfzeYQqudYl89McRWzlWwxN-7XayX_7GvySlU1pHNzsttGwfmDbzLndpKQE-jWrld-8Fqic3oaSCos0c-cEDZg2HoyuK7NnMMJjHHNJnnUbC94b30k_JnC2ybj_VONg";

export default function SuperAdminProfilePage() {
  return (
    <SuperAdminShell maxWidthClass="max-w-5xl" headerCenter={<SuperAdminSearchHeader placeholder="Search system logs, users, or bookings..." />}>
      <div className="mb-8">
        <h2 className={`${lexend.className} text-2xl font-bold text-slate-900 md:text-3xl`}>Profile management</h2>
        <p className="mt-1 text-slate-600">Update your administrative credentials and security preferences.</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 mb-2 flex flex-col items-center justify-between gap-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4 sm:flex-row sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
              <TurfAdminIcon name="verified_user" className="h-6 w-6" filled />
            </div>
            <div>
              <p className={`${lexend.className} text-base font-bold text-emerald-900`}>Two-factor authentication: Active</p>
              <p className="text-sm text-emerald-800/90">Your account is secured with biometric and hardware keys.</p>
            </div>
          </div>
          <button
            type="button"
            className="rounded-lg border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-800 transition-colors hover:bg-emerald-100"
          >
            Manage keys
          </button>
        </div>

        <div className="col-span-12 space-y-6 lg:col-span-7">
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Account details</h3>
              <TurfAdminIcon name="person_edit" className="h-6 w-6 text-slate-300" />
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Full name</label>
                  <input readOnly className="w-full rounded-lg border border-slate-200 px-4 py-2 text-sm outline-none focus:border-turf-primary-container focus:ring-4 focus:ring-emerald-500/10" defaultValue="Super Admin" />
                </div>
                <div>
                  <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Display name</label>
                  <input readOnly className="w-full rounded-lg border border-slate-200 px-4 py-2 text-sm outline-none focus:border-turf-primary-container focus:ring-4 focus:ring-emerald-500/10" defaultValue="Root-Master-01" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Email address</label>
                <input readOnly className="w-full rounded-lg border border-slate-200 px-4 py-2 text-sm outline-none focus:border-turf-primary-container focus:ring-4 focus:ring-emerald-500/10" type="email" defaultValue="admin@turfmanager.io" />
              </div>
              <div className="flex justify-end pt-2">
                <button type="submit" className="rounded-lg bg-turf-primary-container px-6 py-2 text-sm font-bold text-turf-on-primary-container transition-opacity hover:opacity-90 active:scale-[0.98]">
                  Update info
                </button>
              </div>
            </form>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Security credentials</h3>
              <TurfAdminIcon name="lock_reset" className="h-6 w-6 text-slate-300" />
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Current password</label>
                <input className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:border-turf-primary-container focus:ring-4 focus:ring-emerald-500/10" type="password" placeholder="••••••••••••" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">New password</label>
                  <input className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:border-turf-primary-container focus:ring-4 focus:ring-emerald-500/10" type="password" placeholder="Min. 12 chars" />
                </div>
                <div>
                  <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">Confirm new password</label>
                  <input className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:border-turf-primary-container focus:ring-4 focus:ring-emerald-500/10" type="password" placeholder="Repeat password" />
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button type="submit" className="rounded-lg border border-slate-600 px-6 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50">
                  Change password
                </button>
              </div>
            </form>
          </section>
        </div>

        <div className="col-span-12 space-y-6 lg:col-span-5">
          <section className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <h3 className={`${lexend.className} mb-6 text-left text-lg font-semibold text-slate-900`}>Profile picture</h3>
            <div className="group relative mb-4 inline-block">
              <Image src={IMG_LARGE} alt="" width={128} height={128} className="h-32 w-32 rounded-full border-4 border-slate-100 object-cover" />
              <label className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <TurfAdminIcon name="photo_camera" className="h-8 w-8 text-white" />
                <input className="hidden" type="file" />
              </label>
            </div>
            <p className="mb-4 text-left text-sm text-slate-600">Recommended: Square image, minimum 400×400px.</p>
            <button type="button" className="w-full rounded-lg border-2 border-dashed border-slate-200 py-2 text-xs font-bold uppercase tracking-wide text-slate-500 transition-colors hover:border-emerald-400 hover:text-emerald-700">
              Upload new image
            </button>
          </section>

          <section className="rounded-xl border-2 border-red-100 bg-red-50/50 p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <TurfAdminIcon name="report_problem" className="h-6 w-6 text-red-700" />
              <h3 className={`${lexend.className} text-lg font-semibold text-red-800`}>Danger zone</h3>
            </div>
            <p className="mb-6 text-sm text-slate-700">
              Deactivating your account will immediately revoke your access to the global administrative dashboard. This action is irreversible without root intervention.
            </p>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-100 py-3 text-sm font-bold text-red-900 transition-colors hover:bg-red-600 hover:text-white"
            >
              <TurfAdminIcon name="person_off" className="h-5 w-5" />
              Deactivate super admin account
            </button>
          </section>

          <section className="rounded-xl bg-slate-900 p-6 text-white shadow-xl">
            <h3 className={`${lexend.className} mb-4 text-lg font-semibold text-emerald-400`}>Session info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Last login</span>
                <span>Today, 09:42 AM</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">IP address</span>
                <span>192.168.1.105</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Location</span>
                <span>Singapore, SG</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </SuperAdminShell>
  );
}
