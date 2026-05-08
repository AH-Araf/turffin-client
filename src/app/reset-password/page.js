import { Suspense } from "react";
import { ResetPasswordView } from "@/components/pages/auth/ResetPasswordView";

export const metadata = {
  title: "Reset password | Turffin",
  description: "Set a new password for your Turffin account.",
};

function ResetFallback() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-turf-surface text-turf-on-surface-variant">
      Loading…
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetFallback />}>
      <ResetPasswordView />
    </Suspense>
  );
}
