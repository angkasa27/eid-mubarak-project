import { useState, useEffect } from "react";
import Input from "@components/elements/Input";
import TextArea from "@components/elements/TextArea";
import Card from "@components/elements/Card";
import { Button } from "@material-tailwind/react";
import querystring from "query-string";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import clsx from "clsx";

// eslint-disable-next-line max-len
const defaultMessage = `Tanpa mengurangi rasa hormat, izinkan kami mengundang Bapak/Ibu/Saudara/i {penerima} untuk menghadiri acara pernikahan kami.\n\nBerikut link website undangan dari kami beserta informasi lengkap dari acara pernikahan kami: \n{url}\n\nMerupakan suatu kerbahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.\n\nMohon maaf perihal undangan hanya di bagikan melalui  pesan ini. Karena suasana masih pandemi diharapakan untuk menggunakan masker dan datang pada jam yang telah ditentukan.
Atas perhatiannya kami ucapkan terima kasih.\n\nKami yang berbahagia\n{pengirim}`;

export default function WhatsappShare() {
  const { setFailedAlert, setSuccessAlert } = usePopupAlert();

  const [sender, setSender] = useState("");
  const [receiverList, setReceiverList] = useState(list);
  const [customReceiver, setCustomReceiver] = useState("");
  const [message, setMessage] = useState(defaultMessage);
  const cardLink = "localhost:3000/testing";

  const onClickShare = ({ name, phone }) => {
    const url = `${cardLink}?${querystring.stringify({
      name,
    })}`;
    const text = message
      .replace("{penerima}", name)
      .replace("{url}", url)
      .replace("{pengirim}", sender);
    const obj = { phone, text };
    const link = `https://api.whatsapp.com/send?${querystring.stringify(obj)}`;

    const updatedList = receiverList.map((item) => {
      if (item.name === name) {
        return { ...item, submitted: true };
      } else {
        return item;
      }
    });
    setReceiverList(updatedList);
    return window.open(link, "_blank");
  };

  const addReceiver = () => {
    const list = customReceiver.split("\n").map((item) => {
      const [name, phone] = item.split("#");
      return { name, phone };
    });

    setCustomReceiver("");
    setReceiverList([...receiverList, ...list]);
  };

  const importFromContatcs = async () => {
    const props = ["name", "email", "tel", "address", "icon"];
    const opts = { multiple: true };

    try {
      if (!("contacts" in navigator && "ContactsManager" in window))
        throw new Error("Not supported");
      const contacts = await navigator.contacts.select(props, opts);
      const rawText = contacts
        .map((item) => `${item.name}#${item.tel}`)
        .join("\n");
      setCustomReceiver(rawText);
    } catch (error) {
      setFailedAlert({ message: error.message });
    }
  };

  const supportImportContact =
    "contacts" in navigator && "ContactsManager" in window;

  return (
    <div className="flex flex-col gap-4">
      <div className="mx-0 text-center">
        <h2 className="md:text-3xl text-2xl bold">Bagikan ke WhatsApp</h2>
      </div>
      <Card childClass="text-blue-gray-800 flex flex-col gap-4">
        <Input label="Nama Pengirim" onChange={setSender} value={sender} />
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
      <Card childClass="text-blue-gray-800 flex flex-col gap-4">
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
        <Button color="blue" onClick={() => addReceiver()}>
          Simpan
        </Button>
      </Card>
      <Card>
        <div className="text-blue-gray-800">
          <ul className="flex flex-col gap-4">
            {receiverList.map((item, i) => (
              <li className="flex items-center justify-between gap-4" key={i}>
                <p className={clsx({ "line-through": item.submitted })}>
                  {item.name} <span>({item.phone})</span>
                </p>
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
        </div>
      </Card>
    </div>
  );
}

const list = [
  {
    name: "Budi",
    phone: "6282230423647",
  },
  {
    name: "Dimas",
    phone: "6282230423647",
  },
];
