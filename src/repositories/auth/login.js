import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";

const login = (data) => {
  const options = {
    data,
    method: "POST",
    url: SERVICES.LOGIN,
  };
  return fetch(options);
};

export default login;
