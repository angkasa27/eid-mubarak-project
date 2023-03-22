import { useState } from "react";
import { useForm } from "react-hook-form";
import { register } from "../../../../_repositories/repositories";
import validation from "../validation";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";

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
      setSuccessAlert({ message: result.message });
      router.push(ROUTES.LOGIN());
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
