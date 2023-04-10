import Card from "@components/elements/Card";
import { Button } from "@material-tailwind/react";
import Header from "src/fragments/Header";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";
import useAction from "./hooks/useAction";
import Link from "next/link";
import clsx from "clsx";

export default function Main() {
  const router = useRouter();
  const { loading, cardData, username } = useAction();

  const MENU = [
    {
      label: "Salin Link Ucapan",
      onClick: () => navigator.clipboard.writeText(cardData.link),
      className: "bg-gradient-to-br from-lime-800 to-lime-300",
    },
    {
      label: "Share ke Whatsapp",
      onClick: () => router.push(ROUTES.SHARE()),
      className: "bg-gradient-to-br from-teal-800 to-teal-300",
    },
    {
      label: "Ganti Tema",
      onClick: () => router.push(ROUTES.THEME()),
      className: "bg-gradient-to-br from-blue-800 to-blue-300",
    },
    {
      label: "Ubah Data",
      onClick: () => router.push(ROUTES.EDIT()),
      className: "bg-gradient-to-br from-indigo-800 to-indigo-300",
    },
  ];

  return (
    <div className="py-6 px-4">
      <Header
        name="Selamat Datang!"
        right={
          <a href={cardData.link} rel="noreferrer" target="_blank">
            <Button size="sm">Preview</Button>
          </a>
        }
      />
      {/* <Card>
        <Button onClick={() => router.push(ROUTES.THEME())} size="sm">
          Ubah Data
        </Button>
      </Card> */}
      <div className="grid grid-cols-2 gap-4">
        {MENU.map(({ label, className, onClick }, index) => (
          <div
            className={clsx(
              "cursor-pointer rounded-lg p-4 h-36 hover:outline outline-2 outline-offset-2 outline-light-blue-500",
              className
            )}
            key={index}
            onClick={() => onClick()}
          >
            <h2 className="text-xl uppercase">{label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
