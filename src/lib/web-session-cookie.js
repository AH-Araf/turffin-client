/**
 * Non-secret marker cookie on the Next.js origin so middleware can block /dashboard
 * before any RSC/HTML is returned. Cleared on logout and when session validation fails.
 * (API + httpOnly refresh on the backend remain the source of truth for real auth.)
 */

import { TURFFIN_SESSION_GATE_COOKIE } from "@/lib/web-session-constants";

const MAX_AGE_SEC = 60 * 60 * 24 * 7;

function secureSuffix() {
  if (typeof window === "undefined") return "";
  return window.location.protocol === "https:" ? "; Secure" : "";
}

export function setWebSessionFlag() {
  if (typeof document === "undefined") return;
  document.cookie = `${TURFFIN_SESSION_GATE_COOKIE}=1; Path=/; Max-Age=${MAX_AGE_SEC}; SameSite=Lax${secureSuffix()}`;
}

export function clearWebSessionFlag() {
  if (typeof document === "undefined") return;
  document.cookie = `${TURFFIN_SESSION_GATE_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax${secureSuffix()}`;
}
