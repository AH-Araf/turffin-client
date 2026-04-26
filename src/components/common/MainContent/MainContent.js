"use client";

import { usePathname } from "next/navigation";

export function MainContent({ children }) {
  const pathname = usePathname() ?? "/";
  const isDashboard = pathname.startsWith("/dashboard");
  return (
    <div className={isDashboard ? "w-full flex-1" : "w-full flex-1 pt-20"}>{children}</div>
  );
}
