import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";
import { getAccessToken } from "@utils/common";

export const profile = (username) => {
  const options = {
    method: "GET",
    url: SERVICES.USER(username),
    headers: {
      Authorization: getAccessToken(),
    },
    withCancel: true,
  };
  return fetch(options);
};
