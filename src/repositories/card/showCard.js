import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";

const showCard = (username) => {
  const options = {
    method: "GET",
    url: SERVICES.CARD(username),
    withCancel: true,
  };
  return fetch(options);
};

export default showCard;
