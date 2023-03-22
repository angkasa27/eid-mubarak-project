import { useEffect, useState } from "react";
import { profile } from "../../_repositories/repositories";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import useUserData from "@utils/hooks/useUserData";

const useActions = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { setFailedAlert } = usePopupAlert();
  const { getUsername } = useUserData();

  const getProfile = async () => {
    setLoading(true);
    try {
      const result = await profile(getUsername());
      setData(result.data);
    } catch (error) {
      setData({});
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return {
    data,
    loading,
  };
};

export default useActions;
