import React from "react";
import Card from "@components/elements/Card";
import useComment from "./useComment";
import FormGenerator from "../FormGenerator";
import PropTypes from "prop-types";
import clsx from "clsx";

export default function CommentCard(props) {
  const {
    name,
    avatarColor,
    buttonColor,
    formClass,
    commentClass,
    ...cardProps
  } = props;
  const { control, handleSubmit, onSubmit, loading } = useComment({ name });

  const getFirtsLetter = (str) => {
    const strArray = str.split(" ");
    const firstLetter = strArray[0].charAt(0);
    const secondLetter = strArray[1].charAt(0);
    return firstLetter + secondLetter;
  };

  const getRandomeColor = (color = []) => {
    const randomIndex = Math.floor(Math.random() * color.length);
    return color[randomIndex];
  };

  const formProps = {
    fields: [
      {
        field: "text",
        control,
        label: "Nama",
        name: "name",
        disabled: loading,
      },
      {
        field: "textarea",
        control,
        label: "Pesan",
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
        color: buttonColor,
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
      <Card className={clsx(formClass)} padding="p-4" {...cardProps}>
        <FormGenerator {...formProps} />
      </Card>
      <Card
        childClass="flex flex-col gap-4"
        className={clsx("max-h-[36rem] overflow-y-auto", commentClass)}
        padding="p-4"
        {...cardProps}
      >
        {COMMENT.map((item, index) => (
          <div className="w-full flex gap-2" key={index}>
            <div
              className={clsx(
                "h-10 w-10 shrink-0 mt-1 rounded-full flex items-center justify-center",
                getRandomeColor(avatarColor)
              )}
            >
              <p className="text-white body-3 bold">
                {getFirtsLetter(item.name)}
              </p>
            </div>
            <div>
              <div className="inline-flex items-baseline gap-2">
                <p className="body-3 font-bold">{item.name}</p>
                <p className="body-4 text-default-secondary">2 Jam yang lalu</p>
              </div>
              <p className="body-3">{item.message}</p>
            </div>
          </div>
        ))}
      </Card>
    </>
  );
}

CommentCard.propTypes = {
  avatarColor: PropTypes.array,
  buttonColor: PropTypes.string,
  commentClass: PropTypes.string,
  formClass: PropTypes.string,
  name: PropTypes.string,
};

CommentCard.defaultProps = {
  avatarColor: ["bg-blue-500", "bg-green-500", "bg-yellow-500"],
  buttonColor: "blue",
  commentClass: "mt-4 text-blue-gray-800",
  formClass: "text-blue-gray-800",
  name: "",
};

{
  /* <div className="flex gap-2" key={index}>
<div className="h-8 w-8 shrink-0 bg-blue-gray-500 rounded-full" />
<div className=" p-2 rounded-md rounded-tl-none bg-white w-full">
  <p className="body-3 font-bold">{item.name}</p>
  <p className="body-3">{item.message}</p>
</div>
</div> */
}

{
  /* <div className=" p-2 rounded-md   bg-gray-100 w-full" key={index}>
<div className="flex items-center gap-2">
  <div className="h-8 w-8 shrink-0 bg-blue-gray-500 rounded-full" />
  <div>
    <p className="body-3 font-bold">{item.name}</p>
    <p className="body-4 text-default-secondary">2 Jam yang lalu</p>
  </div>
</div>
<p className="body-3 pt-1">{item.message}</p>
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
