import { cva } from "class-variance-authority";

export const containerCard = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        amber: "text-amber-500 bg-white",
        cyan: "text-blue-gray-800 bg-white",
      },
    },
  });

export const ornamentVariant = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        amber: "text-amber-500",
        cyan: "text-cyan-500",
      },
    },
  });

export const textVariant = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        amber: "text-amber-800",
        cyan: "text-cyan-800",
      },
    },
  });

export const backgroundVariant = (classes) =>
  cva(classes, {
    variants: {
      variant: {
        amber: "bg-amber-500",
        cyan: "bg-cyan-500",
      },
    },
  });
