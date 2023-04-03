import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";

const storeComment = (username, data) => {
  const options = {
    data,
    method: "POST",
    url: SERVICES.COMMENT(username),
    withCancel: true,
  };
  return fetch(options);
};

export default storeComment;
