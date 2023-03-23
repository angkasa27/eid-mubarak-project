import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";
import { getAccessToken } from "@utils/common";

const detailCard = (username) => {
  const options = {
    method: "GET",
    url: SERVICES.CARD_DETAIL(username),
    headers: {
      Authorization: getAccessToken(),
    },
    withCancel: true,
  };
  return fetch(options);
};

export default detailCard;
