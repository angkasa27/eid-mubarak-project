import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";
import { getAccessToken } from "@utils/common";

export const updateImage = (username, data) => {
  const options = {
    data,
    method: "PUT",
    url: SERVICES.IMAGE_DETAIL(username),
    headers: {
      Authorization: getAccessToken(),
    },
    withCancel: true,
  };
  return fetch(options);
};

export const precentProccess = ({ loaded, total }) =>
  Math.round((loaded * 100) / total) || 1;

export const removeImage = (username, params) => {
  const options = {
    method: "DELETE",
    url: SERVICES.IMAGE_DETAIL(username),
    params,
    headers: {
      Authorization: getAccessToken(),
    },
    withCancel: true,
  };
  return fetch(options);
};
