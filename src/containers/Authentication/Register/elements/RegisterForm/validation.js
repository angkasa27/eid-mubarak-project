import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ERROR_MESSAGE } from "src/constants";

const validation = yup.object().shape({
  username: yup
    .string()
    .required(ERROR_MESSAGE.REQUIRED("Username"))
    .matches(
      /^[A-Za-z0-9]*$/,
      "Username hanya boleh berisi huruf dan angka, tanpa spasi"
    )
    .min(6, ERROR_MESSAGE.MIN_CHAR("Username", 6)),
  password: yup
    .string()
    .required(ERROR_MESSAGE.REQUIRED("Password"))
    .min(8, ERROR_MESSAGE.MIN_CHAR("Password", 8))
    .matches(/(?=.*[a-zA-Z])(?=.*[0-9])/, {
      excludeEmptyString: true,
      message: ERROR_MESSAGE.INVALID_PASSWORD_FORMAT("Password"),
    }),
  retype_password: yup
    .string()
    .required(ERROR_MESSAGE.REQUIRED("Konfirmasi Password"))
    .oneOf([yup.ref("password")], ERROR_MESSAGE.NOT_MATCH("Password")),
});

export default yupResolver(validation);
