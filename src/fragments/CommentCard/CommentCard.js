import React from "react";
import Card from "@components/elements/Card";
import useComment from "./useComment";
import FormGenerator from "../FormGenerator";

export default function CommentCard() {
  const { control, handleSubmit, onSubmit, loading } = useComment();
  const formProps = {
    fields: [
      {
        field: "text",
        control,
        label: "Nama",
        placeholder: "Dimas Angkasa",
        name: "name",
        disabled: loading,
      },
      {
        field: "textarea",
        control,
        label: "Pesan",
        placeholder: "Semoga yang disemogakan segera tersemogakan...",
        name: "message",
        rows: 3,
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
    className: "flex flex-col gap-2",
  };

  return (
    <>
      <Card className="text-blue-gray-800" padding="p-4">
        <FormGenerator {...formProps} />
      </Card>
      <Card
        backgroundColor="bg-gray-100"
        childClass=" flex flex-col gap-2"
        className="text-blue-gray-800 mt-4 max-h-[36rem] overflow-y-auto"
        padding="p-4"
      >
        {COMMENT.map((item, index) => (
          <div className=" p-2 rounded-md  bg-white w-full" key={index}>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 shrink-0 bg-blue-gray-500 rounded-full" />
              <div>
                <p className="body-3 font-bold">{item.name}</p>
                <p className="body-4 text-default-secondary">
                  Senin, 12 Agustus 2022
                </p>
              </div>
            </div>
            <p className="body-3 pt-1">{item.message}</p>
          </div>
        ))}
      </Card>
    </>
  );
}

{
  /* <div className="flex gap-2" key={index}>
<div className="h-8 w-8 shrink-0 bg-blue-gray-500 rounded-full" />
<div className=" p-2 rounded-md rounded-tl-none bg-white w-full">
  <p className="body-3 font-bold">{item.name}</p>
  <p className="body-3">{item.message}</p>
</div>
</div> */
}

const COMMENT = [
  {
    name: "Dimas Angkasa",
    message: "Semoga yang disemogakan segera tersemogakan...",
  },
  {
    name: "Dimas Angkasa",
    message:
      "Ucapan selamat dan kebahagiaan bisa dari mana saja. Tanpa jabatan tangan atau pelukan hangat, ",
  },
  {
    name: "Dimas Angkasa",
    message:
      " masih ada simpul-simpul senyum dan doa doa baik yang kami harapkan. ",
  },
  {
    name: "Dimas Angkasa",
    message: "Semoga yang disemogakan segera tersemogakan...",
  },
  {
    name: "Dimas Angkasa",
    message:
      "Ucapan selamat dan kebahagiaan bisa dari mana saja. Tanpa jabatan tangan atau pelukan hangat, masih ada simpul-simpul senyum dan doa doa baik yang kami harapkan. ",
  },
  {
    name: "Dimas Angkasa",
    message:
      " masih ada simpul-simpul senyum dan doa doa baik yang kami harapkan. ",
  },
  {
    name: "Dimas Angkasa",
    message:
      "Ucapan selamat dan kebahagiaan bisa dari mana saja. Tanpa jabatan tangan atau pelukan hangat, masih ada simpul-simpul senyum dan doa doa baik yang kami harapkan. ",
  },
  {
    name: "Dimas Angkasa",
    message:
      "Ucapan selamat dan kebahagiaan bisa dari mana saja. Tanpa jabatan tangan atau pelukan hangat, ",
  },
  {
    name: "Dimas Angkasa",
    message:
      " masih ada simpul-simpul senyum dan doa doa baik yang kami harapkan. ",
  },
];
