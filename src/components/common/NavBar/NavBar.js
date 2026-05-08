"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Lexend } from "next/font/google";
import { Button } from "@/components/ui/button";
import { getDashboardHomePath } from "@/lib/dashboard-routes";
import { SITE_DEMO_USER_AVATAR_URL } from "@/lib/site-assets";
import { cn } from "@/lib/utils";
import { useDashboardAuth } from "@/providers/DashboardAuthProvider";

const lexend = Lexend({ subsets: ["latin"] });

const navItemBase = `${lexend.className} cursor-pointer text-sm font-medium transition-colors duration-200`;
const navInactive = `${navItemBase} text-turf-on-surface-variant hover:text-turf-primary`;

function navClassName(active) {
  return cn(
    navInactive,
    active &&
      "relative font-semibold text-turf-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-turf-primary-container"
  );
}

function navClassNameMobile(active) {
  return active
    ? `${navItemBase} rounded-xl bg-turf-primary-container/20 px-3 py-2.5 font-semibold text-turf-primary ring-1 ring-turf-primary/20 lg:py-4`
    : `${navItemBase} rounded-xl px-3 py-2.5 text-turf-on-surface hover:bg-turf-surface-low lg:py-4`;
}

function AuthButtonsSkeleton() {
  return (
    <div className="hidden items-center gap-2 sm:flex" aria-hidden>
      <div className="h-10 w-24 animate-pulse rounded-lg bg-turf-surface-low" />
    </div>
  );
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
  const router = useRouter();
  const { user, status, signOut } = useDashboardAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const isAuthed = status === "authenticated" && Boolean(user?.id);
  const isAuthLoading = status === "loading";
  const dashboardHref = user ? getDashboardHomePath(user.role ?? "user") : "/dashboard/user";
  const displayName = user?.name?.trim() || user?.email || "Player";

  async function handleSignOut() {
    setMenuOpen(false);
    await signOut();
    router.push("/");
    router.refresh();
  }

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

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const close = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;
    const menuNode = menuRef.current;

    const focusable = menuNode.querySelectorAll(
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

    menuNode.addEventListener("keydown", handleTab);
    return () => menuNode.removeEventListener("keydown", handleTab);
  }, [menuOpen]);

  if (pathname.startsWith("/dashboard")) return null;
  if (pathname === "/login" || pathname === "/register") return null;

  const isHome = pathname === "/";
  const isBrowseTurf =
    pathname === "/browse-turf" ||
    pathname.startsWith("/browse-turf/") ||
    pathname.startsWith("/turf-details");
  const isMemberships = pathname === "/pricing";
  const isAboutUs = pathname === "/about-us";
  const isSupport = pathname === "/support";
  const isLogin = pathname === "/login";

  return (
    <>
      <header className="fixed top-0 z-60 h-[4.25rem] w-full border-b border-turf-primary/10 bg-turf-surface/92 shadow-[var(--turf-shadow-glow)] backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-7xl items-center gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className={`${lexend.className} shrink-0 text-2xl font-black italic tracking-tight text-slate-900 transition-colors hover:text-turf-primary`}
          >
            Turffin
          </Link>

          <nav className="hidden flex-1 items-center justify-start gap-1 md:ms-2 lg:flex lg:gap-2">
            <Link href="/" className={cn("rounded-lg px-3 py-2", navClassName(isHome))}>
              Home
            </Link>
            <Link href="/browse-turf" className={cn("rounded-lg px-3 py-2", navClassName(isBrowseTurf))}>
              Browse Turfs
            </Link>
            <Link href="/pricing" className={cn("rounded-lg px-3 py-2", navClassName(isMemberships))}>
              Memberships
            </Link>
            <Link href="/about-us" className={cn("rounded-lg px-3 py-2", navClassName(isAboutUs))}>
              About Us
            </Link>
            <Link href="/support" className={cn("rounded-lg px-3 py-2", navClassName(isSupport))}>
              Support
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen((o) => !o)}
              className="rounded-xl border border-slate-200/80 bg-white/80 text-turf-on-surface shadow-sm hover:bg-turf-surface-low lg:hidden"
              aria-label="Toggle menu"
            >
              <MenuIcon open={menuOpen} />
            </Button>

            {isAuthLoading ? (
              <AuthButtonsSkeleton />
            ) : isAuthed ? (
              <div className="hidden items-center gap-2 sm:flex">
                <Link
                  href={dashboardHref}
                  title={user?.email ?? displayName}
                  aria-label={`Open your dashboard, signed in as ${displayName}`}
                  className="group flex max-w-[11rem] items-center gap-2.5 rounded-full border border-turf-primary/15 bg-white py-1 pl-1 pr-3 shadow-sm ring-1 ring-slate-900/[0.04] transition hover:border-turf-primary/35 hover:bg-turf-primary-container/10"
                >
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-turf-primary-container/90 ring-offset-2 ring-offset-white transition group-hover:ring-turf-primary">
                    <Image
                      src={SITE_DEMO_USER_AVATAR_URL}
                      alt=""
                      width={36}
                      height={36}
                      className="h-full w-full object-cover"
                      sizes="36px"
                    />
                  </div>
                  <span className="truncate text-xs font-semibold text-turf-on-surface group-hover:text-turf-primary">
                    {displayName}
                  </span>
                </Link>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-10 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-turf-on-surface-variant shadow-sm hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                  onClick={() => void handleSignOut()}
                >
                  Log out
                </Button>
              </div>
            ) : (
              <Button
                asChild
                variant="ghost"
                className="hidden h-10 rounded-lg border border-turf-primary/30 bg-white px-4 text-sm font-semibold text-turf-primary shadow-sm transition hover:border-turf-primary/55 hover:bg-turf-primary-container/15 sm:inline-flex"
              >
                <Link href="/login">Login</Link>
              </Button>
            )}

            <Button
              asChild
              variant="accent"
              className="hidden h-10 rounded-lg px-5 text-sm font-bold shadow-[var(--turf-shadow-card-lift)] sm:inline-flex"
            >
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </header>

      <div
        onClick={() => setMenuOpen(false)}
        className={cn(
          "fixed inset-0 top-[4.25rem] z-40 bg-turf-on-surface/35 backdrop-blur-[2px] transition-opacity duration-300",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <nav
        ref={menuRef}
        className={cn(
          "fixed inset-x-0 top-[4.25rem] z-50 max-h-[calc(100vh-4.25rem)] overflow-y-auto border-b border-turf-primary/10 bg-turf-surface px-4 py-5 shadow-[var(--turf-shadow-search)] transition-transform duration-300 ease-out",
          menuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col gap-1">
          <Link href="/" className={navClassNameMobile(isHome)} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/browse-turf" className={navClassNameMobile(isBrowseTurf)} onClick={() => setMenuOpen(false)}>
            Browse Turfs
          </Link>
          <Link href="/pricing" className={navClassNameMobile(isMemberships)} onClick={() => setMenuOpen(false)}>
            Memberships
          </Link>
          <Link href="/about-us" className={navClassNameMobile(isAboutUs)} onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/support" className={navClassNameMobile(isSupport)} onClick={() => setMenuOpen(false)}>
            Support
          </Link>

          <div className="my-4 h-px bg-gradient-to-r from-transparent via-turf-primary/25 to-transparent" />

          {isAuthLoading ? (
            <p className="px-3 py-2 text-sm text-turf-on-surface-variant">Loading account…</p>
          ) : isAuthed ? (
            <div className="rounded-2xl border border-turf-primary/15 bg-white p-4 shadow-sm">
              <Link
                href={dashboardHref}
                onClick={() => setMenuOpen(false)}
                aria-label={`Open your dashboard, signed in as ${displayName}`}
                className="flex items-center gap-3 rounded-xl p-1 transition hover:bg-turf-surface-low"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-turf-primary-container ring-offset-2 ring-offset-white">
                  <Image
                    src={SITE_DEMO_USER_AVATAR_URL}
                    alt=""
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                    sizes="48px"
                  />
                </div>
                <p className="min-w-0 flex-1 truncate font-semibold text-turf-on-surface" title={user?.email ?? ""}>
                  {displayName}
                </p>
              </Link>
              <button
                type="button"
                className="mt-4 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-turf-on-surface-variant transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                onClick={() => void handleSignOut()}
              >
                Log out
              </button>
            </div>
          ) : (
            <Link href="/login" className={navClassNameMobile(isLogin)} onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}

          <Button asChild variant="accent" className="mt-3 h-11 w-full rounded-xl font-bold shadow-[var(--turf-shadow-card-lift)]">
            <Link href="/booking" onClick={() => setMenuOpen(false)}>
              Book Now
            </Link>
          </Button>
        </div>
      </nav>
    </>
  );
}
