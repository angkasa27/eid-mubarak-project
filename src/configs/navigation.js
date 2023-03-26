import { DASHBOARD, ABOUT, LOGOUT } from "./route";

export const MAIN = [
  {
    label: "Dashboard",
    href: DASHBOARD(),
  },
  {
    label: "Tentang",
    href: ABOUT(),
  },
  {
    label: "Keluar",
    href: LOGOUT(),
  },
];
