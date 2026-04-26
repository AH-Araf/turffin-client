"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

const navItemBase = `${lexend.className} cursor-pointer text-sm font-medium transition-colors`;
const navItemInactive = `${navItemBase} text-slate-600 hover:text-turf-primary`;
const navItemActive = `${navItemBase} underline underline-offset-2 text-turf-primary`;

function navClassName(active) {
  return active ? navItemActive : navItemInactive;
}

function navClassNameMobile(active) {
  return active
    ? `${navItemBase} rounded-lg bg-turf-primary-container/15 px-3 lg:py-4 py-2 font-semibold text-turf-primary`
    : `${navItemBase} rounded-lg px-3 lg:py-4 py-2 text-slate-700 hover:bg-slate-50`;
}

function MenuIcon({ open }) {
  return open ? (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ) : (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function NavBar() {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Scroll lock without layout shift
  useEffect(() => {
    if (!menuOpen) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Close on desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const close = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  // Focus trap
  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;

    const focusable = menuRef.current.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );

    if (focusable.length) focusable[0].focus();

    const handleTab = (e) => {
      if (e.key !== "Tab") return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    menuRef.current.addEventListener("keydown", handleTab);
    return () => menuRef.current?.removeEventListener("keydown", handleTab);
  }, [menuOpen]);

  if (pathname.startsWith("/dashboard")) return null;

  const isHome = pathname === "/";
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
    <>
      {/* HEADER (always top layer) */}
      <header className="fixed top-0 z-[60] h-20 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md shadow-turf-glow">
        <div className="mx-auto flex h-full max-w-7xl items-center gap-3 px-4 sm:px-6">
          <Link href="/" className={`${lexend.className} text-2xl font-black italic text-slate-900`}>
            Turffin
          </Link>

          <nav className="hidden flex-1 justify-start items-center gap-6 lg:flex md:ms-4">
            <Link href="/" className={navClassName(isHome)}>Home</Link>
            <Link href="/browse-turf" className={navClassName(isBrowseTurf)}>Browse Turfs</Link>
            <Link href="/pricing" className={navClassName(isMemberships)}>Memberships</Link>
            <Link href="/about-us" className={navClassName(isAboutUs)}>About Us</Link>
            <Link href="/support" className={navClassName(isSupport)}>Support</Link>
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            >
              <MenuIcon open={menuOpen} />
            </button>

            <Link href="/login" className="hidden sm:inline text-sm text-slate-600 hover:text-turf-primary">
              Login
            </Link>

            <Link
              href="/booking"
              className="hidden sm:inline-flex rounded-lg bg-turf-primary-container px-5 py-2.5 text-sm font-bold text-turf-on-primary"
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 top-20 z-[40] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MOBILE MENU */}
      <nav
        ref={menuRef}
        className={`fixed inset-x-0 top-20 z-[50] max-h-[calc(100vh-5rem)] overflow-y-auto bg-white px-4 py-6 shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-1">
          <Link href="/" className={navClassNameMobile(isHome)}>Home</Link>
          <Link href="/browse-turf" className={navClassNameMobile(isBrowseTurf)}>Browse Turfs</Link>
          <Link href="/pricing" className={navClassNameMobile(isMemberships)}>Memberships</Link>
          <Link href="/about-us" className={navClassNameMobile(isAboutUs)}>About Us</Link>
          <Link href="/support" className={navClassNameMobile(isSupport)}>Support</Link>

          <hr className="my-3" />

          <Link href="/login" className={navClassNameMobile(isLogin || isRegister)}>
            Login
          </Link>

          <Link
            href="/booking"
            className="mt-2 w-full rounded-lg bg-turf-primary-container py-3 text-center text-sm font-bold text-turf-on-primary"
          >
            Book Now
          </Link>
        </div>
      </nav>
    </>
  );
}