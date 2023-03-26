export const MANDALA = {
  name: "Mandala",
  theme: "mandala",
  variants: [{ name: "Blue", variant: "blue", color: "bg-deep-purple-900" }],
};

export const STACKED = {
  name: "Stacked",
  theme: "stacked",
  variants: [
    { name: "Dark Mode", variant: "dark", color: "bg-main" },
    { name: "Light Mode", variant: "light", color: "bg-yellow-50" },
  ],
};

export const THEME_LIST = [MANDALA, STACKED];

export const FLATTENED_THEME_LIST = THEME_LIST.reduce((acc, currentValue) => {
  currentValue.variants.forEach((variant) => {
    const newObj = { ...currentValue, variant };
    acc.push(newObj);
  });
  return acc;
}, []);
