"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useDashboardAuth } from "@/providers/DashboardAuthProvider";
import { getDashboardHomePath } from "@/lib/dashboard-routes";

/**
 * Client-side route guard for a dashboard segment (must match API-enforced role).
 *
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {'user' | 'turf-admin' | 'super-admin'} props.forRole
 */
export function RequireDashboardRole({ children, forRole }) {
  const router = useRouter();
  const pathname = usePathname() ?? "";
  const { user, status, sessionErrorMessage, refreshSession } = useDashboardAuth();

  useEffect(() => {
    if (status === "loading" || status === "session_error") return;

    if (status === "unauthenticated") {
      const next = encodeURIComponent(pathname || "/dashboard");
      router.replace(`/login?next=${next}`);
      return;
    }

    if (status === "authenticated" && user) {
      const role = user.role ?? "user";
      if (role !== forRole) {
        router.replace(getDashboardHomePath(role));
      }
    }
  }, [status, user, router, pathname, forRole]);

  if (status === "loading") {
    return (
      <div className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-3 bg-slate-950 text-slate-300">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-400" aria-hidden />
        <p className="text-sm font-medium">Loading your session…</p>
      </div>
    );
  }

  if (status === "session_error") {
    return (
      <div className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-4 bg-slate-950 px-6 text-center text-slate-300">
        <p className="max-w-md text-sm">{sessionErrorMessage}</p>
        <button
          type="button"
          onClick={() => refreshSession()}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
        >
          Retry
        </button>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex min-h-[50vh] w-full items-center justify-center bg-slate-950 text-slate-400">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-400" aria-hidden />
      </div>
    );
  }

  if (status === "authenticated" && !user?.id) {
    return (
      <div className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-3 bg-slate-950 text-slate-300">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-400" aria-hidden />
        <p className="text-sm font-medium">Loading your session…</p>
      </div>
    );
  }

  const role = user?.role ?? "user";
  if (role !== forRole) {
    return (
      <div className="flex min-h-[50vh] w-full items-center justify-center bg-slate-950 text-slate-400">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-400" aria-hidden />
      </div>
    );
  }

  return children;
}
