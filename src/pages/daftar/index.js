import Register from "@containers/Authentication/Register";
import AuthLayout from "@layouts/Adapter/AuthLayout";
import Head from "next/head";
import { Fragment } from "react";

export default function Pages() {
  return (
    <Fragment>
      <Head>
        <title>Daftar | EidMubarak!</title>
      </Head>
      <AuthLayout containers={Register} />
    </Fragment>
  );
}
