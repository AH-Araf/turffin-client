"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

const navItemBase = `${lexend.className} cursor-pointer text-sm font-medium transition-colors`;
const navItemInactive = `${navItemBase} text-slate-600 hover:text-turf-primary`;
const navItemActive = `${navItemBase} border-b-2 border-turf-primary-container pb-1 text-turf-primary`;

function navClassName(active) {
  return active ? navItemActive : navItemInactive;
}

export function NavBar() {
  const pathname = usePathname() ?? "/";
  const isBrowseTurf =
    pathname === "/browse-turf" ||
    pathname.startsWith("/browse-turf/") ||
    pathname.startsWith("/turf-details");
  const isMemberships = pathname === "/pricing";
  const isAboutUs = pathname === "/about-us";
  const isSupport = pathname === "/support";
  const isLogin = pathname === "/login";
  const isRegister = pathname === "/register";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/90 shadow-turf-glow backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={`${lexend.className} text-2xl font-black italic tracking-tighter text-slate-900 transition-opacity hover:opacity-80`}
          >
            Turffin
          </Link>
          <nav className="hidden gap-6 md:flex" aria-label="Main">
            <Link href="/browse-turf" className={navClassName(isBrowseTurf)}>
              Browse Turfs
            </Link>
            <Link href="/pricing" className={navClassName(isMemberships)}>
              Memberships
            </Link>
            <Link href="/about-us" className={navClassName(isAboutUs)}>
              About Us
            </Link>
            <Link href="/support" className={navClassName(isSupport)}>
              Support
            </Link>
          </nav>
        </div>
        <div className={`${lexend.className} flex items-center gap-4`}>
          <Link
            href="/login"
            className={
              isLogin || isRegister
                ? "text-sm font-medium text-turf-primary"
                : "text-sm font-medium text-slate-600 transition-colors hover:text-turf-primary"
            }
          >
            Login
          </Link>
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-turf-primary-container px-6 py-2.5 text-sm font-bold text-turf-on-primary transition-all hover:opacity-90 active:scale-95"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}
