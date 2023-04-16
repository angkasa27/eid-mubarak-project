import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ERROR_MESSAGE } from "src/constants";

const validation = yup.object().shape({
  data: yup.object().shape({
    name: yup.string().required(ERROR_MESSAGE.REQUIRED("Nama")),
    message: yup.string().required(ERROR_MESSAGE.REQUIRED("Pesan")),
    mainQuotes: yup.string().required(ERROR_MESSAGE.REQUIRED("Quotes")),
    secondaryQuotes: yup.string().required(ERROR_MESSAGE.REQUIRED("Quotes")),
    closing: yup.string().required(ERROR_MESSAGE.REQUIRED("Penutup")),
  }),
  variant: yup.string().required(ERROR_MESSAGE.REQUIRED("Variant")),
  image: yup.object().required(ERROR_MESSAGE.REQUIRED("Foto")),
});

export default yupResolver(validation);
