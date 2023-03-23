import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";

const register = (data) => {
  const options = {
    data,
    method: "POST",
    url: SERVICES.REGISTER,
  };
  return fetch(options);
};

export default register;
