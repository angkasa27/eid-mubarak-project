import { useEffect, useState } from "react";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import detailCard from "@repositories/card/detailCard";
import useUserData from "@utils/hooks/useUserData";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";
import querystring from "query-string";
import { normalizePhoneNumber } from "@utils/phoneNumber";

const useAction = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setFailedAlert, setSuccessAlert } = usePopupAlert();
  const { getUsername } = useUserData();
  const username = getUsername();
  const [cardData, setCardData] = useState({});
  const [sender, setSender] = useState("");
  const [receiverList, setReceiverList] = useState([]);
  const [customReceiver, setCustomReceiver] = useState("");
  const [message, setMessage] = useState(defaultMessage);

  const fetchDetail = async () => {
    setLoading(true);
    try {
      const { data } = await detailCard(username);
      setCardData({ ...data });
      setSender(data.data.name);
    } catch (error) {
      if (error?.code === 404) router.push(ROUTES.THEME());
      else setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const onClickShare = ({ name, phone }) => {
    const url = `${cardData.link}?${querystring.stringify({
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
    try {
      const list = customReceiver.split("\n").map((item) => {
        const [name, phone] = item.split("#");
        return { name, phone: normalizePhoneNumber(phone) };
      });

      setCustomReceiver("");
      setReceiverList([...receiverList, ...list]);
      setSuccessAlert({ message: "Berhasil menambahkan penerima" });
    } catch (error) {
      setFailedAlert({ message: error.message });
    }
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

  useEffect(() => {
    fetchDetail();
  }, []);

  return {
    loading,
    cardData,
    onClickShare,
    useSender: [sender, setSender],
    useCustomReceiver: [customReceiver, setCustomReceiver],
    useMessage: [message, setMessage],
    receiverList,
    addReceiver,
    importFromContatcs,
    supportImportContact,
  };
};

export default useAction;

// eslint-disable-next-line max-len
const defaultMessage = `Tanpa mengurangi rasa hormat, izinkan kami mengundang Bapak/Ibu/Saudara/i {penerima} untuk menghadiri acara pernikahan kami.\n\nBerikut link website undangan dari kami beserta informasi lengkap dari acara pernikahan kami: \n{url}\n\nMerupakan suatu kerbahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.\n\nMohon maaf perihal undangan hanya di bagikan melalui  pesan ini. Karena suasana masih pandemi diharapakan untuk menggunakan masker dan datang pada jam yang telah ditentukan.
Atas perhatiannya kami ucapkan terima kasih.\n\nKami yang berbahagia\n{pengirim}`;
