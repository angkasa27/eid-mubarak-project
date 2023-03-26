import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";
import { getAccessToken } from "@utils/common";

const showCard = (username) => {
  const options = {
    method: "GET",
    url: SERVICES.CARD(username),
    withCancel: true,
  };
  return fetch(options);
};

export default showCard;
