"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { getApiErrorMessage } from "@/lib/api-error";

export function useLogin() {
  const mutation = useMutation({
    mutationFn: ({ email, password, rememberDevice = false }) =>
      authService.login({ email, password, rememberDevice })
  });

  return {
    login: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    error: mutation.error ? getApiErrorMessage(mutation.error, "Login failed. Please try again.") : "",
    session: mutation.data ?? null,
    resetLoginState: mutation.reset
  };
}

export default useLogin;
