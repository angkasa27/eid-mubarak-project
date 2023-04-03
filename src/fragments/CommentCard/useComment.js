import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import validation from "./validation";
import { useRouter } from "next/router";
import storeComment from "@repositories/comment/storeComment";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import getComments from "@repositories/comment/getComments";

const useComment = ({ name }) => {
  const [loading, setLoading] = useState(false);
  const { setFailedAlert, setSuccessAlert } = usePopupAlert();
  const [comments, setComments] = useState([]);

  const {
    query: { id },
  } = useRouter();

  const { control, handleSubmit, setValue, reset } = useForm({
    resolver: validation,
    mode: "onChange",
  });

  const onSubmit = async (value) => {
    setLoading(true);
    try {
      const { data } = await storeComment(id, value);
      reset();
      setComments([data, ...comments]);
      setSuccessAlert({ message: "Berhasil terkirim!" });
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const getListComments = async () => {
    setLoading(true);
    try {
      const { data } = await getComments(id);
      setComments(data);
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (name) setValue("name", name);
  }, [name]);

  useEffect(() => {
    getListComments();
  }, []);

  return {
    control,
    handleSubmit,
    onSubmit,
    loading,
    comments,
  };
};

export default useComment;
