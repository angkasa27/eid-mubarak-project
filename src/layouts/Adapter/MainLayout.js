import Main from "../Main";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAccessToken, logout } from "@utils/common";
import Sidebar from "@layouts/WithSidebar";

const MainLayout = ({ containers, withSidebar, ...props }) => {
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

  if (withSidebar)
    return (
      <Sidebar {...props}>
        <Containers />
      </Sidebar>
    );

  return (
    <Main {...props}>
      <Containers />
    </Main>
  );
};

MainLayout.propTypes = {
  containers: PropTypes.func.isRequired,
  withSidebar: PropTypes.bool,
};

MainLayout.defaultProps = {
  withSidebar: false,
};

export default MainLayout;
