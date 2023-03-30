import { cva } from "class-variance-authority";

export const containerCard = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        blue: "bg-blue-900",
        purple: "bg-purple-900",
        brown: "bg-yellow-900",
      },
    },
  });

export const componentCard = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        blue: "text-[#173461]",
        purple: "text-[#361b57]",
        brown: "text-[#8b501c]",
      },
    },
  });
