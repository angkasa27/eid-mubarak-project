import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";
import Head from "next/head";

const AuthLayout = ({ containers, ...props }) => {
  const Containers = containers;
  const router = useRouter();

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id?.length < 6) router.push(ROUTES.NOT_FOUND());
  }, [id]);

  return (
    <>
      <Head>
        <title>Selamat Hari Raya Idul Fitri 144H</title>
      </Head>
      <Containers {...props} />
    </>
  );
};

AuthLayout.propTypes = {
  containers: PropTypes.func.isRequired,
};

export default AuthLayout;
