import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { baseRedirect, getAccessToken } from "@utils/common";
import Auth from "@layouts/Auth";

const AuthLayout = ({ containers }) => {
  const Containers = containers;
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (getAccessToken()) {
      baseRedirect();
      setMount(false);
    } else {
      setMount(true);
    }
  }, []);

  return (
    mount && (
      <Auth>
        <Containers />
      </Auth>
    )
  );
};

AuthLayout.propTypes = {
  containers: PropTypes.func.isRequired,
};

export default AuthLayout;
