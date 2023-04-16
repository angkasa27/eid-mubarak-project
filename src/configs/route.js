export const LOGIN = () => `/login`;
export const REGISTER = () => `/daftar`;
export const LOGOUT = () => `/logout`;
export const FORGOT_PASSWORD = () => ``;

export const MAIN = () => `/`;
export const ABOUT = () => `/about`;

export const DASHBOARD = () => `/dashboard`;
export const THEME = () => `/theme`;
export const DEMO = (theme, variant) => `/theme/${theme}/${variant}`;
export const EDIT = () => `/edit`;
export const SHARE = () => `/whatsapp-share`;
export const COMMENTS = () => `/comments`;
export const GENERATE_QR = () => `/generate-qr`;

export const NOT_FOUND = () => `/404`;

export const USED_PATH = [
  `/index`,
  NOT_FOUND(),
  LOGIN(),
  REGISTER(),
  FORGOT_PASSWORD(),
  MAIN(),
  ABOUT(),
  DASHBOARD(),
  EDIT(),
  THEME(),
  DEMO(),
  SHARE(),
  COMMENTS(),
  GENERATE_QR(),
];
