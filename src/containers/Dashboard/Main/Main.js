import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";
import useAction from "./hooks/useAction";
import clsx from "clsx";

export default function Main() {
  const router = useRouter();
  const { loading, cardData, username, copyLink } = useAction();

  const MENU = [
    {
      label: "Buka Ucapan",
      onClick: () => window.open(cardData.link, "_blank"),
      className: "bg-gradient-to-br from-indigo-800 to-light-blue-500",
    },
    {
      label: "Salin Link Ucapan",
      onClick: () => copyLink(),
      className: "bg-gradient-to-br from-indigo-800 to-light-blue-500",
    },
    {
      label: "Generate QR Code",
      onClick: () => router.push(ROUTES.GENERATE_QR()),
      className: "bg-gradient-to-br from-indigo-800 to-light-blue-500",
    },
    {
      label: "Share ke Whatsapp",
      onClick: () => router.push(ROUTES.SHARE()),
      className: "bg-gradient-to-br from-green-800 to-light-blue-500",
    },
    {
      label: "Lihat Komentar",
      onClick: () => router.push(ROUTES.COMMENTS()),
      className: "bg-gradient-to-br from-indigo-800 to-light-blue-500",
    },
    {
      label: "Ubah Ucapan",
      onClick: () => router.push(ROUTES.THEME()),
      className: "bg-gradient-to-br from-indigo-800 to-light-blue-500",
    },
  ];

  return (
    <div className="py-6 px-4">
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="md:text-3xl text-2xl bold">Selamat Datang!</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {MENU.map(({ label, className, onClick }, index) => (
          <div
            className={clsx(
              "cursor-pointer rounded-lg p-4 h-36 hover:outline outline-2 outline-offset-2 outline-light-blue-500",
              className
            )}
            key={index}
            onClick={() => !loading && onClick()}
          >
            <h2 className="text-xl uppercase">
              {loading ? "Memuat..." : label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
