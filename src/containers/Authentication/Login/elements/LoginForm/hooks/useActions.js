import { useState } from "react";
import { useForm } from "react-hook-form";
import login from "@repositories/auth/login";
import validation from "../validation";
import { setAccessToken, setRefreshToken, baseRedirect } from "@utils/common";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import useUserData from "@utils/hooks/useUserData";

const useActions = () => {
  const [loading, setLoading] = useState(false);
  const { setFailedAlert } = usePopupAlert();
  const { setUserData } = useUserData();
  const { control, handleSubmit } = useForm({
    resolver: validation,
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const result = await login(values);
      const { accessToken, refreshToken, ...userData } = result.data;

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setUserData(userData);
      baseRedirect();
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
  };
};

export default useActions;
