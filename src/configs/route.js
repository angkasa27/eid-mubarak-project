export const LOGIN = () => "/login";
export const REGISTER = () => "/daftar";
export const FORGOT_PASSWORD = () => "/reset-password";

export const DASHBOARD = () => "/dashboard";
export const PROFILE = () => "/profile";
export const THEME = () => "/theme";

export const BIRTHDAY = () => "/birthday";
export const BIRTHDAY_PREVIEW = (id) => `/bday/${id}`;
export const BIRTHDAY_DETAIL = (id) => `/birthday/${id}`;
export const BIRTHDAY_UPDATE = (id) => `/birthday/${id}/form`;

export const USED_PATH = [
  "/index",
  "/404",
  "/test",
  LOGIN(),
  REGISTER(),
  FORGOT_PASSWORD(),
  DASHBOARD(),
  PROFILE(),
  THEME(),
  BIRTHDAY(),
];
