/**
 * Maps axios errors to a single user-facing string (API + Zod validation details).
 */
export function getApiErrorMessage(error, fallback = 'Something went wrong. Please try again.') {
  const data = error?.response?.data;
  if (!data) {
    return error?.message || fallback;
  }

  const details = data.details;
  if (Array.isArray(details) && details.length > 0) {
    const first = details[0];
    const pathStr =
      Array.isArray(first?.path) && first.path.length > 0 ? `${first.path.join('.')}: ` : '';
    const msg = first?.message;
    if (msg) return `${pathStr}${String(msg)}`.trim();
  }

  return data.message || data.meta?.message || fallback;
}
