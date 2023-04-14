import {
  Plus_Jakarta_Sans,
  Berkshire_Swash,
  Grand_Hotel,
  Cinzel,
  Pacifico,
  Acme,
  Croissant_One,
  Poppins,
} from "@next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: ["--plus-jakarta-sans"],
  subsets: ["latin"],
});

export const berkshireSwash = Berkshire_Swash({
  variable: ["--berkshire-swash"],
  subsets: ["latin"],
  weight: "400",
});

export const grandHotel = Grand_Hotel({
  variable: ["--grand-hotel"],
  subsets: ["latin"],
  weight: "400",
});

export const cinzel = Cinzel({
  variable: ["--cinzel"],
  subsets: ["latin"],
});

export const pacifico = Pacifico({
  variable: ["--pacifico"],
  subsets: ["latin"],
  weight: "400",
});

export const acme = Acme({
  variable: ["--acme"],
  subsets: ["latin"],
  weight: "400",
});

export const croissantOne = Croissant_One({
  variable: ["--croissant-one"],
  subsets: ["latin"],
  weight: "400",
});

export const poppins = Poppins({
  variable: ["--poppins"],
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fontsVariable = [
  plusJakartaSans.variable,
  berkshireSwash.variable,
  grandHotel.variable,
  cinzel.variable,
  pacifico.variable,
  acme.variable,
  croissantOne.variable,
  poppins.variable,
];
