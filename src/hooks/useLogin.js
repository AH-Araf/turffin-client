"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";

const getErrorMessage = (error) => {
  return (
    error?.response?.data?.message ||
    error?.response?.data?.meta?.message ||
    error?.message ||
    "Login failed. Please try again."
  );
};

export function useLogin() {
  const mutation = useMutation({
    mutationFn: ({ email, password }) => authService.login({ email, password })
  });

  return {
    login: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    error: mutation.error ? getErrorMessage(mutation.error) : "",
    session: mutation.data ?? null,
    resetLoginState: mutation.reset
  };
}

export default useLogin;
