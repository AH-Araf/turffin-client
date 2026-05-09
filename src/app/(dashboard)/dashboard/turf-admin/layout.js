import { RequireDashboardRole } from "@/components/auth/RequireDashboardRole";

export default function TurfAdminLayout({ children }) {
  return <RequireDashboardRole forRole="turf-admin">{children}</RequireDashboardRole>;
}
