import clsx from "clsx";
import React from "react";

export default function fonts() {
  const fontOption = [
    "font-jakarta",
    "font-poppins",
    "font-berkshireSwash",
    "font-grandHotel",
    "font-cinzel",
    "font-pacifico",
    "font-acme",
    "font-croissantOne",
  ];

  return (
    <div className="flex flex-col gap-4 container p-8">
      {fontOption.map((font, index) => (
        <div key={index}>
          <p>{font}</p>
          <p className={clsx(font, "title-2")}>Idul Fitri</p>
          <p className={clsx(font, "body-1")}>Taqabbalallahu minna wa minkum</p>
        </div>
      ))}
    </div>
  );
}
