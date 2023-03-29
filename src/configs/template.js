export const MANDALA = {
  name: "Mandala",
  theme: "mandala",
  variants: [
    { name: "Indigo", variant: "indigo", color: "bg-indigo-900" },
    { name: "Purple", variant: "purple", color: "bg-purple-900" },
    { name: "Pink", variant: "pink", color: "bg-pink-900" },
    { name: "Teal", variant: "teal", color: "bg-teal-900" },
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
  variants: [{ name: "Blue", variant: "blue", color: "bg-main" }],
};

export const CLOUDY = {
  name: "Cloudy",
  theme: "cloudy",
  variants: [{ name: "Blue", variant: "blue", color: "bg-main" }],
};

export const THEME_LIST = [MANDALA, STACKED, FRAME];

export const FLATTENED_THEME_LIST = THEME_LIST.reduce((acc, currentValue) => {
  currentValue.variants.forEach((variant) => {
    const newObj = { ...currentValue, variant };
    acc.push(newObj);
  });
  return acc;
}, []);
