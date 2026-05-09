"use client";

import Link from "next/link";
import { Lexend } from "next/font/google";
import { AUTH_PAGE_HERO_IMAGE, AUTH_PAGE_OVERLAY_STYLE } from "@/lib/auth-page-assets";

const lexend = Lexend({ subsets: ["latin"] });

function StadiumIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M2 5h20v2H2V5zm0 4h4v3H2V9zm6 0h8v3H8V9zm10 0h4v3h-4V9zM2 16h4v3H2v-3zm6 0h8v3H8v-3zm10 0h4v3h-4v-3zM2 20h20v2H2v-2z" />
    </svg>
  );
}

/**
 * Shared full-viewport hero + card area for login-adjacent auth pages.
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.heroSubtitle]
 */
export function AuthMarketingShell({ children, heroSubtitle = "Book & play on premium turfs" }) {
  return (
    <div className="relative isolate z-10 min-h-dvh w-full overflow-x-hidden text-turf-on-surface antialiased">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={AUTH_PAGE_HERO_IMAGE}
          alt=""
          className="h-full min-h-full w-full object-cover object-center [transform:translate3d(0,0,0)]"
          width={2560}
          height={2048}
          fetchPriority="low"
          decoding="async"
          draggable={false}
        />
        <div className="absolute inset-0" style={AUTH_PAGE_OVERLAY_STYLE} />
      </div>

      <div className="relative z-10 mx-auto flex w-full min-h-dvh max-w-[480px] flex-col justify-center px-6 py-12 pb-[max(3rem,env(safe-area-inset-bottom,0px)+1.5rem)]">
        <div className="mb-8 text-center md:mb-10">
          <Link href="/" className="inline-block">
            <h1
              className={`${lexend.className} mb-2 text-4xl font-bold italic tracking-tighter text-white md:text-5xl`}
              style={{ letterSpacing: "-0.02em" }}
            >
              Turffin
            </h1>
          </Link>
          <p className="text-lg font-medium text-turf-primary-container">{heroSubtitle}</p>
        </div>

        {children}

        <footer className="mt-8 flex flex-wrap justify-center gap-4 gap-y-2 md:gap-6">
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-white/60 transition hover:text-white">
            Privacy policy
          </a>
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-white/60 transition hover:text-white">
            Terms
          </a>
          <Link href="/support" className="text-xs font-semibold uppercase tracking-widest text-white/60 transition hover:text-white">
            Support
          </Link>
        </footer>
      </div>

      <div className="pointer-events-none absolute bottom-6 right-4 z-[1] opacity-20 sm:right-8 sm:p-4">
        <StadiumIcon className="h-24 w-24 text-turf-primary-container sm:h-28 sm:w-28 md:h-32 md:w-32" />
      </div>
    </div>
  );
}
