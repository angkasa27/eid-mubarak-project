import useAction from "./hooks/useAction";
import FormGenerator from "src/fragments/FormGenerator";

export default function Form() {
  const { control, handleSubmit, loading, onSubmit, username } = useAction();

  const formProps = {
    fields: [
      {
        field: "text",
        control,
        label: "Tema",
        name: "theme",
        disabled: loading,
      },
      {
        field: "image",
        control,
        label: "Foto",
        name: "image",
        helperText: "Upload foto",
        username,
      },
      {
        field: "text",
        control,
        label: "Nama",
        placeholder: "Dimas Angkasa",
        name: "data.name",
        disabled: loading,
      },
      {
        field: "textarea",
        control,
        label: "Pesan",
        placeholder: "Semoga yang disemogakan segera tersemogakan...",
        name: "data.message",
        rows: 4,
        disabled: loading,
      },
      {
        field: "textarea",
        control,
        label: "Quotes",
        placeholder: "Semoga yang disemogakan segera tersemogakan...",
        name: "data.quotes",
        rows: 2,
        disabled: loading,
      },
    ],
    buttons: [
      {
        disabled: loading,
        type: "submit",
        children: "Simpan",
      },
    ],
    // buttonContainer: {
    //   className: "gap-6",
    // },
    handleSubmit,
    onSubmit,
    className: "flex flex-col gap-4",
  };
  return <FormGenerator {...formProps} />;
}
