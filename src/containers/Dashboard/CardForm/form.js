import useAction from "./hooks/useAction";
import FormGenerator from "src/fragments/FormGenerator";

export default function Form(props) {
  const { control, handleSubmit, loading, onSubmit, username } =
    useAction(props);

  const formProps = {
    fields: [
      // {
      //   field: "text",
      //   control,
      //   label: "Tema",
      //   name: "theme",
      //   disabled: true,
      // },
      // {
      //   field: "text",
      //   control,
      //   label: "Varian Warna",
      //   name: "variant",
      //   disabled: true,
      // },
      {
        field: "text",
        control,
        label: "Nama",
        name: "data.name",
        disabled: loading,
        helperText: "Masukan nama lengkapmu atau nama pengirim ucapan",
      },
      {
        field: "image",
        control,
        compact: true,
        label: "Foto",
        name: "image",
        description: (
          <>
            Ukuran foto maksimal 5MB. <br />
            Foto akan dipotong menjadi persegi.
          </>
        ),
        username,
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
          "Jika jemari ini tak sempat untuk berjabat. Seiring dengan beduk yang menggema. Serta seruan takbir yang berkumandang. Tak ada hadiah terindah serta perilaku yang mulia selain maaf memaafkan. Taqabalallahu minna wa minkum",
        name: "data.message",
        helperText: `Dibawah quotes`,
        rows: 4,
        disabled: loading,
      },
      {
        field: "textarea",
        control,
        label: "Penutup",
        placeholder:
          "Mawar indah harum mewangi, aromanya menyentuh nurani Pesan Ini sebagai pengganti diri, selamat Hari Raya Idul Fitri",
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
  return (
    <>
      <FormGenerator {...formProps} />
    </>
  );
}
