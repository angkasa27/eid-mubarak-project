let domain = "http://localhost:5000";

// const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

// if (environment === 'production') {
//   domain = 'https://apigateway.telkomdigitalsolution.co';
//   catalogDomain = 'https://apigateway.telkomdigitalsolution.co/catalog';
//   modificationOrderDomain =
//     'https://apigateway.telkomdigitalsolution.co/activation';
// } else if (environment === 'staging') {
//   catalogDomain = 'https://apigateway-staging.telkomdigitalsolution.co/catalog';
//   domain = 'https://apigateway-staging.telkomdigitalsolution.co';
//   modificationOrderDomain =
//     'https://apigateway-staging.telkomdigitalsolution.co/activation';
// } else {
//   catalogDomain = 'https://catalog-api-dev.telkomdigitalsolution.co';
//   catalogDomain = `https://apigateway-dev.telkomdigitalsolution.co/catalog`;
//   domain = 'https://apigateway-dev.telkomdigitalsolution.co';
//   modificationOrderDomain =
//     'https://apigateway-dev.telkomdigitalsolution.co/activation';
// }

const service = {
  // GENERAL
  LOGIN: `${domain}/auth/login`,
  REGISTER: `${domain}/auth/register`,
  REFRESH_TOKEN: `${domain}/auth/refresh-token`,
  USER: (id) => `${domain}/user/${id}`,
  CARD: (username) => `${domain}/card/${username}`,
  CARD_THEME: (username) => `${domain}/card/theme/${username}`,
  CARD_DETAIL: (username) => `${domain}/card/detail/${username}`,
  IMAGE_DETAIL: (username) => `${domain}/image/${username}`,
  COMMENT: (username) => `${domain}/comment/${username}`,
};

export default service;
