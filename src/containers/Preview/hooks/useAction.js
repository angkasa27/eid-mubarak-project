import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import showCard from "@repositories/card/showCard";
import usePopupAlert from "@utils/hooks/usePopupAlert";

const useAction = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { setFailedAlert } = usePopupAlert();

  const {
    query: { id, name },
  } = useRouter();

  const fetchDetail = async () => {
    setLoading(true);
    try {
      const res = await showCard(id);
      setData(res.data);
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchDetail();
  }, [id]);

  return { data, loading, name };
};

export default useAction;
