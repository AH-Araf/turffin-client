import { RequireDashboardRole } from "@/components/auth/RequireDashboardRole";

export default function UserDashboardSectionLayout({ children }) {
  return <RequireDashboardRole forRole="user">{children}</RequireDashboardRole>;
}
