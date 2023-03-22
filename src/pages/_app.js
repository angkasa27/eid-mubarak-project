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
import { TemplateProvider } from "src/contexts/Template";
import PropTypes from "prop-types";
import PopUpAlert from "@components/elements/PopUpAlert";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: ["--plus-jakarta-sans"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const defaultClass =
    "font-jakarta text-default dark:text-white dark:bg-slate-900 bg-white";

  return (
    <Fragment>
      <Head>
        <title>Dashboard | SuratBahagia</title>
      </Head>
      <main className={clsx(plusJakartaSans.variable, defaultClass)}>
        <ThemeProvider value={theme}>
          <PopupAlertProvider>
            <UserDataProvider>
              <TemplateProvider>
                <Component {...pageProps} />
                <PopUpAlert />
              </TemplateProvider>
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
