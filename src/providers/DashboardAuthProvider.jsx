"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { authService } from "@/services/auth.service";
import { clearWebSessionFlag, setWebSessionFlag } from "@/lib/web-session-cookie";

/**
 * @typedef {Object} DashboardUser
 * @property {string} id
 * @property {string} email
 * @property {string} name
 * @property {string} [role]
 */

/**
 * @typedef {'loading' | 'authenticated' | 'unauthenticated' | 'session_error'} DashboardAuthStatus
 */

/**
 * @typedef {Object} DashboardAuthContextValue
 * @property {DashboardUser | null} user
 * @property {DashboardAuthStatus} status
 * @property {string | null} sessionErrorMessage
 * @property {() => Promise<void>} refreshSession
 * @property {() => Promise<void>} signOut
 */

/** @type {React.Context<DashboardAuthContextValue | null>} */
const DashboardAuthContext = createContext(null);

function isUnauthorizedStatus(status) {
  return status === 401 || status === 403;
}

export function DashboardAuthProvider({ children }) {
  /** @type {[DashboardUser | null, React.Dispatch<React.SetStateAction<DashboardUser | null>>]} */
  const [user, setUser] = useState(null);
  /** @type {[DashboardAuthStatus, React.Dispatch<React.SetStateAction<DashboardAuthStatus>>]} */
  const [status, setStatus] = useState(/** @type {DashboardAuthStatus} */ ("loading"));
  const [sessionErrorMessage, setSessionErrorMessage] = useState(/** @type {string | null} */ (null));

  const loadSession = useCallback(async () => {
    setStatus("loading");
    setSessionErrorMessage(null);
    try {
      const profile = await authService.getProfile();
      if (!profile || typeof profile.id !== "string") {
        setUser(null);
        clearWebSessionFlag();
        setStatus("unauthenticated");
        return;
      }
      setUser(profile);
      setWebSessionFlag();
      setStatus("authenticated");
    } catch (e) {
      setUser(null);
      if (axios.isAxiosError(e) && isUnauthorizedStatus(e.response?.status)) {
        clearWebSessionFlag();
        setStatus("unauthenticated");
        return;
      }
      const msg =
        axios.isAxiosError(e) && e.code === "ERR_NETWORK"
          ? "Unable to reach the server. Check your connection and try again."
          : "We could not verify your session. Please try again.";
      setSessionErrorMessage(msg);
      clearWebSessionFlag();
      setStatus("session_error");
    }
  }, []);

  useEffect(() => {
    void loadSession();
  }, [loadSession]);

  const signOut = useCallback(async () => {
    try {
      await authService.logout();
    } catch {
      // Still clear local session if the API fails (cookie may already be gone).
    }
    setUser(null);
    clearWebSessionFlag();
    setStatus("unauthenticated");
  }, []);

  const value = useMemo(
    () => ({
      user,
      status,
      sessionErrorMessage,
      refreshSession: loadSession,
      signOut
    }),
    [user, status, sessionErrorMessage, loadSession, signOut]
  );

  return <DashboardAuthContext.Provider value={value}>{children}</DashboardAuthContext.Provider>;
}

/** @returns {DashboardAuthContextValue} */
export function useDashboardAuth() {
  const ctx = useContext(DashboardAuthContext);
  if (!ctx) {
    throw new Error("useDashboardAuth must be used within DashboardAuthProvider");
  }
  return ctx;
}
