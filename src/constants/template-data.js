/* eslint-disable max-len */
import { TEMPLATE } from "src/configs";

const DEFAULT_VALUE = {
  data: {},
  config: {
    color: "",
    baseColor: "",
  },
  type: "",
  theme: "",
};

const DEFAULT_BIRTHDAY_VALUE = {
  ...DEFAULT_VALUE,
  // data: {
  //   name: "Dimas Angkasa Nurindra",
  //   age: "20",
  //   message:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos magnam a magni porro minus, sunt sint, nemo accusantium aliquid voluptates exercitationem possimus nesciunt dolore tempora facere cum, nihil ratione? Ab?",
  // },
  // config: TEMPLATE.BIRTHDAY.CUPCAKE.config[1],
  type: TEMPLATE.TYPE.BIRTHDAY,
  theme: TEMPLATE.BIRTHDAY.CUPCAKE.value,
};

const template = { DEFAULT_VALUE, DEFAULT_BIRTHDAY_VALUE };

export default template;
