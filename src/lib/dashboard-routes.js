/** @param {string | undefined} role */
export function getDashboardHomePath(role) {
  if (role === 'turf-admin') return '/dashboard/turf-admin/overview';
  if (role === 'super-admin') return '/dashboard/super-admin/overview';
  return '/dashboard/user';
}

/**
 * Safe in-app return path after login (open redirect hardening).
 * @param {string | null | undefined} next
 * @param {string} fallback
 */
export function sanitizeReturnPath(next, fallback) {
  if (typeof next !== 'string') return fallback;
  const t = next.trim();
  if (!t.startsWith('/') || t.startsWith('//')) return fallback;
  if (t.includes('://')) return fallback;
  if (t === '/login' || t.startsWith('/login?')) return fallback;
  return t;
}
