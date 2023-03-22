import {
  DASHBOARD,
  PROFILE,
  BIRTHDAY_DETAIL,
  BIRTHDAY_UPDATE,
  THEME,
} from "./route";
import {
  ChartPieIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export const MAIN = [
  {
    label: "Dashboard",
    href: DASHBOARD(),
  },
  {
    label: "Tema",
    href: THEME(),
  },
  {
    label: "Profil",
    href: PROFILE(),
  },
];

export const BIRTHDAY = (id) => [
  {
    label: "Detail",
    href: BIRTHDAY_DETAIL(id),
    disabled: false,
    icon: ChartPieIcon,
  },
  {
    label: "Ubah Data",
    href: BIRTHDAY_UPDATE(id),
    disabled: false,
    icon: DocumentTextIcon,
  },
  {
    label: "Komentar",
    href: "/",
    disabled: true,
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    label: "Terkirim",
    href: "/",
    disabled: true,
    icon: EnvelopeIcon,
  },
];
