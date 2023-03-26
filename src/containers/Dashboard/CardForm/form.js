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
        disabled: true,
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
            <div className={clsx(item.color, "h-4 w-4 rounded-md border")} />
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
        placeholder: "Masukan Nama",
        name: "data.name",
        disabled: loading,
      },
      {
        field: "text",
        control,
        label: "Quotes 1",
        placeholder: "Taqabbalallahu minna wa minkum",
        name: "data.mainQuotes",
        disabled: loading,
      },
      {
        field: "text",
        control,
        label: "Quotes 2",
        placeholder: "Semoga Allah SWT menerima amal kita",
        name: "data.secondaryQuotes",
        disabled: loading,
      },
      {
        field: "textarea",
        control,
        label: "Pesan",
        placeholder:
          "Saya dan Keluarga memohon maaf lahir batin atas segala salah & khilaf, baik disengaja maupun tidak",
        name: "data.message",
        rows: 4,
        disabled: loading,
      },
      {
        field: "textarea",
        control,
        label: "Penutup",
        placeholder: "Taqabbalallahu minna wa minkum",
        name: "data.closing",
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
    className: "flex flex-col gap-4 text-blue-gray-800",
  };
  return <FormGenerator {...formProps} />;
}
