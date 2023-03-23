import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import validation from "../validation";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import {
  detailCard,
  updateCard,
  createCard,
} from "../../_repositories/repositories";
import useUserData from "@utils/hooks/useUserData";
import { DOMAIN } from "src/constants";

const useAction = () => {
  const [loading, setLoading] = useState(false);
  const { setFailedAlert, setSuccessAlert } = usePopupAlert();
  const { getUsername } = useUserData();
  const username = getUsername();

  const { control, handleSubmit, reset } = useForm({
    resolver: validation,
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      if (!values.username) {
        await createCard({
          link: `${DOMAIN}${username}`,
          ...values,
        });
      } else {
        await updateCard(username, values);
      }
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
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return { control, handleSubmit, loading, onSubmit, username };
};

export default useAction;
