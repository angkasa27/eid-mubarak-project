import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import getComments from "@repositories/comment/getComments";
import useUserData from "@utils/hooks/useUserData";

const useActuion = () => {
  const [loading, setLoading] = useState(false);
  const { setFailedAlert, setSuccessAlert } = usePopupAlert();
  const [comments, setComments] = useState([]);
  const { getUsername } = useUserData();
  const username = getUsername();

  const getListComments = async () => {
    setLoading(true);
    try {
      const { data } = await getComments(username);
      setComments(data);
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListComments();
  }, []);

  return {
    loading,
    comments,
  };
};

export default useActuion;
