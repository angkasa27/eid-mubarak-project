export const LOGIN = () => `/login`;
export const REGISTER = () => `/daftar`;
export const FORGOT_PASSWORD = () => ``;

export const MAIN = () => `/`;
export const ABOUT = () => `/about`;

export const DASHBOARD = () => `/dashboard`;
export const CREATE = () => `/create`;
export const EDIT = (id) => `/edit/${id}`;

export const USED_PATH = [
  `/index`,
  `/404`,
  `/test`,
  LOGIN(),
  REGISTER(),
  FORGOT_PASSWORD(),
  MAIN(),
  ABOUT(),
  DASHBOARD(),
  CREATE(),
  EDIT(),
];
