"use client";

import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getAccessToken } from "@/lib/axios";
import { setWebSessionFlag } from "@/lib/web-session-cookie";
import { DashboardAuthProvider } from "@/providers/DashboardAuthProvider";

/** Keeps middleware session gate in sync when an access token exists (e.g. after login or older sessions). */
function SessionGateSync() {
  useEffect(() => {
    if (getAccessToken()) {
      setWebSessionFlag();
    }
  }, []);
  return null;
}

export function Providers({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false
          }
        }
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <DashboardAuthProvider>
        <SessionGateSync />
        {children}
      </DashboardAuthProvider>
    </QueryClientProvider>
  );
}

