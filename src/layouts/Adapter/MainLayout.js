import Main from "../Main";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAccessToken, logout } from "@utils/common";

const MainLayout = ({ containers, ...props }) => {
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

  return (
    <Main {...props}>
      <Containers />
    </Main>
  );
};

MainLayout.propTypes = {
  containers: PropTypes.func.isRequired,
};

MainLayout.defaultProps = {};

export default MainLayout;
