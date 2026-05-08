import axios from 'axios';

const ACCESS_TOKEN_KEY = 'accessToken';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5050/api';

export const getAccessToken = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setAccessToken = (token) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (token) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return;
  }

  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

let refreshPromise = null;

/** Never attach refresh to these routes — a 401 here means bad credentials or validation, not an expired access token. */
const shouldSkipTokenRefresh = (url = '') => {
  if (!url) return true;
  return (
    url.includes('/auth/refresh') ||
    url.includes('/auth/login') ||
    url.includes('/auth/register') ||
    url.includes('/auth/forgot-password') ||
    url.includes('/auth/reset-password')
  );
};

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;
    const requestUrl = originalRequest?.url || '';

    const shouldTryRefresh =
      (status === 401 || status === 403) && !shouldSkipTokenRefresh(requestUrl);

    if (!shouldTryRefresh || !originalRequest || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      if (!refreshPromise) {
        refreshPromise = api.post('/auth/refresh').then((res) => {
          const newToken = res.data?.data?.accessToken;
          setAccessToken(newToken || null);
          return newToken;
        });
      }

      const newToken = await refreshPromise;
      refreshPromise = null;

      if (!newToken) {
        return Promise.reject(error);
      }

      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return api(originalRequest);
    } catch (refreshError) {
      refreshPromise = null;
      setAccessToken(null);
      return Promise.reject(refreshError);
    }
  }
);

export default api;
