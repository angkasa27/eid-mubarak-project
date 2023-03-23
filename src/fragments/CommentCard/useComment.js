import { useState } from "react";
import { useForm } from "react-hook-form";
import validation from "./validation";

const useComment = () => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm({
    resolver: validation,
    mode: "onChange",
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    loading,
  };
};

export default useComment;
