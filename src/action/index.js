import { LOGIN, LOGOUT } from './type';

export const login = (username, password) => ({
  type: LOGIN,
  username,
  password,
});

export const logout = () => ({
  type: LOGOUT,
});

