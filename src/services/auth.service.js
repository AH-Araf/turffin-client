import api, { setAccessToken } from '@/lib/axios';
import { API_CONSTANT } from '@/constant/api-constant';
import { clearWebSessionFlag, setWebSessionFlag } from '@/lib/web-session-cookie';

const pickData = (response) => response?.data?.data ?? null;

const persistSession = (payload) => {
  const accessToken = payload?.accessToken;
  if (accessToken) {
    setAccessToken(accessToken);
    // Server sets rememberDevice; omit/false => session gate cookie (aligns with refresh cookie).
    const rememberDevice = payload?.rememberDevice !== false;
    setWebSessionFlag(rememberDevice);
  }
  return payload;
};

export const authService = {
  async register(payload) {
    const response = await api.post(API_CONSTANT.REGISTER_URL, payload);
    return pickData(response);
  },

  async login(payload) {
    const response = await api.post(API_CONSTANT.LOGIN_URL, payload);
    return persistSession(pickData(response));
  },

  async refresh() {
    const response = await api.post(API_CONSTANT.REFRESH_TOKEN_URL);
    return persistSession(pickData(response));
  },

  async getProfile() {
    const response = await api.get(API_CONSTANT.GET_PROFILE_URL);
    return pickData(response);
  },

  async forgotPassword(payload) {
    const response = await api.post(API_CONSTANT.FORGOT_PASSWORD_URL, payload);
    return {
      message: response.data?.meta?.message ?? 'Reset link sent. Check your email.',
      data: response.data?.data ?? null,
    };
  },

  async resetPassword(payload) {
    const response = await api.post(API_CONSTANT.RESET_PASSWORD_URL, payload);
    return {
      message: response.data?.meta?.message ?? 'Password reset successful.',
      data: response.data?.data ?? null,
    };
  },

  async changePassword(payload) {
    const response = await api.post(API_CONSTANT.CHANGE_PASSWORD_URL, payload);
    return pickData(response);
  },

  async logout() {
    const response = await api.post(API_CONSTANT.LOGOUT_URL);
    setAccessToken(null);
    clearWebSessionFlag();
    return pickData(response);
  }
};

export default authService;
