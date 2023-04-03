import { useContext } from "react";
import UserData from "src/contexts/UserData";
import { setLocalUserData } from "@utils/common";

const useUserData = () => {
  const { data, setData } = useContext(UserData);

  const getUserData = () => data || {};
  const getUsername = () => data?.username || "";

  const setUserData = (data) => {
    setData(data);
    setLocalUserData(data);
  };

  return {
    getUserData,
    getUsername,
    setUserData,
  };
};

export default useUserData;
