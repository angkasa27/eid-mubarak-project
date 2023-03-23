import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";

const AuthLayout = ({ containers }) => {
  const Containers = containers;
  const router = useRouter();

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id?.length < 6) router.push(ROUTES.NOT_FOUND());
  }, [id]);

  return <Containers />;
};

AuthLayout.propTypes = {
  containers: PropTypes.func.isRequired,
};

export default AuthLayout;
