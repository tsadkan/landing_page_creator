// eslint-disable-next-line import/no-cycle
import { UserAccountAPI } from '@/api';
// eslint-disable-next-line import/no-cycle
import Router from '../router';

export const ACCESS_TOKEN_KEY = 'token';
export const USER_KEY = 'userId';

const AuthService = {
  async login(email, password) {
    const res = await UserAccountAPI.login(email, password);
    if (res && res.id) {
      localStorage.setItem(ACCESS_TOKEN_KEY, res.id);
      localStorage.setItem(USER_KEY, res.userId);
      return true;
    }
    return false;
  },
  async logout() {
    await UserAccountAPI.logout();
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    Router.push({ name: 'login' });
  },
  async signUp(username, email, password) {
    await UserAccountAPI.create(username, email, password);
  },
  updateToken(token) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  },
  getAccessToken: () => localStorage.getItem(ACCESS_TOKEN_KEY),

  getUserId: () => localStorage.getItem(USER_KEY),
  isAuthenticated: () => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return token !== null && token !== 'undefined';
  },
};

export default AuthService;
