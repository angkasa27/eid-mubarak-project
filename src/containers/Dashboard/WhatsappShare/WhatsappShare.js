import Input from "@components/elements/Input";
import TextArea from "@components/elements/TextArea";
import Card from "@components/elements/Card";
import { Button } from "@material-tailwind/react";
import clsx from "clsx";
import useAction from "./hooks/useAction";
import Header from "src/fragments/Header";

export default function WhatsappShare() {
  const {
    loading,
    cardData,
    onClickShare,
    useSender,
    useCustomReceiver,
    receiverList,
    addReceiver,
    importFromContatcs,
    supportImportContact,
    useMessage,
  } = useAction();
  const [sender, setSender] = useSender;
  const [customReceiver, setCustomReceiver] = useCustomReceiver;
  const [message, setMessage] = useMessage;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-6 px-4">
      <Header className="lg:col-span-3" name="Share ke WhatsApp" />
      <div>
        <Card
          childClass="text-blue-gray-800 flex flex-col gap-4"
          className="mb-4"
        >
          <p className="subtitle-1">Detail Pesan</p>
          <Input
            label="Nama Pengirim"
            onChange={(e) => setSender(e.target.value)}
            placeholder={cardData?.data?.name}
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
              <span className="font-bold">{" {url} "}</span>untuk menampilkan
              url ucapan
              <br />
              *Gunakan
              <span className="font-bold">{" {pengirim} "}</span>untuk
              menampilkan nama pengirim
              <br />
              *Gunakan
              <span className="font-bold">{" {penerima} "}</span>untuk
              menampilkan nama penerima
            </span>
          </div>
        </Card>
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
      </div>
      <Card className="lg:col-span-2 text-blue-gray-800">
        <p className="subtitle-1">Hasil</p>

        <p className="text-xs text-slate-500 mb-4">
          *Klik tombol bagikan untuk mengirim pesan melalui WhatsApp
        </p>
        {receiverList.length === 0 ? (
          <p className="text-4xl font-bold text-gray-300">
            Belum ada penerima :(
          </p>
        ) : (
          <ul className="flex flex-col gap-4">
            {receiverList
              .filter((v) => !!v?.phone)
              .map((item, i) => (
                <li className="flex items-center justify-between gap-4" key={i}>
                  <div>
                    <p
                      className={clsx("font-medium body-1", {
                        "line-through": item.submitted,
                      })}
                    >
                      {item.name}{" "}
                    </p>

                    <p className="text-gray-400 text-sm">({item.phone})</p>
                  </div>
                  <Button
                    color="blue"
                    onClick={() => onClickShare(item)}
                    size="sm"
                  >
                    Bagikan
                  </Button>
                </li>
              ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
