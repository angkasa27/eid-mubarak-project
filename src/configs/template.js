import PREVIEW_IMAGES from "../assets/theme";

export const MANDALA = {
  name: "Mandala",
  theme: "mandala",
  variants: [
    {
      name: "Purple",
      variant: "purple",
      color: "bg-purple-900",
      image: PREVIEW_IMAGES.MandalaPurple,
    },
    {
      name: "Blue",
      variant: "blue",
      color: "bg-indigo-900",
      image: PREVIEW_IMAGES.MandalaBlue,
    },
    {
      name: "Magenta",
      variant: "magenta",
      color: "bg-pink-900",
      image: PREVIEW_IMAGES.MandalaMagenta,
    },
    {
      name: "Green",
      variant: "green",
      color: "bg-teal-900",
      image: PREVIEW_IMAGES.MandalaGreen,
    },
  ],
};

export const STACKED = {
  name: "Stacked",
  theme: "stacked",
  variants: [
    {
      name: "Light Mode",
      variant: "light",
      color: "bg-yellow-50",
      image: PREVIEW_IMAGES.StackedLight,
    },
    {
      name: "Dark Mode",
      variant: "dark",
      color: "bg-main",
      image: PREVIEW_IMAGES.StackedDark,
    },
  ],
};

export const FRAME = {
  name: "Frame",
  theme: "frame",
  variants: [
    {
      name: "Blue",
      variant: "blue",
      color: "bg-[#173461]",
      image: PREVIEW_IMAGES.FrameBlue,
    },
    {
      name: "Purple",
      variant: "purple",
      color: "bg-[#361b57]",
      image: PREVIEW_IMAGES.FramePurple,
    },
    {
      name: "Brown",
      variant: "brown",
      color: "bg-[#8b501c]",
      image: PREVIEW_IMAGES.FrameBrown,
    },
  ],
};

export const CLOUDY = {
  name: "Cloudy",
  theme: "cloudy",
  variants: [
    {
      name: "Evening",
      variant: "evening",
      color: "bg-blue-700",
      image: PREVIEW_IMAGES.CloudyEvening,
    },
    {
      name: "Afternoon",
      variant: "afternoon",
      color: "bg-[#0f172a]",
      image: PREVIEW_IMAGES.CloudyAfternoon,
    },
  ],
};

export const THEME_LIST = [MANDALA, STACKED, FRAME, CLOUDY];

export const FLATTENED_THEME_LIST = THEME_LIST.reduce((acc, currentValue) => {
  currentValue.variants.forEach((variant) => {
    const newObj = { ...currentValue, variant };
    acc.push(newObj);
  });
  return acc;
}, []);
