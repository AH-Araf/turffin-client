import { RequireDashboardRole } from "@/components/auth/RequireDashboardRole";

export default function SuperAdminLayout({ children }) {
  return <RequireDashboardRole forRole="super-admin">{children}</RequireDashboardRole>;
}
