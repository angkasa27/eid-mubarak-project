import Main from "../Main";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAccessToken, logout } from "@utils/common";
import Auth from "@layouts/Auth";

const MainLayout = ({ containers, compact }) => {
  const Containers = containers;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!getAccessToken()) {
      logout();
    } else {
      setMounted(true);
    }

    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  const Parent = compact ? Auth : Main;

  return (
    <Parent>
      <Containers />
    </Parent>
  );
};

MainLayout.propTypes = {
  compact: PropTypes.bool,
  containers: PropTypes.func.isRequired,
};

MainLayout.defaultProps = {
  compact: false,
};

export default MainLayout;
