import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";

export const login = (data) => {
  const options = {
    data,
    method: "POST",
    url: SERVICES.LOGIN,
  };
  return fetch(options);
};

export const register = (data) => {
  const options = {
    data,
    method: "POST",
    url: SERVICES.REGISTER,
  };
  return fetch(options);
};
