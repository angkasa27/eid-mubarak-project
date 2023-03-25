export const MANDALA = {
  name: "Mandala",
  theme: "mandala",
  variants: [{ name: "Blue", variant: "blue" }],
};

export const STACKED = {
  name: "Stacked",
  theme: "stacked",
  variants: [
    { name: "Dark Mode", variant: "dark" },
    { name: "Light Mode", variant: "light" },
  ],
};

export const THEME_LIST = [
  { name: MANDALA.name, value: MANDALA.theme },
  { name: STACKED.name, value: STACKED.theme },
];
