import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";
import { getAccessToken } from "@utils/common";

const removeComment = (id, data) => {
  const options = {
    data,
    method: "PUT",
    url: SERVICES.COMMENT_REMOVE(id),
    headers: {
      Authorization: getAccessToken(),
    },
    withCancel: true,
  };
  return fetch(options);
};

export default removeComment;
