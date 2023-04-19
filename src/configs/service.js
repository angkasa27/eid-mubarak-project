let domain = "https://api-eid-mubarak.angkasa27.com";

const service = {
  // GENERAL
  LOGIN: `${domain}/auth/login`,
  REGISTER: `${domain}/auth/register`,
  REFRESH_TOKEN: `${domain}/auth/refresh-token`,
  USER: (id) => `${domain}/user/${id}`,
  CARD: (username) => `${domain}/card/${username}`,
  CARD_INDEX: `${domain}/card/username/index`,
  CARD_THEME: (username) => `${domain}/card/theme/${username}`,
  CARD_DETAIL: (username) => `${domain}/card/detail/${username}`,
  IMAGE_DETAIL: (username) => `${domain}/image/${username}`,
  IMAGE_AUTH: `${domain}/image/auth`,
  COMMENT: (username) => `${domain}/comment/${username}`,
};

export default service;
