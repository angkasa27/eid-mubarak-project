import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";

const getComments = (username) => {
  const options = {
    method: "GET",
    url: SERVICES.COMMENT(username),
    withCancel: true,
  };
  return fetch(options);
};

export default getComments;
