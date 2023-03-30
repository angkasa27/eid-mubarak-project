import { cva } from "class-variance-authority";

export const containerCard = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        evening: "bg-blue-700",
        afternoon: "bg-[#0f172a]",
      },
    },
  });

export const cloudStyle = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        evening: "text-white",
        afternoon: "text-[#334155]",
      },
    },
  });

export const cloudCard = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        evening: "bg-white text-blue-gray-800",
        afternoon: "bg-[#334155] text-white",
      },
    },
  });
