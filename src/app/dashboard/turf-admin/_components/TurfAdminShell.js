"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Inter, Lexend } from "next/font/google";
import { TurfAdminIcon } from "./turfAdminIcons";

export { TurfAdminIcon } from "./turfAdminIcons";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export const TURF_ADMIN_AVATAR_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDWfb_FQr01yW-z1gDjNn8uszyNSfteQhp8pXrL3Z-RydYmbEGriK4n3e88S1Mv1QoNc47vlVRXyD-4j9yq8yh4ubpDbCyn4fh97Hfr3QLb9-Y-OO4JxbYaP49SkCJL941Lvg0sl_lySvIJDkoyCl3YsqyQxI7ahaLFl5EdJje7A2E4YOLvyAb5MwOadAJjnxvlDOoSjSkyS0F7qlS8dk8JnRque3bdLNuzUtq4wnOiBgZgz7Or4GH9dQ5H3fTDi86JznrQMeKEiA";

const navLink =
  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-slate-800/50 hover:text-slate-200";
const navLinkActive = "translate-x-1 border-r-4 border-emerald-500 bg-emerald-500/10 font-semibold text-emerald-400";

function TurfAdminSidebar({ onLinkClick = () => {}, showClose, onClose }) {
  const pathname = usePathname() ?? "";
  const is = (prefix) => pathname.startsWith(prefix);

  return (
    <>
      <div className={`relative mb-6 px-4 py-2 ${showClose ? "pr-12" : ""}`}>
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
        <h1 className={`${lexend.className} text-2xl font-black tracking-tighter text-white`}>TurfAdmin</h1>
        <p className="mt-1 text-xs text-emerald-400">Facility admin</p>
      </div>
      <nav className="flex-1 space-y-1 px-2" aria-label="Turf admin navigation">
        <Link
          href="/dashboard/turf-admin/overview"
          className={`${navLink} ${is("/dashboard/turf-admin/overview") ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <TurfAdminIcon name="dashboard" className="h-5 w-5" />
          <span>Overview</span>
        </Link>
        <Link
          href="/dashboard/turf-admin/profile"
          className={`${navLink} ${is("/dashboard/turf-admin/profile") ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <TurfAdminIcon name="stadium" className="h-5 w-5" />
          <span>Turf profile</span>
        </Link>
        <Link
          href="/dashboard/turf-admin/booking-requests"
          className={`${navLink} ${is("/dashboard/turf-admin/booking-requests") ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <TurfAdminIcon name="event_upcoming" className="h-5 w-5" />
          <span>Booking requests</span>
        </Link>
        <Link
          href="/dashboard/turf-admin/calendar"
          className={`${navLink} ${is("/dashboard/turf-admin/calendar") ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <TurfAdminIcon name="calendar_today" className="h-5 w-5" />
          <span>Calendar</span>
        </Link>
        <Link
          href="/dashboard/turf-admin/analytics"
          className={`${navLink} ${is("/dashboard/turf-admin/analytics") ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <TurfAdminIcon name="analytics" className="h-5 w-5" />
          <span>Analytics</span>
        </Link>
      </nav>
      <div className="mt-auto space-y-3 border-t border-slate-800 pt-4">
        <Link
          href="/browse-turf"
          onClick={onLinkClick}
          className={`${lexend.className} flex w-full items-center justify-center gap-2 rounded-lg bg-turf-primary-container py-3 text-sm font-bold text-turf-on-primary-container transition-all hover:opacity-90 active:scale-[0.98]`}
        >
          <TurfAdminIcon name="add" className="h-5 w-5" />
          New booking
        </Link>
        <div className="space-y-1">
          <button
            type="button"
            className={`${navLink} w-full text-left opacity-70`}
            title="Coming soon"
          >
            <TurfAdminIcon name="settings" className="h-5 w-5" />
            <span>Settings</span>
          </button>
          <Link href="/support" className={navLink} onClick={onLinkClick}>
            <TurfAdminIcon name="help" className="h-5 w-5" />
            <span>Support</span>
          </Link>
        </div>
      </div>
    </>
  );
}

/**
 * Shared chrome for /dashboard/turf-admin/* (sidebar, top bar, mobile drawer).
 */
export function TurfAdminShell({ children, headerCenter, maxWidthClass = "max-w-7xl" }) {
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
        aria-label="Turf admin navigation"
      >
        <TurfAdminSidebar />
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
                aria-controls="turf-admin-drawer"
                onClick={() => setMenuOpen((o) => !o)}
              >
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
                <TurfAdminIcon name={menuOpen ? "close" : "menu"} className="h-6 w-6" />
              </button>
              <span className={`${lexend.className} truncate text-sm font-bold text-white`}>TurfAdmin</span>
            </div>
          </div>
          <div className="min-w-0 flex-1 lg:mx-2">{headerCenter}</div>
          <div className="flex shrink-0 items-center gap-2 divide-x divide-slate-200 md:gap-3">
            <div className="flex items-center gap-1 pr-2 md:pr-3">
              <button
                type="button"
                className="relative cursor-pointer rounded-full p-2 transition-colors hover:bg-slate-100 active:opacity-70"
                aria-label="Notifications"
              >
                <TurfAdminIcon name="notifications" className="h-5 w-5 text-slate-500" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-emerald-500" />
              </button>
            </div>
            <div className="flex items-center gap-2 pl-2 md:pl-4">
              <div className="hidden text-right lg:block">
                <p className="text-xs font-semibold text-slate-900">Alex Johnson</p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Facility manager</p>
              </div>
              <Image
                src={TURF_ADMIN_AVATAR_SRC}
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
          id="turf-admin-drawer"
          role="dialog"
          aria-modal={menuOpen}
          aria-hidden={!menuOpen}
          aria-labelledby="turf-admin-drawer-title"
          inert={!menuOpen}
          className={`${lexend.className} fixed bottom-0 left-0 z-60 flex w-[min(280px,92vw)] flex-col overflow-y-auto border-r border-slate-800 bg-slate-900 p-4 pb-8 shadow-2xl transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none lg:hidden top-[calc(env(safe-area-inset-top,0)+4rem)] ${
            menuOpen ? "translate-x-0" : "pointer-events-none -translate-x-full"
          }`}
        >
          <p id="turf-admin-drawer-title" className="sr-only">
            Turf admin navigation
          </p>
          <div className="flex min-h-0 flex-1 flex-col">
            <TurfAdminSidebar onLinkClick={() => setMenuOpen(false)} showClose onClose={() => setMenuOpen(false)} />
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

export function TurfAdminSearchHeader({ placeholder = "Search bookings, customers..." }) {
  return (
    <div className="hidden w-full md:block">
      <SearchBar placeholder={placeholder} />
    </div>
  );
}
