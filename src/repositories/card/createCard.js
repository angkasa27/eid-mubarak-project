import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";
import { getAccessToken } from "@utils/common";

const createCard = (data) => {
  const options = {
    data,
    method: "POST",
    url: SERVICES.CARD,
    headers: {
      Authorization: getAccessToken(),
    },
    withCancel: true,
  };
  return fetch(options);
};

export default createCard;
