import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";
import { getAccessToken } from "@utils/common";

const updateCard = (username, data) => {
  const options = {
    data,
    method: "PUT",
    url: SERVICES.CARD(username),
    headers: {
      Authorization: getAccessToken(),
    },
    withCancel: true,
  };
  return fetch(options);
};

export default updateCard;
