import { ForgotPasswordView } from "@/components/pages/auth/ForgotPasswordView";

export const metadata = {
  title: "Forgot password | Turffin",
  description: "Request a link to reset your Turffin account password.",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordView />;
}
