"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Inter, Lexend } from "next/font/google";
import { DashboardUserIcon as Icon } from "./dashboardUserIcons";

export { DashboardUserIcon } from "./dashboardUserIcons";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export const USER_PORTAL_AVATAR_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDxR0l29l-PasU64mNeYcQs8SNdQnQ_NKpq6xdBpYCRuof7_HB0dXzcep7lB6Xn5aJkBD-4Qn-9lwKfVNWxUfnZg6Q2Fiy5fp_5PYAaicZR5veE0v6W4LKzFD3aE1D5gTeqlTFqC81_XLyGwoDvpw4oNXAPeC1pjDGTz-RqgvVhfpru5nhptyF3M86G3j3yMdzo9jeYW6KJ-QlUI1PZIIcVGnyPrEcVIcnMQV0GyGUcrr32at3-ZWi0VxYF2gJL5jrb2RY0gXqBCw";

const navLink =
  "flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-white";
const navLinkActive = "border-r-4 border-emerald-400 bg-emerald-400/10 font-bold text-emerald-400";

function DashboardAccountSidebar({ lexendClassName, onLinkClick = () => {}, showClose, onClose }) {
  const pathname = usePathname() ?? "";
  const isDashboard = pathname.startsWith("/dashboard/user/user-dashboard");
  const isBookings = pathname.startsWith("/dashboard/user/user-bookings");
  const isBookingHistory = pathname.startsWith("/dashboard/user/booking-history");
  const isSettings = pathname.startsWith("/dashboard/user/my-profile");
  return (
    <>
      <div className={`relative mb-8 border-b border-slate-800 px-6 pb-6 ${showClose ? "pr-14" : ""}`}>
        {showClose ? (
          <button
            type="button"
            className="absolute right-3 top-0 rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            aria-label="Close menu"
            onClick={onClose}
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        ) : null}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400">
            <Icon name="stadium" className="h-6 w-6 text-slate-900" />
          </div>
          <div>
            <p className={`${lexendClassName} text-xl font-black tracking-tight text-white`}>Turffin</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Player portal</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-4" aria-label="Account navigation">
        <Link
          href="/dashboard/user/user-dashboard"
          className={`${navLink} ${isDashboard ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <Icon name="dashboard" className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/dashboard/user/user-bookings"
          className={`${navLink} ${isBookings ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <Icon name="calendar" className="h-5 w-5" />
          <span>My bookings</span>
        </Link>
        <Link
          href="/dashboard/user/booking-history"
          className={`${navLink} ${isBookingHistory ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <Icon name="history" className="h-5 w-5" />
          <span>Booking history</span>
        </Link>
        {/* <Link href="/browse-turf" className={navLink} onClick={onLinkClick}>
          <Icon name="stadium" className="h-5 w-5" />
          <span>Facilities</span>
        </Link>
        <Link href="/pricing" className={navLink} onClick={onLinkClick}>
          <Icon name="payments" className="h-5 w-5" />
          <span>Payments</span>
        </Link> */}
        <Link
          href="/dashboard/user/my-profile"
          className={`${navLink} ${isSettings ? navLinkActive : ""}`}
          onClick={onLinkClick}
        >
          <Icon name="settings" className="h-5 w-5" filled={isSettings} />
          <span>Settings</span>
        </Link>
      </nav>
      <div className="mt-auto px-4">
        <Link href="/login" className={navLink} onClick={onLinkClick}>
          <Icon name="logout" className="h-5 w-5" />
          <span>Logout</span>
        </Link>
      </div>
    </>
  );
}

/**
 * Shared chrome for /dashboard/user/* player pages (sidebar, top bar, mobile drawer).
 */
export function UserPortalShell({ children, headerCenter, maxWidthClass = "max-w-6xl" }) {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const pathname = usePathname() ?? "";

  useEffect(() => {
    setAccountMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!accountMenuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setAccountMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [accountMenuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setAccountMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      className={`${inter.className} min-h-screen bg-turf-surface text-turf-on-surface antialiased`}
      style={{
        backgroundImage:
          "radial-gradient(at 0% 0%, rgba(74, 222, 128, 0.06) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 109, 54, 0.06) 0, transparent 50%)",
      }}
    >
      <aside
        className={`${lexend.className} fixed left-0 top-0 z-50 hidden h-screen w-[280px] flex-col border-r border-slate-800 bg-slate-900 py-6 antialiased lg:flex`}
        aria-label="Account navigation"
      >
        <DashboardAccountSidebar lexendClassName={lexend.className} />
      </aside>

      <header className="fixed left-0 right-0 top-0 z-40 flex flex-col shadow-sm lg:left-[280px] lg:h-16 lg:w-[calc(100%-280px)] lg:flex-row lg:items-center lg:border-b lg:border-slate-200 lg:bg-white/80 lg:px-8 lg:backdrop-blur-md">
        <div
          className={`${lexend.className} flex h-16 min-w-0 shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-slate-900 px-2 backdrop-blur-md lg:flex-1 lg:border-b-0 lg:bg-transparent lg:px-0 lg:backdrop-blur-none`}
        >
          <div className="block shrink-0 lg:hidden">
            <div className="flex items-center">
              <button
                type="button"
                className="inline-flex shrink-0 rounded-lg pr-2 text-white transition-colors hover:bg-slate-800"
                aria-expanded={accountMenuOpen}
                aria-controls="dashboard-account-drawer"
                onClick={() => setAccountMenuOpen((o) => !o)}
              >
                <span className="sr-only">{accountMenuOpen ? "Close account menu" : "Open account menu"}</span>
                <Icon name={accountMenuOpen ? "close" : "menu"} className="h-6 w-6" />
              </button>
              <Link href="/" className={`${lexend.className} min-w-0 truncate text-sm font-bold text-white`}>
                Turffin
              </Link>
            </div>
          </div>
          <div className="min-w-0 flex-1 lg:mx-4">{headerCenter}</div>
          <div className="flex shrink-0 items-center gap-2 divide-x divide-slate-200 md:gap-4">
            <div className="flex items-center gap-1 pr-2 md:gap-2 md:px-2">
              <button
                type="button"
                className="cursor-pointer rounded-full p-2 transition-colors hover:bg-slate-100 active:opacity-70"
                aria-label="Notifications"
              >
                <Icon name="bell" className="h-5 w-5 text-slate-500" />
              </button>
              <button
                type="button"
                className="hidden cursor-pointer rounded-full p-2 transition-colors hover:bg-slate-100 active:opacity-70 sm:block"
                aria-label="Messages"
              >
                <Icon name="chat" className="h-5 w-5 text-slate-500" />
              </button>
            </div>
            <div className="flex items-center gap-2 pl-2 md:pl-4">
              <div className="hidden text-right lg:block">
                <p className="text-sm font-bold leading-none text-slate-900">Rafid Hassan</p>
                <p className="text-[10px] font-medium text-slate-500">Elite member</p>
              </div>
              <Image
                src={USER_PORTAL_AVATAR_SRC}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-turf-primary-container object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="lg:hidden" aria-hidden={!accountMenuOpen}>
        <button
          type="button"
          tabIndex={-1}
          className={`fixed inset-x-0 bottom-0 z-55 bg-slate-950/50 transition-none lg:hidden top-[calc(env(safe-area-inset-top,0)+4rem)] ${
            accountMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-label="Close menu"
          aria-hidden={!accountMenuOpen}
          onClick={() => setAccountMenuOpen(false)}
        />
        <div
          id="dashboard-account-drawer"
          role="dialog"
          aria-modal={accountMenuOpen}
          aria-hidden={!accountMenuOpen}
          aria-labelledby="dashboard-drawer-title"
          inert={!accountMenuOpen}
          className={`${lexend.className} fixed bottom-0 left-0 z-60 flex w-[min(280px,92vw)] flex-col overflow-y-auto border-r border-slate-800 bg-slate-900 py-6 shadow-2xl transition-transform duration-450 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-none lg:hidden top-[calc(env(safe-area-inset-top,0)+4rem)] ${
            accountMenuOpen ? "translate-x-0" : "pointer-events-none -translate-x-full"
          }`}
        >
          <p id="dashboard-drawer-title" className="sr-only">
            Account navigation
          </p>
          <div className="flex min-h-0 flex-1 flex-col">
            <DashboardAccountSidebar
              lexendClassName={lexend.className}
              onLinkClick={() => setAccountMenuOpen(false)}
              showClose
              onClose={() => setAccountMenuOpen(false)}
            />
          </div>
        </div>
      </div>

      <main className={`px-4 pb-12 pt-[calc(env(safe-area-inset-top,0)+4rem)] lg:ml-[280px] lg:px-8 lg:pt-20`}>
        <div className={`mx-auto ${maxWidthClass}`}>{children}</div>
      </main>
    </div>
  );
}
