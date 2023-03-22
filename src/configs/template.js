const TYPE = {
  BIRTHDAY: "BIRTHDAY",
};

const BIRTHDAY = {
  CUPCAKE: {
    value: "CUPCAKE",
    config: [
      {
        label: "Yellow",
        color: "yellow",
        baseColor: "bg-yellow-500",
        baseText: "text-blue-gray-900",
      },
      {
        label: "Pink",
        color: "pink",
        baseColor: "bg-pink-300",
        baseText: "text-white",
      },
    ],
    defaultConfig: {},
    defaultValue: {
      data: {},
      config: {
        label: "Yellow",
        color: "yellow",
        baseColor: "bg-yellow-500",
        baseText: "text-blue-gray-900",
      },
      theme: "CUPCAKE",
      type: "BIRTHDAY",
    },
  },
};

const BIRTHDAY_OPTIONS = [BIRTHDAY.CUPCAKE.value];

const template = { TYPE, BIRTHDAY, BIRTHDAY_OPTIONS };
export default template;
