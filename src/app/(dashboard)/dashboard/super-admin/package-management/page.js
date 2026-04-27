"use client";

import Image from "next/image";
import { Lexend } from "next/font/google";
import { SuperAdminShell, SuperAdminSearchHeader, TurfAdminIcon } from "@/features/dashboard/superAdmin/components/SuperAdminShell";

const lexend = Lexend({ subsets: ["latin"] });

const B1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAtElKVp9xPQZygjU2ZlEDaCv65OFyHDkKz74iEewfWPex8hTBJb_3fJHHZngwIwdOg3aJSmeWGnaJhTPFhT94fKsKrjjvzZ63TAoQ9HC8fDIRgOIbhTKVNE6BgKX4DULDv_P1wgKGpHN6CBkLl9RpB4NlOHXN9a8LcJEY9fiYUVFGDoRLPndElFJ-tq3fbv7w1pWGWPLlBiVfJHwIQUd5xoCaXDg_1VMsvlmDB3gT3yJaF59b9Tv0qMeAdB1pdQVYtWCauYsZa8A";
const B2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKg644ubp_FjXQntvMrhX6DxwkySazNjNV2EPjIjM6SaPYO_Q8zMyC2QhRivH2iKYR_vbPv9XylinyyWVDurT6mjoEp9efayUe1QyE8NJiKBLp9SHr-Rhm-xISEyi9FYJFsWyTG5Xr8KtCd9wXgS4F7BApWqf-rE30LVl29VGoXJuUo8uS6kZ1griplhbdDfGeeGNdPFze7wiAxj-rftEz4JQcI9SFaHoUffy5eKuVFsgFW6wZ8-r81Ht90_w2p2AiKOv7e39COg";
const P1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDX6ABbMwiKfHQk4nluaFveV6chwPgBKXxRQyZnOKHz2-amSNE3_NgPFi_OwPZxuFTOsNVuMqrQWQtmZvDWQHHxP_8vAysFavBCg8d9OqHOUPuZZKcvE6oik7rYl_uIYLKjgbWbsAPXmTmSZWbTcx6et6iC2NOT8nAdxdIM6N-kRGzwlEY2SyY-JgcQiLL0ATjEp-W7CyAjEoQUN5IV_DL3edv01LdGdoyBoGLBv0fxlKjcTuACf7aZeL9BgUbvfvWA6IvpV3C9CQ";
const P2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5B0ipo67G2k5wKvYaUvYeQejhK_VgDrwLog_3q2PZ5RdLEOKRyBlR2aC5pJmELVqoz_vghkqyicos3ry9YXjsTdWHgZ_d5dUvaAlptYDF3Ml-13_FJtUueEUgt4iC_b0sGDXiM-DZhUlLPQx-svmyvYAs4AXSUJwxgmsOxv3PpMJDxnYMVa4dN-vr8zsmGwMJ-U5wsSIAQ4OO_00E-5DzA0-GaEHLB3cGmtt6Nr4bwtXJlnCfADHWoKzuWMa8swTPNgnYuYq9Gw";
const E1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC3PkduAGsGTgtu8RXKiiCvpL78_PFQGwCjSsNWm5xFDWRKyBfmbGfVgg_8i8mZl28iK5z-f79gN6GYq-kLGnG-7VriXvBM_W0ciycTUxZaCsgJjUDUjSmpvRhY8hTc3qOL7zot0HyOG5iLs7Mcr7k8Kjab4xPk0kBY7U5MFJG6uupr6TwsqK85y6zYMrsZmoHVt4A3ZF7A2rRHeJ-k7yliaxNMJ5WRka5lhhnzR21HeTm84JQwj5POGZl_gG8u8Ol6txJ4uLhiOA";

