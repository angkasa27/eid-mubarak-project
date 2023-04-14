export const MANDALA = {
  name: "Mandala",
  theme: "mandala",
  variants: [
    { name: "Indigo", variant: "indigo", color: "bg-indigo-900" },
    { name: "Purple", variant: "purple", color: "bg-purple-900" },
    { name: "Magenta", variant: "magenta", color: "bg-pink-900" },
    { name: "Green", variant: "green", color: "bg-teal-900" },
  ],
};

export const STACKED = {
  name: "Stacked",
  theme: "stacked",
  variants: [
    { name: "Dark Mode", variant: "dark", color: "bg-main" },
    { name: "Light Mode", variant: "light", color: "bg-yellow-50" },
  ],
};

export const FRAME = {
  name: "Frame",
  theme: "frame",
  variants: [
    { name: "Blue", variant: "blue", color: "bg-[#173461]" },
    { name: "Purple", variant: "purple", color: "bg-[#361b57]" },
    { name: "Brown", variant: "brown", color: "bg-[#8b501c]" },
  ],
};

export const CLOUDY = {
  name: "Cloudy",
  theme: "cloudy",
  variants: [
    { name: "Evening", variant: "evening", color: "bg-blue-700" },
    { name: "Afternoon", variant: "afternoon", color: "bg-[#0f172a]" },
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
