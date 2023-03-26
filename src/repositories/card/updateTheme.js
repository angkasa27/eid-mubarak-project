import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";
import { getAccessToken } from "@utils/common";

const updateTheme = (data, username) => {
  const options = {
    data,
    method: "PUT",
    url: SERVICES.CARD_THEME(username),
    headers: {
      Authorization: getAccessToken(),
    },
    withCancel: true,
  };
  return fetch(options);
};

export default updateTheme;
