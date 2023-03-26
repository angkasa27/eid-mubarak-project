import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import validation from "../validation";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import detailCard from "@repositories/card/detailCard";
import updateCard from "@repositories/card/updateCard";
import createCard from "@repositories/card/updateTheme";
import useUserData from "@utils/hooks/useUserData";
import { DOMAIN } from "src/constants";
import { THEME_LIST } from "src/configs/template";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";

const useAction = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [variantOption, setVariantOption] = useState([]);
  const { setFailedAlert, setSuccessAlert } = usePopupAlert();
  const { getUsername } = useUserData();
  const username = getUsername();

  const { control, handleSubmit, reset, setValue } = useForm({
    resolver: validation,
    mode: "onChange",
  });

  const updateOption = (theme) => {
    const themeData = THEME_LIST.find((item) => item.theme === theme);
    setVariantOption(themeData?.variants);
    setValue("variant", themeData?.variants[0].variant);
  };

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      // if (!values.username) {
      //   await createCard({
      //     link: `${DOMAIN}${username}`,
      //     ...values,
      //   });
      // } else {
      await updateCard(username, values);
      // }
      setSuccessAlert({ message: "Berhasil disimpan" });
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const fetchDetail = async () => {
    setLoading(true);
    try {
      const { data } = await detailCard(username);
      reset({ ...data });
      updateOption(data.theme);
    } catch (error) {
      if (error?.code === 404) router.push(ROUTES.THEME());
      else setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return { control, handleSubmit, loading, onSubmit, username, variantOption };
};

export default useAction;
