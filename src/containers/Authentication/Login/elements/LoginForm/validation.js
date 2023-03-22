import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ERROR_MESSAGE } from "src/constants";

const validation = yup.object().shape({
  username: yup
    .string()
    .required(ERROR_MESSAGE.REQUIRED("Username"))
    .min(6, ERROR_MESSAGE.MIN_CHAR("Username", 6)),
  password: yup
    .string()
    .required(ERROR_MESSAGE.REQUIRED("Password"))
    .min(8, ERROR_MESSAGE.MIN_CHAR("Password", 8)),
});

export default yupResolver(validation);
