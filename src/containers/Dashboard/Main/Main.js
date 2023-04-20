import { useRouter } from "next/router";
import { ROUTES } from "src/configs";
import useAction from "./hooks/useAction";
import clsx from "clsx";
import {
  QrCodeIcon,
  LinkIcon,
  ShareIcon,
  ChatBubbleLeftEllipsisIcon,
  PencilSquareIcon,
  DeviceTabletIcon,
} from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Button,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";
import Input from "@components/elements/Input";
import { useState } from "react";
import LoadingPage from "src/fragments/LoadingPage";

export default function Main() {
  const router = useRouter();
  const { loading, cardData, copyLink, openDialog, setOpenDialog } =
    useAction();

  const MENU = [
    {
      label: (
        <>
          Buka <br />
          Ucapan
        </>
      ),
      onClick: () => window.open(cardData.link, "_blank"),
      className: "bg-gradient-to-br from-indigo-800 to-light-blue-500",
      icon: DeviceTabletIcon,
    },
    {
      label: (
        <>
          Ubah <br />
          Ucapan
        </>
      ),
      onClick: () => router.push(ROUTES.THEME()),
      className: "bg-gradient-to-br from-indigo-800 to-light-blue-500",
      icon: PencilSquareIcon,
    },
    {
      label: (
        <>
          Salin Link <br />
          Ucapan
        </>
      ),
      // onClick: () => copyLink(),
      onClick: () => setOpenDialog(true),
      className: "bg-gradient-to-br from-indigo-800 to-light-blue-500",
      icon: LinkIcon,
    },
    {
      label: (
        <>
          Share ke <br />
          WhatsApp
        </>
      ),
      onClick: () => router.push(ROUTES.SHARE()),
      className: "bg-gradient-to-br from-green-800 to-light-blue-500",
      icon: ShareIcon,
    },
    {
      label: (
        <>
          Generate <br />
          QR Code
        </>
      ),
      onClick: () => router.push(ROUTES.GENERATE_QR()),
      className: "bg-gradient-to-br from-indigo-800 to-light-blue-500",
      icon: QrCodeIcon,
    },
    {
      label: (
        <>
          Lihat <br />
          Komentar
        </>
      ),
      onClick: () => router.push(ROUTES.COMMENTS()),
      className: "bg-gradient-to-br from-indigo-800 to-light-blue-500",
      icon: ChatBubbleLeftEllipsisIcon,
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
        {MENU.map(({ label, className, onClick, icon: Icon }, index) => (
          <div
            className={clsx(
              "cursor-pointer rounded-lg p-4 h-36 hover:outline outline-2 outline-offset-2 outline-light-blue-500 flex flex-col justify-between",
              className
            )}
            key={index}
            onClick={() => !loading && onClick()}
          >
            <Icon className="h-10 w-10" />
            <h2 className="text-xl uppercase">
              {loading ? "Memuat..." : label}
            </h2>
          </div>
        ))}
      </div>
      <DialogShare
        copyLink={copyLink}
        useDialog={[openDialog, setOpenDialog]}
      />
      <LoadingPage loading={loading} />
    </div>
  );
}

function DialogShare({ useDialog, copyLink }) {
  const [name, setName] = useState("");
  const [openDialog, setOpenDialog] = useDialog;

  return (
    <Dialog handler={setOpenDialog} open={openDialog} size="md">
      <DialogHeader className="justify-between">
        <p className="title-3">Salin Link</p>{" "}
        <button onClick={() => setOpenDialog(false)}>
          <XMarkIcon className="h-5 w-5" strokeWidth={2} />
        </button>
      </DialogHeader>
      <DialogBody>
        <div className="mb-4">
          <Input
            label="Nama Penerima"
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukan nama penerima"
            value={name}
          />
          <p className="text-xs text-slate-500">
            *Tulisan <span className="font-bold">kepada</span> akan
            disembunyikan bila nama penerima kosong
          </p>
        </div>
        <Button className="w-full" onClick={() => copyLink(name)}>
          Salin
        </Button>
      </DialogBody>
    </Dialog>
  );
}

DialogShare.propTypes = {
  copyLink: PropTypes.func,
  useDialog: PropTypes.array,
};

DialogShare.defaultProps = {
  copyLink: () => {},
  useDialog: [false, () => {}],
};
