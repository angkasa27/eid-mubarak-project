import WhatsappShare from "@containers/Dashboard/WhatsappShare";
import AuthLayout from "@layouts/Adapter/AuthLayout";
import Head from "next/head";
import { Fragment } from "react";

export default function Pages() {
  return (
    <Fragment>
      <Head>
        <title>Bagikan</title>
      </Head>
      <AuthLayout containers={WhatsappShare} />
    </Fragment>
  );
}
