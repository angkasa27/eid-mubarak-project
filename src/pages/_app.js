import "@styles/globals.css";
import "@styles/style.css";
import { ThemeProvider } from "@material-tailwind/react";
import Head from "next/head";
import { Fragment } from "react";
import { Plus_Jakarta_Sans } from "@next/font/google";
import clsx from "clsx";
import theme from "@styles/theme";
import { UserDataProvider } from "src/contexts/UserData";
import { PopupAlertProvider } from "src/contexts/PopupAlert";
import PropTypes from "prop-types";
import PopUpAlert from "@components/elements/PopUpAlert";
import { IKContext } from "imagekitio-react";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: ["--plus-jakarta-sans"],
  subsets: ["latin"],
});

const urlEndpoint = "https://ik.imagekit.io/sd3osdoco/";
const publicKey = "public_dH7uH0U5VmvL4AZY4KepRYWujNU=";
const authenticationEndpoint = "http://localhost:5000/image/auth";

export default function App({ Component, pageProps }) {
  const defaultClass = "font-jakarta text-default bg-slate-900";

  return (
    <Fragment>
      <Head>
        <title>Dashboard | SuratBahagia</title>
      </Head>
      <main className={clsx(plusJakartaSans.variable, defaultClass)}>
        <ThemeProvider value={theme}>
          <PopupAlertProvider>
            <UserDataProvider>
              <IKContext
                authenticationEndpoint={authenticationEndpoint}
                publicKey={publicKey}
                urlEndpoint={urlEndpoint}
              >
                <Component {...pageProps} />
                <PopUpAlert />
              </IKContext>
            </UserDataProvider>
          </PopupAlertProvider>
        </ThemeProvider>
      </main>
    </Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
