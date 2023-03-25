import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ERROR_MESSAGE } from "src/constants";

const validation = yup.object().shape({
  data: yup.object().shape({
    name: yup.string().required(ERROR_MESSAGE.REQUIRED("Nama")),
    message: yup.string().required(ERROR_MESSAGE.REQUIRED("Pesan")),
    quotes: yup.string().required(ERROR_MESSAGE.REQUIRED("Quotes")),
  }),
  variant: yup.string().required(ERROR_MESSAGE.REQUIRED("Variant")),
});

export default yupResolver(validation);
