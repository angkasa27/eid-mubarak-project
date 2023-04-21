import { useEffect, useState } from "react";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import detailCard from "@repositories/card/detailCard";
import useUserData from "@utils/hooks/useUserData";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";
import querystring from "query-string";

const useAction = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const { setFailedAlert, setSuccessAlert } = usePopupAlert();
  const { getUsername } = useUserData();
  const username = getUsername();
  const [cardData, setCardData] = useState({});

  const fetchDetail = async () => {
    setLoading(true);
    try {
      const { data } = await detailCard(username);
      setCardData({ ...data });
    } catch (error) {
      if (error?.code === 404) router.push(ROUTES.THEME());
      else setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const copyLink = (name) => {
    try {
      let url = cardData.link;
      if (name)
        url = `${cardData.link}?${querystring.stringify({
          name,
        })}`;
      navigator.clipboard.writeText(url);
      setSuccessAlert({ message: "Berhasil disalin!" });
      setOpenDialog(false);
    } catch (error) {
      setSuccessAlert({ message: error.message });
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return {
    loading,
    cardData,
    copyLink,
    openDialog,
    setOpenDialog,
  };
};

export default useAction;
