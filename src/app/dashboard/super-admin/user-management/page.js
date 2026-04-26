"use client";

import Image from "next/image";
import { Lexend } from "next/font/google";
import { SuperAdminShell, SuperAdminSearchHeader, TurfAdminIcon } from "../_components/SuperAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

const U1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCjT6kmnXbuG33QtGkX1M4UHUBepc5Xox1YRmgMrcQwOEGLdzQzc-vFAPolT_wQaNjm6tPfENEs9FDOg7TcELOMaXzCjLa--Y-TkgNuNtEr_XZ-ng6fwPB9wYSHcjsIFOZcaPwXXSiMQFNU3B5o3gJghZgqJdWiKpZ3QN7_hg81yTpSQ03hcrRwd_gduuaN5kmFfaFWNv4NfN-HbseoO9obpXbTvtBa45HL49oTvrSxn2cJlEWhZ5HKUQcMLnJ7bC_EF2yqCQX7ow";
const U2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAMSwAjYMbqKwWcCV0qwagRL5l-68K7EuGWqKApIgxpHOjp2bQrc_2aSOEOEH-4dIfaiOufjrcjLnRhTo85nuldfAUpewlJqMLTwtuu-gPhYqUccWD2VHuhqoSoIWqrFxvTn15nff6dFX6VmV7g65VNZ2FL1GS12rMYtsZvQ6CiRHdTcdKW_Opb3NW67Jqi1hspa4urFJZ2P8-vgQwaTJFB7qFPsTA1Kbzk3vkJf_HfWEKCvnyRbX9y4xehUq0rzuXwcmDkuqJ62g";

export default function UserManagementPage() {
  return (
    <SuperAdminShell headerCenter={<SuperAdminSearchHeader placeholder="Search users, roles, or facilities..." />}>
      <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h1 className={`${lexend.className} mb-1 text-2xl font-bold text-slate-900 md:text-3xl`}>User management</h1>
          <p className="text-slate-600">Control platform access, roles, and user account statuses globally.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <TurfAdminIcon name="file_download" className="h-4 w-4" />
            Export list
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            <TurfAdminIcon name="person_add" className="h-4 w-4" />
            Invite new user
          </button>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Filter by:</span>
        <select className="rounded-lg border border-slate-200 bg-slate-50 py-2 pl-3 pr-8 text-sm focus:border-emerald-600 focus:ring-emerald-600">
          <option>All roles</option>
          <option>Super admin</option>
          <option>Turf admin</option>
          <option>User</option>
        </select>
        <select className="rounded-lg border border-slate-200 bg-slate-50 py-2 pl-3 pr-8 text-sm focus:border-emerald-600 focus:ring-emerald-600">
          <option>All status</option>
          <option>Active</option>
          <option>Blocked</option>
          <option>Pending</option>
        </select>
        <div className="hidden flex-1 md:block" />
        <div className="flex w-full gap-1 rounded-lg bg-slate-100 p-1 md:w-auto">
          <button type="button" className="rounded-md bg-white px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-sm">
            All (1,284)
          </button>
          <button type="button" className="rounded-md px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700">
            Admins (42)
          </button>
          <button type="button" className="rounded-md px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700">
            Blocked (12)
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-6 py-4">
                <input type="checkbox" className="rounded border-slate-300" aria-label="Select all" />
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">User details</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Role</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Last login</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="transition-colors hover:bg-slate-50">
              <td className="px-6 py-4">
                <input type="checkbox" className="rounded border-slate-300" aria-label="Select row" />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <Image src={U1} alt="" width={40} height={40} className="h-10 w-10 rounded-full border border-slate-200 object-cover" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Marcus Thompson</p>
                    <p className="text-xs text-slate-500">marcus.t@field.com</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="rounded bg-slate-100 px-2 py-1 text-xs font-bold text-slate-700">Super admin</span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">2 mins ago</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-800">Active</span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-1">
                  <button type="button" className="p-1.5 text-slate-400 hover:text-emerald-700" aria-label="Edit">
                    <TurfAdminIcon name="edit" className="h-5 w-5" />
                  </button>
                  <button type="button" className="p-1.5 text-slate-400 hover:text-red-600" aria-label="Block">
                    <TurfAdminIcon name="block" className="h-5 w-5" />
                  </button>
                  <button type="button" className="p-1.5 text-slate-400 hover:text-red-600" aria-label="Delete">
                    <TurfAdminIcon name="delete" className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="transition-colors hover:bg-slate-50">
              <td className="px-6 py-4">
                <input type="checkbox" className="rounded border-slate-300" aria-label="Select row" />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <Image src={U2} alt="" width={40} height={40} className="h-10 w-10 rounded-full border border-slate-200 object-cover" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Sarah Jenkins</p>
                    <p className="text-xs text-slate-500">s.jenkins@turf.io</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="rounded bg-slate-100 px-2 py-1 text-xs font-bold text-slate-700">Turf admin</span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">Yesterday</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-800">Active</span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-1">
                  <button type="button" className="p-1.5 text-slate-400 hover:text-emerald-700" aria-label="Edit">
                    <TurfAdminIcon name="edit" className="h-5 w-5" />
                  </button>
                  <button type="button" className="p-1.5 text-slate-400 hover:text-red-600" aria-label="Block">
                    <TurfAdminIcon name="block" className="h-5 w-5" />
                  </button>
                  <button type="button" className="p-1.5 text-slate-400 hover:text-red-600" aria-label="Delete">
                    <TurfAdminIcon name="delete" className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SuperAdminShell>
  );
}
