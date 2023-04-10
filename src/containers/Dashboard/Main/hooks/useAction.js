import { useEffect, useState } from "react";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import detailCard from "@repositories/card/detailCard";
import useUserData from "@utils/hooks/useUserData";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";

const useAction = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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

  const copyLink = () => {
    try {
      navigator.clipboard.writeText(cardData.link);
      setSuccessAlert({ message: "Berhasil disalin!" });
    } catch (error) {
      setSuccessAlert({ message: error.message });
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return { loading, cardData, username, copyLink };
};

export default useAction;
