"use client";

import { usePathname } from "next/navigation";

export function MainContent({ children }) {
  const pathname = usePathname() ?? "/";
  const isDashboard = pathname.startsWith("/dashboard");
  const isAuthStandalone = pathname === "/login" || pathname === "/register";
  const contentClass =
    isDashboard || isAuthStandalone ? "w-full flex-1" : "w-full flex-1 pt-20";
  return <div className={contentClass}>{children}</div>;
}
