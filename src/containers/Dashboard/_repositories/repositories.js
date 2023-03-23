import fetch from "@utils/fetch";
import { SERVICES } from "src/configs";
import { getAccessToken } from "@utils/common";

export const createCard = (data) => {
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

export const detailCard = (username) => {
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

export const updateCard = (username, data) => {
  const options = {
    data,
    method: "PUT",
    url: SERVICES.CARD_DETAIL(username),
    headers: {
      Authorization: getAccessToken(),
    },
    withCancel: true,
  };
  return fetch(options);
};
