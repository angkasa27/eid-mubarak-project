import useAction from "./hooks/useAction";
import FormGenerator from "src/fragments/FormGenerator";
import clsx from "clsx";

export default function Form() {
  const { control, handleSubmit, loading, onSubmit, username, variantOption } =
    useAction();

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
        field: "select",
        control,
        label: "Varian Warna",
        name: "variant",
        disabled: loading,
        options: variantOption,
        mapValue: (item) => item.variant,
        mapLabel: (item) => (
          <div className="inline-flex items-center gap-2">
            <div className={clsx(item.color, "h-4 w-4 rounded-full border")} />
            {item.name}
          </div>
        ),
        mapSelected: (val) => {
          const selected = variantOption.find((item) => item.variant === val);
          return (
            <div className="inline-flex items-center gap-2">
              <div
                className={clsx(selected?.color, "h-4 w-4 rounded-full border")}
              />
              {selected?.name}
            </div>
          );
        },
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
