/**
 * Non-secret marker cookie on the Next.js origin so middleware can block /dashboard
 * before any RSC/HTML is returned. Cleared on logout and when session validation fails.
 * (API + httpOnly refresh on the backend remain the source of truth for real auth.)
 */

import { TURFFIN_SESSION_GATE_COOKIE } from "@/lib/web-session-constants";

/** Match backend JWT_REFRESH_EXPIRES_IN when "remember this device" is enabled (gate cookie only). */
const REMEMBER_MAX_AGE_SEC = 60 * 60 * 24 * 7;

function secureSuffix() {
  if (typeof window === "undefined") return "";
  return window.location.protocol === "https:" ? "; Secure" : "";
}

/**
 * @param {boolean} [rememberDevice=true] If false, session cookie (cleared when the browser closes).
 */
export function setWebSessionFlag(rememberDevice = true) {
  if (typeof document === "undefined") return;
  const maxAgePart = rememberDevice ? `; Max-Age=${REMEMBER_MAX_AGE_SEC}` : "";
  document.cookie = `${TURFFIN_SESSION_GATE_COOKIE}=1; Path=/${maxAgePart}; SameSite=Lax${secureSuffix()}`;
}

export function clearWebSessionFlag() {
  if (typeof document === "undefined") return;
  document.cookie = `${TURFFIN_SESSION_GATE_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax${secureSuffix()}`;
}
