import { useState } from "react";
import { useForm } from "react-hook-form";
import register from "@repositories/auth/register";
import validation from "../validation";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";
import { setAccessToken, setRefreshToken, setUserData } from "@utils/common";

const useActions = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setFailedAlert, setSuccessAlert } = usePopupAlert();

  const { control, handleSubmit, watch } = useForm({
    resolver: validation,
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const result = await register(values);
      const { accessToken, refreshToken, ...userData } = result.data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setUserData(userData);
      router.push(ROUTES.EDIT());
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return {
    control,
    handleSubmit,
    loading,
    onSubmit,
    username: watch("username"),
  };
};

export default useActions;
