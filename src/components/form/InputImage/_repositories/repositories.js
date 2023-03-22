import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";
import { getAccessToken } from "@utils/common";

export const updateImage = (link, data) => {
  const options = {
    data,
    method: "PUT",
    url: SERVICES.IMAGE_DETAIL(link),
    headers: {
      Authorization: getAccessToken(),
    },
    withCancel: true,
  };
  return fetch(options);
};

export const removeImage = (link, filePath) => {
  const params = {
    filePath,
  };
  const options = {
    method: "DELETE",
    url: SERVICES.IMAGE_DETAIL(link),
    params,
    headers: {
      Authorization: getAccessToken(),
    },
    withCancel: true,
  };
  return fetch(options);
};
