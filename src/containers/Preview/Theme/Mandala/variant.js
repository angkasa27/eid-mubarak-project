import { cva } from "class-variance-authority";

export const containerCard = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        indigo: "bg-indigo-900",
        purple: "bg-purple-900",
        magenta: "bg-pink-900",
        green: "bg-teal-900",
      },
    },
  });
