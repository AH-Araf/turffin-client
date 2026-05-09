"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { getApiErrorMessage } from "@/lib/api-error";

export function useResetPassword() {
  const mutation = useMutation({
    mutationFn: ({ token, password }) => authService.resetPassword({ token, password }),
  });

  return {
    resetPassword: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    successMessage: mutation.data?.message ?? "",
    error: mutation.error ? getApiErrorMessage(mutation.error, "Could not reset password.") : "",
    resetState: mutation.reset,
  };
}
