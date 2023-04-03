import { key, ROUTES } from "../configs";

const storageName = key.storageName;

// Local Storage - User Data
export const setLocalUserData = (value) => {
  localStorage.setItem(storageName.userData, JSON.stringify(value));
};

// Local Storage - Access Token
export const setAccessToken = (value) => {
  localStorage.setItem(storageName.accessToken, value);
};

export const getAccessToken = () => {
  const token = localStorage.getItem(storageName.accessToken);

  if (!token) return null;

  return `Bearer ${token}`;
};

// Local Storage - Refreh Token
export const setRefreshToken = (value) => {
  localStorage.setItem(storageName.refreshToken, value);
};

export const getRefreshToken = () => {
  return localStorage.getItem(storageName.refreshToken);
};

// Auto Redirect Home
export const baseRedirect = async () => {
  let url = ROUTES.DASHBOARD();
  location.href = url;
};

// Clear Local Storage
export const clearStorage = () => {
  localStorage.clear();
};

// Logout
export const logout = () => {
  clearStorage();
  location.href = ROUTES.MAIN();
};
