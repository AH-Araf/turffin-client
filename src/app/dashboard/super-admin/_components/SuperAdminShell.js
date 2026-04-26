"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Inter, Lexend } from "next/font/google";
import { TurfAdminIcon } from "../../turf-admin/_components/turfAdminIcons";

export { TurfAdminIcon } from "../../turf-admin/_components/turfAdminIcons";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export const SUPER_ADMIN_AVATAR_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA4GwDJKmO_Kd3sMOe7h2xAtxnOSDvv-dQ3nQH9JrUbjaVdZo_SYwGd0F_RkK8uP4bROoCp-fShcFSxr9K18r2gsK1053U2Mf29mo629mIzNfZFRoBDojxZIYTxaatqzyNGIYXQ5aJY4T5psIHjuDRZPnRxRWRBMbybEPQTZ_WqSWTsRJ5pvS_ltBaahdEyj2dAhBykgnxt96JEHivEIJzLLlj9XVsKF2diTnVLngcR9DkcbVmXXfTOA9YikqFJtG9zh3jShCASEw";

const navLink =
  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-slate-800/50 hover:text-slate-200";
const navLinkActive = "translate-x-1 border-r-4 border-emerald-500 bg-emerald-500/10 font-semibold text-emerald-400";

function SuperAdminSidebar({ onLinkClick = () => {}, showClose, onClose }) {
  const pathname = usePathname() ?? "";
  const is = (prefix) => pathname.startsWith(prefix);
  const turfSection = is("/dashboard/super-admin/turf-management") || is("/dashboard/super-admin/turf-detailed-view");

  return (
    <>
      <div className={`relative mb-6 px-2 py-2 ${showClose ? "pr-12" : ""}`}>
        {showClose ? (
          <button
            type="button"
            className="absolute right-2 top-2 rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            aria-label="Close menu"
            onClick={onClose}
          >
            <TurfAdminIcon name="close" className="h-5 w-5" />
          </button>
        ) : null}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-turf-primary-container">
            <TurfAdminIcon name="sports_soccer" className="h-6 w-6 text-turf-on-primary-container" filled />
          </div>
          <div className="min-w-0">
            <h1 className={`${lexend.className} text-lg font-black tracking-tight text-emerald-400`}>Admin Console</h1>
            <p className={`${lexend.className} text-xs font-medium text-slate-500`}>Global Control</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-2" aria-label="Super admin navigation">
        <Link
          href="/dashboard/super-admin/overview"
          className={`${navLink} ${is("/dashboard/super-admin/overview") ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <TurfAdminIcon name="dashboard" className="h-5 w-5" />
          <span>System overview</span>
        </Link>
        <Link
          href="/dashboard/super-admin/user-management"
          className={`${navLink} ${is("/dashboard/super-admin/user-management") ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <TurfAdminIcon name="group" className="h-5 w-5" />
          <span>Users</span>
        </Link>
        <Link
          href="/dashboard/super-admin/turf-management"
          className={`${navLink} ${turfSection ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <TurfAdminIcon name="stadium" className="h-5 w-5" />
          <span>Turfs</span>
        </Link>
        <Link
          href="/dashboard/super-admin/global-booking-management"
          className={`${navLink} ${is("/dashboard/super-admin/global-booking-management") ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <TurfAdminIcon name="event_available" className="h-5 w-5" />
          <span>Bookings</span>
        </Link>
        <Link
          href="/dashboard/super-admin/package-management"
          className={`${navLink} ${is("/dashboard/super-admin/package-management") ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <TurfAdminIcon name="inventory_2" className="h-5 w-5" />
          <span>Packages</span>
        </Link>
      </nav>
      <div className="mt-auto space-y-1 border-t border-slate-800 pt-4">
        <Link
          href="/dashboard/super-admin/profile"
          className={`${navLink} ${is("/dashboard/super-admin/profile") ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <TurfAdminIcon name="account_circle" className="h-5 w-5" />
          <span>Profile</span>
        </Link>
        <button type="button" className={`${navLink} w-full text-left opacity-70`} title="Coming soon">
          <TurfAdminIcon name="settings" className="h-5 w-5" />
          <span>Settings</span>
        </button>
      </div>
    </>
  );
}

/**
 * Shared chrome for /dashboard/super-admin/* (sidebar, top bar, mobile drawer).
 */
export function SuperAdminShell({ children, headerCenter, maxWidthClass = "max-w-7xl" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() ?? "";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      className={`${inter.className} min-h-screen bg-turf-surface text-turf-on-surface antialiased`}
      style={{
        backgroundImage:
          "radial-gradient(at 0% 0%, rgba(74, 222, 128, 0.05) 0, transparent 45%), radial-gradient(at 100% 100%, rgba(0, 109, 54, 0.05) 0, transparent 45%)",
      }}
    >
      <aside
        className={`${lexend.className} fixed left-0 top-0 z-50 hidden h-screen w-[280px] flex-col border-r border-slate-800 bg-slate-900 p-4 antialiased shadow-xl lg:flex`}
        aria-label="Super admin navigation"
      >
        <SuperAdminSidebar />
      </aside>

      <header className="fixed left-0 right-0 top-0 z-40 flex flex-col shadow-sm lg:left-[280px] lg:h-16 lg:w-[calc(100%-280px)] lg:flex-row lg:items-center lg:border-b lg:border-slate-200 lg:bg-white/80 lg:px-6 lg:backdrop-blur-md">
        <div
          className={`${lexend.className} flex h-16 min-w-0 shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-slate-900 px-2 backdrop-blur-md lg:flex-1 lg:border-b-0 lg:bg-transparent lg:px-0 lg:backdrop-blur-none`}
        >
          <div className="block shrink-0 lg:hidden">
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="inline-flex shrink-0 rounded-lg pr-1 text-white transition-colors hover:bg-slate-800"
                aria-expanded={menuOpen}
                aria-controls="super-admin-drawer"
                onClick={() => setMenuOpen((o) => !o)}
              >
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
                <TurfAdminIcon name={menuOpen ? "close" : "menu"} className="h-6 w-6" />
              </button>
              <span className={`${lexend.className} truncate text-sm font-bold text-white`}>Admin Console</span>
            </div>
          </div>
          <div className="min-w-0 flex-1 lg:mx-2">{headerCenter}</div>
          <div className="flex shrink-0 items-center gap-1 divide-x divide-slate-200 md:gap-2">
            <div className="flex items-center gap-0.5 pr-2 md:pr-3">
              <button
                type="button"
                className="relative cursor-pointer rounded-full p-2 transition-colors hover:bg-slate-100 active:opacity-70"
                aria-label="Notifications"
              >
                <TurfAdminIcon name="notifications" className="h-5 w-5 text-slate-500" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
              </button>
              <button
                type="button"
                className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 active:opacity-70"
                aria-label="Help"
              >
                <TurfAdminIcon name="help_outline" className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center gap-2 pl-2 md:pl-4">
              <div className="hidden text-right lg:block">
                <p className="text-xs font-semibold text-slate-900">TurfManager Admin</p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Super administrator</p>
              </div>
              <Image
                src={SUPER_ADMIN_AVATAR_SRC}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-emerald-500/20 object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="lg:hidden" aria-hidden={!menuOpen}>
        <button
          type="button"
          tabIndex={-1}
          className={`fixed inset-x-0 bottom-0 z-55 bg-slate-950/50 lg:hidden top-[calc(env(safe-area-inset-top,0)+4rem)] ${
            menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-label="Close menu"
          aria-hidden={!menuOpen}
          onClick={() => setMenuOpen(false)}
        />
        <div
          id="super-admin-drawer"
          role="dialog"
          aria-modal={menuOpen}
          aria-hidden={!menuOpen}
          aria-labelledby="super-admin-drawer-title"
          inert={!menuOpen}
          className={`${lexend.className} fixed bottom-0 left-0 z-60 flex w-[min(280px,92vw)] flex-col overflow-y-auto border-r border-slate-800 bg-slate-900 p-4 pb-8 shadow-2xl transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none lg:hidden top-[calc(env(safe-area-inset-top,0)+4rem)] ${
            menuOpen ? "translate-x-0" : "pointer-events-none -translate-x-full"
          }`}
        >
          <p id="super-admin-drawer-title" className="sr-only">
            Super admin navigation
          </p>
          <div className="flex min-h-0 flex-1 flex-col">
            <SuperAdminSidebar onLinkClick={() => setMenuOpen(false)} showClose onClose={() => setMenuOpen(false)} />
          </div>
        </div>
      </div>

      <main className={`px-4 pb-12 pt-[calc(env(safe-area-inset-top,0)+4rem)] lg:ml-[280px] lg:px-8 lg:pt-20`}>
        <div className={`mx-auto ${maxWidthClass}`}>{children}</div>
      </main>
    </div>
  );
}

function SearchBar({ placeholder }) {
  return (
    <div className="relative w-full max-w-md">
      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
        <TurfAdminIcon name="search" className="h-4 w-4" />
      </span>
      <input
        type="search"
        placeholder={placeholder}
        className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-3 text-sm text-turf-on-surface outline-none transition-shadow focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
      />
    </div>
  );
}

export function SuperAdminSearchHeader({ placeholder = "Search facilities, users, or reports..." }) {
  return (
    <div className="hidden w-full md:block">
      <SearchBar placeholder={placeholder} />
    </div>
  );
}
