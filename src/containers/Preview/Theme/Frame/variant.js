import { cva } from "class-variance-authority";

export const containerCard = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        blue: "bg-[#173461]",
        purple: "bg-[#361b57]",
        brown: "bg-[#8b501c]",
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
