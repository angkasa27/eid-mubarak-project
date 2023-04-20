import { DASHBOARD, COMMENTS, THEME, LOGOUT } from "./route";

export const MAIN = [
  {
    label: "Dashboard",
    href: DASHBOARD(),
  },
  {
    label: "Komentar",
    href: COMMENTS(),
  },
  {
    label: "Tema",
    href: THEME(),
  },
  {
    label: "Keluar",
    href: LOGOUT(),
  },
];
