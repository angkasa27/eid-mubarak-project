import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import validation from "../validation";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import detailCard from "@repositories/card/detailCard";
import updateCard from "@repositories/card/updateCard";
import useUserData from "@utils/hooks/useUserData";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";
import defaultValues from "src/constants/defaultValue";

const useAction = ({ setLoadData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setFailedAlert, setSuccessAlert } = usePopupAlert();
  const { getUsername } = useUserData();
  const username = getUsername();

  const { control, handleSubmit, reset } = useForm({
    resolver: validation,
    mode: "onChange",
    defaultValues,
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await updateCard(username, values);
      setSuccessAlert({ message: "Berhasil disimpan" });
      router.push(ROUTES.DASHBOARD());
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const fetchDetail = async () => {
    setLoadData(true);
    try {
      const { data } = await detailCard(username);
      reset({ ...data });
    } catch (error) {
      if (error?.code === 404) router.push(ROUTES.THEME());
      else setFailedAlert({ message: error.message });
    } finally {
      setLoadData(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return { control, handleSubmit, loading, onSubmit, username };
};

export default useAction;
