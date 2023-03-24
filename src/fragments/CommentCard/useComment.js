import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import validation from "./validation";

const useComment = ({ name }) => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, setValue } = useForm({
    resolver: validation,
    mode: "onChange",
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  useEffect(() => {
    if (name) setValue("name", name);
  }, [name]);

  return {
    control,
    handleSubmit,
    onSubmit,
    loading,
  };
};

export default useComment;
