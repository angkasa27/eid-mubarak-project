import { useContext } from "react";
import UserData from "src/contexts/UserData";

const useUserData = () => {
  const { data } = useContext(UserData);

  const getUserData = () => data || {};
  const getUsername = () => data.username || "";

  return {
    getUserData,
    getUsername,
  };
};

export default useUserData;
