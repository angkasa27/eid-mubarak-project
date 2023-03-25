import { cva } from "class-variance-authority";

export const mosqueCard = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        dark: "bg-secondary text-indigo-200",
        light: "bg-white text-light-blue-500",
      },
    },
  });

export const mandalaCard = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        dark: "bg-[#262626]",
        light: "bg-light-blue-400 text-white",
      },
    },
  });

export const mainCard = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        dark: "bg-[#1f2937]",
        light: "bg-white",
      },
    },
  });

export const secondaryCard = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        dark: "bg-[#262626]",
        light: "bg-amber-300 text-white",
      },
    },
  });
