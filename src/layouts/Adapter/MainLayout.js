import Main from "../Main";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAccessToken, logout } from "@utils/common";

const MainLayout = ({ containers, verified, ...props }) => {
  const Containers = containers;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!getAccessToken() && verified) {
      logout();
    } else {
      setMounted(true);
    }

    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Main {...props}>
      <Containers />
    </Main>
  );
};

MainLayout.propTypes = {
  containers: PropTypes.func.isRequired,
  verified: PropTypes.bool,
};

MainLayout.defaultProps = {
  verified: false,
};

export default MainLayout;
