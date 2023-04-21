import Input from "@components/elements/Input";
import TextArea from "@components/elements/TextArea";
import Card from "@components/elements/Card";
import {
  Button,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import clsx from "clsx";
import useAction from "./hooks/useAction";
import Header from "src/fragments/Header";
import { TrashIcon, XMarkIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";
import { ROUTES } from "src/configs";

export default function WhatsappShare() {
  const {
    loading,
    name,
    onClickShare,
    useSender,
    useCustomReceiver,
    receiverList,
    addReceiver,
    importFromContatcs,
    supportImportContact,
    useMessage,
    useDialog,
    deleteReceiver,
    toBeDeleted,
    confirmDeleteReceiver,
  } = useAction();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-6 px-4">
      <Header
        className="lg:col-span-3"
        name="Share ke WhatsApp"
        routerBack={ROUTES.DASHBOARD()}
      />
      <div>
        <MessageCard
          name={name}
          useMessage={useMessage}
          useSender={useSender}
        />
        <AddReceiverCard
          addReceiver={addReceiver}
          importFromContatcs={importFromContatcs}
          supportImportContact={supportImportContact}
          useCustomReceiver={useCustomReceiver}
        />
      </div>
      <ListReceiverCard
        onClickShare={onClickShare}
        onDelete={deleteReceiver}
        receiverList={receiverList}
      />
      <DialogConfirm
        data={toBeDeleted}
        onDelete={confirmDeleteReceiver}
        useDialog={useDialog}
      />
    </div>
  );
}

function MessageCard({ useSender, useMessage, name }) {
  const [sender, setSender] = useSender;
  const [message, setMessage] = useMessage;
  return (
    <Card childClass="text-blue-gray-800 flex flex-col gap-4" className="mb-4">
      <p className="subtitle-1">Detail Pesan</p>
      <Input
        label="Nama Pengirim"
        onChange={(e) => setSender(e.target.value)}
        placeholder={name}
        value={sender}
      />
      <div>
        <TextArea
          label="Pesan"
          onChange={(e) => setMessage(e.target.value)}
          rows={10}
          value={message}
        />
        <span className="text-xs text-slate-500">
          *Gunakan
          <span className="font-bold">{" {url} "}</span>untuk menampilkan url
          ucapan
          <br />
          *Gunakan
          <span className="font-bold">{" {pengirim} "}</span>untuk menampilkan
          nama pengirim
          <br />
          *Gunakan
          <span className="font-bold">{" {penerima} "}</span>untuk menampilkan
          nama penerima
        </span>
      </div>
    </Card>
  );
}

MessageCard.propTypes = {
  name: PropTypes.string,
  useMessage: PropTypes.array,
  useSender: PropTypes.array,
};

MessageCard.defaultProps = {
  name: "",
  useMessage: [],
  useSender: [],
};

function AddReceiverCard({
  useCustomReceiver,
  addReceiver,
  importFromContatcs,
  supportImportContact,
}) {
  const [customReceiver, setCustomReceiver] = useCustomReceiver;

  return (
    <Card childClass="text-blue-gray-800 flex flex-col gap-4">
      <p className="subtitle-1">Tambah Penerima</p>
      <div>
        <TextArea
          label="Penerima"
          onChange={(e) => setCustomReceiver(e.target.value)}
          placeholder={`Nama Penerima#NomorHP\nDimas Angkasa#6281122334455\nBapak Bayu#6281122334455`}
          rows={10}
          value={customReceiver}
        />
        <span className="text-xs text-slate-500">
          *Gunakan format
          <span className="font-bold">{" Nama Penerima#NomorHP "}</span>
          <br />
          *Masukan beberapa penerima dengan enter
        </span>
      </div>
      <Button
        color="blue"
        disabled={!supportImportContact}
        onClick={() => importFromContatcs()}
      >
        Pilih Dari kontak
      </Button>
      <Button
        color="blue"
        disabled={!customReceiver}
        onClick={() => addReceiver()}
      >
        Simpan
      </Button>
    </Card>
  );
}

AddReceiverCard.propTypes = {
  addReceiver: PropTypes.func,
  importFromContatcs: PropTypes.func,
  supportImportContact: PropTypes.bool,
  useCustomReceiver: PropTypes.array,
};

AddReceiverCard.defaultProps = {
  addReceiver: () => {},
  importFromContatcs: () => {},
  supportImportContact: false,
  useCustomReceiver: [],
};

function ListReceiverCard({ onClickShare, receiverList, onDelete }) {
  return (
    <Card className="lg:col-span-2 text-blue-gray-800">
      <p className="subtitle-1">Hasil</p>
      <p className="text-xs text-slate-500">
        *Kami <span className="font-bold">tidak akan</span> menyimpan data
        penerima, sehingga daftar penerima akan
        <span className="font-bold"> hilang </span> setelah halaman di refresh
      </p>
      <p className="text-xs text-slate-500 mb-4">
        *Klik tombol
        <span className="font-bold"> Kirim </span> untuk mengirim pesan melalui
        WhatsApp
      </p>
      {receiverList.length === 0 ? (
        <p className="title-2 font-bold text-gray-300">Belum ada penerima :(</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {receiverList
            .filter((v) => !!v?.phone)
            .map((item, i) => (
              <li className="flex items-center justify-between gap-2" key={i}>
                <div className="w-full">
                  <p
                    className={clsx("font-medium body-3", {
                      "line-through": item.submitted,
                    })}
                  >
                    {item.name}{" "}
                  </p>

                  <p className="text-gray-400 body-4">({item.phone})</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    // className="w-full"
                    color="blue"
                    onClick={() => onClickShare(item)}
                    size="sm"
                  >
                    Kirim
                  </Button>
                  <IconButton
                    // className="w-full"
                    color="red"
                    onClick={() => onDelete(item)}
                    size="sm"
                  >
                    <TrashIcon className="h-4" />
                  </IconButton>
                </div>
              </li>
            ))}
        </ul>
      )}
    </Card>
  );
}

ListReceiverCard.propTypes = {
  onClickShare: PropTypes.func,
  onDelete: PropTypes.func,
  receiverList: PropTypes.array,
};

ListReceiverCard.defaultProps = {
  onClickShare: () => {},
  onDelete: () => {},
  receiverList: [],
};

function DialogConfirm({ useDialog, onDelete, data, loading }) {
  const [openDialog, setOpenDialog] = useDialog;

  return (
    <Dialog handler={setOpenDialog} open={openDialog} size="md">
      <DialogHeader className="justify-between">
        <p className="title-3">Hapus Penerima</p>{" "}
        <button onClick={() => setOpenDialog(false)}>
          <XMarkIcon className="h-5 w-5" strokeWidth={2} />
        </button>
      </DialogHeader>
      <DialogBody>
        <div className="mb-4">
          <p className="text-center">
            Apakah anda yakin ingin menghapus{" "}
            <span className="font-bold">{data?.name}</span> dari daftar
            penerima?
          </p>
        </div>
        <div className="flex gap-2 justify-center">
          <Button
            disabled={loading}
            onClick={() => setOpenDialog(false)}
            variant="outlined"
          >
            Batal
          </Button>
          <Button color="red" disabled={loading} onClick={() => onDelete()}>
            Hapus
          </Button>
        </div>
      </DialogBody>
    </Dialog>
  );
}

DialogConfirm.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  onDelete: PropTypes.func,
  useDialog: PropTypes.array,
};

DialogConfirm.defaultProps = {
  data: {},
  loading: false,
  onDelete: () => {},
  useDialog: [false, () => {}],
};
