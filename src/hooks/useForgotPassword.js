"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { getApiErrorMessage } from "@/lib/api-error";

export function useForgotPassword() {
  const mutation = useMutation({
    mutationFn: ({ email }) => authService.forgotPassword({ email }),
  });

  return {
    requestReset: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    successMessage: mutation.data?.message ?? "",
    error: mutation.error
      ? getApiErrorMessage(mutation.error, "Something went wrong. Try again.")
      : "",
    resetState: mutation.reset,
  };
}
