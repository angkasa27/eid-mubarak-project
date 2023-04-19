import Login from "@containers/Authentication/Login";
import AuthLayout from "@layouts/Adapter/AuthLayout";
import Head from "next/head";
import { Fragment } from "react";

export default function Pages() {
  return (
    <Fragment>
      <Head>
        <title>Masuk | EidMubarak!</title>
      </Head>
      <AuthLayout containers={Login} />
    </Fragment>
  );
}