function CheckLi({ children, dark }) {
  return (
    <li className={`flex items-center gap-3 text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>
      <TurfAdminIcon name="check_circle" className={`h-5 w-5 shrink-0 ${dark ? "text-emerald-400" : "text-emerald-600"}`} filled />
      {children}
    </li>
  );
}

export default function PackageManagementPage() {
  return (
    <SuperAdminShell headerCenter={<SuperAdminSearchHeader placeholder="Search packages, tiers or coupons..." />}>
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className={`${lexend.className} text-2xl font-bold text-slate-900 md:text-3xl`}>Package management</h2>
          <p className="text-slate-600">Configure subscription tiers, offers, and global administrative policies.</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-turf-primary-container px-6 py-3 text-sm font-bold text-turf-on-primary-container shadow-sm transition-all hover:opacity-90 active:scale-[0.98]"
        >
          <TurfAdminIcon name="add" className="h-5 w-5" />
          Create new package
        </button>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-emerald-500/30 lg:col-span-4">
          <div className="border-b border-slate-100 p-6">
            <div className="mb-4 flex items-start justify-between">
              <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-600">Entry level</span>
              <TurfAdminIcon name="rocket" className="h-6 w-6 text-slate-400" />
            </div>
            <h3 className={`${lexend.className} text-xl font-semibold text-slate-900`}>Basic</h3>
            <p className={`${lexend.className} mt-2 text-3xl font-black text-emerald-700`}>
              $49<span className="text-lg font-normal text-slate-400">/mo</span>
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex -space-x-2">
                <Image src={B1} alt="" width={24} height={24} className="h-6 w-6 rounded-full border-2 border-white object-cover" />
                <Image src={B2} alt="" width={24} height={24} className="h-6 w-6 rounded-full border-2 border-white object-cover" />
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-[8px] font-bold">+142</div>
              </div>
              <span className="text-xs font-medium text-slate-600">1.2k monthly subs</span>
            </div>
          </div>
          <div className="flex-1 bg-slate-50/50 p-6">
            <ul className="space-y-4">
              <CheckLi>Up to 3 turfs</CheckLi>
              <CheckLi>Standard booking logic</CheckLi>
              <CheckLi>Basic analytics</CheckLi>
            </ul>
          </div>
          <div className="flex justify-end gap-2 border-t border-slate-100 p-4">
            <button type="button" className="p-2 text-slate-400 hover:text-emerald-700" aria-label="Edit">
              <TurfAdminIcon name="edit" className="h-5 w-5" />
            </button>
            <button type="button" className="p-2 text-slate-400 hover:text-emerald-700" aria-label="View">
              <TurfAdminIcon name="visibility" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative z-10 flex flex-col overflow-hidden rounded-xl border-2 border-emerald-600 bg-white shadow-xl shadow-emerald-500/10 lg:col-span-4 lg:scale-[1.02]">
          <div className="absolute right-0 top-0 rounded-bl-xl bg-emerald-700 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">Most popular</div>
          <div className="border-b border-emerald-100 p-6">
            <div className="mb-4 flex items-start justify-between">
              <span className="rounded bg-emerald-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-800">Professional</span>
              <TurfAdminIcon name="workspace_premium" className="h-6 w-6 text-emerald-700" filled />
            </div>
            <h3 className={`${lexend.className} text-xl font-semibold text-slate-900`}>Pro</h3>
            <p className={`${lexend.className} mt-2 text-3xl font-black text-emerald-700`}>
              $149<span className="text-lg font-normal text-slate-400">/mo</span>
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex -space-x-2">
                <Image src={P1} alt="" width={24} height={24} className="h-6 w-6 rounded-full border-2 border-white object-cover" />
                <Image src={P2} alt="" width={24} height={24} className="h-6 w-6 rounded-full border-2 border-white object-cover" />
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-[8px] font-bold text-emerald-800">+892</div>
              </div>
              <span className="text-xs font-medium text-slate-600">3.8k monthly subs</span>
            </div>
          </div>
          <div className="flex-1 bg-emerald-50/40 p-6">
            <ul className="space-y-4">
              <CheckLi>Unlimited turfs</CheckLi>
              <CheckLi>Advanced CRM integration</CheckLi>
              <CheckLi>Financial dashboards</CheckLi>
              <CheckLi>Multi-admin access</CheckLi>
            </ul>
          </div>
          <div className="flex justify-end gap-2 border-t border-emerald-100 p-4">
            <button type="button" className="rounded p-2 text-emerald-700 hover:bg-emerald-100" aria-label="Edit">
              <TurfAdminIcon name="edit" className="h-5 w-5" />
            </button>
            <button type="button" className="rounded p-2 text-emerald-700 hover:bg-emerald-100" aria-label="View">
              <TurfAdminIcon name="visibility" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-white shadow-xl transition-shadow hover:shadow-2xl lg:col-span-4">
          <div className="border-b border-white/10 p-6">
            <div className="mb-4 flex items-start justify-between">
              <span className="rounded bg-emerald-500 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Enterprise</span>
              <TurfAdminIcon name="diamond" className="h-6 w-6 text-emerald-400" filled />
            </div>
            <h3 className={`${lexend.className} text-xl font-semibold`}>Enterprise Elite</h3>
            <p className={`${lexend.className} mt-2 text-3xl font-black text-emerald-400`}>
              $499<span className="text-lg font-normal text-slate-500">/mo</span>
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex -space-x-2">
                <Image src={E1} alt="" width={24} height={24} className="h-6 w-6 rounded-full border-2 border-slate-900 object-cover" />
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-800 text-[8px] font-bold">+12</div>
              </div>
              <span className="text-xs text-slate-400">185 managed groups</span>
            </div>
          </div>
          <div className="flex-1 bg-slate-800/30 p-6">
            <ul className="space-y-4">
              <CheckLi dark>White-label platform</CheckLi>
              <CheckLi dark>API enterprise access</CheckLi>
              <CheckLi dark>Dedicated support manager</CheckLi>
            </ul>
          </div>
          <div className="flex justify-end gap-2 border-t border-white/10 p-4">
            <button type="button" className="p-2 text-slate-400 hover:text-emerald-400" aria-label="Edit">
              <TurfAdminIcon name="edit" className="h-5 w-5" />
            </button>
            <button type="button" className="p-2 text-slate-400 hover:text-emerald-400" aria-label="View">
              <TurfAdminIcon name="visibility" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white lg:col-span-8">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4">
            <h4 className={`${lexend.className} text-lg font-semibold text-slate-900`}>Active coupons &amp; offers</h4>
            <button type="button" className="rounded-md px-3 py-1.5 text-sm font-bold text-emerald-700 transition-colors hover:bg-emerald-50">
              Add coupon
            </button>
          </div>
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Coupon code</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Benefit</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                <th className="px-6 py-4 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/80">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-1 font-mono text-xs font-bold text-emerald-700">TURF20</span>
                    <span className="text-xs text-slate-400">Season opener</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">20% off all plans</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-tight text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="font-mono text-sm font-semibold">1,240</span>
                  <p className="mt-0.5 text-[10px] text-slate-400">Exp: 12 Dec 2024</p>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-1 font-mono text-xs font-bold text-emerald-700">FOUNDER</span>
                    <span className="text-xs text-slate-400">Legacy users</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">$50 flat discount</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-tight text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="font-mono text-sm font-semibold">412</span>
                  <p className="mt-0.5 text-[10px] text-slate-400">Exp: Perpetual</p>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-xs font-bold text-slate-500">BLACKFRIDAY</span>
                    <span className="text-xs text-slate-400">Annual sale</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-400">40% off (annual only)</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-tight text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    Paused
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="font-mono text-sm font-semibold text-slate-500">0</span>
                  <p className="mt-0.5 text-[10px] text-slate-400">Exp: 30 Nov 2024</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h4 className={`${lexend.className} mb-6 flex items-center gap-2 text-lg font-semibold text-slate-900`}>
              <TurfAdminIcon name="settings_suggest" className="h-5 w-5 text-emerald-700" />
              Global config
            </h4>
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">Grace period (days)</label>
                <div className="flex items-start gap-4">
                  <input type="number" defaultValue={7} className="w-20 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold focus:border-emerald-600 focus:outline-none focus:ring-0" />
                  <p className="text-xs leading-tight text-slate-600">Days allowed for payment before service suspension.</p>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">Cancellation policy</label>
                <select className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium focus:border-emerald-600 focus:outline-none focus:ring-0">
                  <option>Prorated refund (remaining days)</option>
                  <option>Immediate cut-off (no refund)</option>
                  <option>End of cycle term</option>
                </select>
              </div>
              <div className="space-y-4 border-t border-slate-100 pt-4">
                <label className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-900">Tax calculation</p>
                    <p className="text-[10px] text-slate-600">Automatic VAT/GST based on region</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                </label>
                <label className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-900">Public tier comparison</p>
                    <p className="text-[10px] text-slate-600">Show tier matrix on landing page</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                </label>
              </div>
              <button type="button" className="w-full rounded-lg bg-slate-900 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800 active:scale-[0.98]">
                Update global rules
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 p-6 text-white">
            <div className="relative z-10">
              <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-emerald-300">Platform health</p>
              <h5 className={`${lexend.className} mb-2 text-lg font-bold`}>Subscription revenue is up 14% this month.</h5>
              <p className="mb-4 text-xs leading-relaxed text-emerald-100/90">
                Consider creating a new &quot;Pro Lite&quot; package for emerging turf businesses to capture the mid-market gap.
              </p>
              <button type="button" className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold transition-all hover:bg-white/20">
                Analyze market gaps
              </button>
            </div>
            <TurfAdminIcon name="trending_up" className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 rotate-12 text-white/10 transition-transform group-hover:rotate-0" />
          </div>
        </div>
      </div>
    </SuperAdminShell>
  );
}
