import { useState, useEffect } from "react";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import useUserData from "@utils/hooks/useUserData";
import detailCard from "@repositories/card/detailCard";

const useActuion = () => {
  const [loading, setLoading] = useState(false);
  const { setFailedAlert, setSuccessAlert } = usePopupAlert();
  const [data, setData] = useState({});
  const { getUsername } = useUserData();
  const username = getUsername();

  const fetchDetail = async () => {
    setLoading(true);
    try {
      const { data } = await detailCard(username);
      setData({ ...data });
    } catch (error) {
      if (error?.code === 404) router.push(ROUTES.THEME());
      else setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDetail();
  }, []);

  return {
    loading,
    data,
  };
};

export default useActuion;
