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
        disabled: true,
      },
      {
        field: "text",
        control,
        label: "Variant Warna",
        name: "variant",
        disabled: true,
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
        helperText: `Dibawah atau setelah kata "Mengucapkan ..."`,
        name: "data.mainQuotes",
        disabled: loading,
      },
      {
        field: "text",
        control,
        label: "Quotes 2",
        placeholder: "Semoga Allah SWT menerima amal kita",
        helperText: `Dibawah atau setelah quotes 1`,
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
        helperText: `Dibawah quotes`,
        rows: 4,
        disabled: loading,
      },
      {
        field: "textarea",
        control,
        label: "Penutup",
        placeholder: "Taqabbalallahu minna wa minkum",
        helperText: `Berada di paling bawah ucapan`,
        name: "data.closing",
        rows: 2,
        disabled: loading,
      },
      {
        field: "text",
        control,
        label: "Background musik",
        placeholder: "https://youtu.be/b-4xoVoAldA",
        helperText: `Background musik dari link youtube`,
        name: "data.music",
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
