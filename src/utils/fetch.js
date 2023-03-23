import axios from "axios";
import { SERVICES } from "../configs";
import {
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  getRefreshToken,
  logout,
} from "./common";

const CancelToken = axios.CancelToken;

let cancel = {};

const fetch = ({ withCancel, ...opt }) => {
  if (cancel[opt.url] !== undefined && withCancel) {
    cancel[opt.url]();
  }

  const options = {
    cancelToken: new CancelToken(function executor(c) {
      cancel[opt.url] = c;
    }),
    ...opt,
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        const defaultError = {
          code: 500,
          status: "error",
          message: "Failed to fetch data. Please contact developer.",
        };
        if (err.message === "canceled") {
          return;
        } else if (typeof err.response === "undefined") {
          reject(defaultError);
        } else if (typeof err.response.data === "undefined") {
          reject(defaultError);
        } else if (err.response.data.message === "ACCESS_TOKEN_EXPIRED") {
          onRefreshToken(options, resolve, reject);
        } else if (err.response.data.message === "TOKEN_INVALID") {
          onRefreshToken(options, resolve, reject);
        } else {
          // eslint-disable-next-line no-console
          console.log(err);
          reject(err.response.data);
        }
      });
  });
};

export default fetch;

const onRefreshToken = async (opt, resolve, reject) => {
  try {
    const refreshTokenSuccess = await refreshToken();
    if (refreshTokenSuccess) {
      const result = await axios({
        ...opt,
        headers: {
          Authorization: getAccessToken(),
        },
      });
      resolve(result.data);
    }
  } catch (error) {
    reject(error.response.data);
  }
};

const refreshToken = async () => {
  try {
    const options = {
      method: "POST",
      url: SERVICES.REFRESH_TOKEN,
      data: {
        refreshToken: getRefreshToken(),
      },
    };

    const result = await fetch(options);

    const { accessToken, refreshToken } = result.data;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    return true;
  } catch (error) {
    logout();
    return false;
  }
};

export const cancelRequestToken = () => {
  return axios.CancelToken.source();
};

export const precentProccess = ({ loaded, total }) =>
  Math.round((loaded * 100) / total) || 1;
