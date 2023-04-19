import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";

const indexCard = () => {
  const options = {
    method: "GET",
    url: SERVICES.CARD_INDEX,
    withCancel: true,
  };
  return fetch(options);
};

export default indexCard;
