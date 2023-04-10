import { useState } from "react";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import updateTheme from "@repositories/card/updateTheme";
import useUserData from "@utils/hooks/useUserData";
import { DOMAIN } from "src/constants";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";

const useAction = () => {
  const { setFailedAlert } = usePopupAlert();
  const { getUsername } = useUserData();
  const [loading, setLoading] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState({});
  const username = getUsername();
  const router = useRouter();
  const useTab = useState(1);

  const submitTheme = async (theme, variant) => {
    setLoading(true);
    try {
      const payload = {
        link: `${DOMAIN}${username}`,
        theme,
        variant,
      };
      await updateTheme(payload, username);
      router.push(ROUTES.EDIT());
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const redirectDemo = (theme, variant) => {
    window.open(`${DOMAIN}${ROUTES.DEMO(theme, variant)}`, "_blank");
  };

  return {
    submitTheme,
    loading,
    redirectDemo,
    useTheme: [selectedTheme, setSelectedTheme],
    useTab,
  };
};

export default useAction;
