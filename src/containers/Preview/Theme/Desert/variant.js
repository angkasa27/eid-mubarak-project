import { cva } from "class-variance-authority";

export const containerCard = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        purple: "bg-gray-900",
        amber: "bg-gray-900",
      },
    },
  });

export const backgroundVariant = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        purple:
          "bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-200 bg-fixed",
        amber:
          "bg-gradient-to-b from-indigo-900  via-indigo-800 to-amber-800 bg-fixed",
      },
    },
  });
