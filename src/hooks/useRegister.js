"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { getApiErrorMessage } from "@/lib/api-error";

export function useRegister() {
  const mutation = useMutation({
    mutationFn: ({ name, email, password, role }) =>
      authService.register({ name, email, password, role })
  });

  return {
    register: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    error: mutation.error ? getApiErrorMessage(mutation.error, "Registration failed. Please try again.") : "",
    resetRegisterState: mutation.reset
  };
}

export default useRegister;
