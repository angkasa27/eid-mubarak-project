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
import SERVICES from "src/configs";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: ["--plus-jakarta-sans"],
  subsets: ["latin"],
});

const urlEndpoint = "https://ik.imagekit.io/sd3osdoco/";
const publicKey = "public_dH7uH0U5VmvL4AZY4KepRYWujNU=";
const imageAuth = "https://eid-mubarak-system.angkasa27.com/image/auth";

export default function App({ Component, pageProps }) {
  const defaultClass = "font-jakarta text-default bg-main";

  return (
    <Fragment>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
        (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "gmbat8atg7");
      `,
        }}
        id="microsoft-clarity"
        strategy="afterInteractive"
      />
      <Head>
        <title>Dashboard | SuratBahagia</title>
      </Head>
      <main className={clsx(plusJakartaSans.variable, defaultClass)}>
        <ThemeProvider value={theme}>
          <PopupAlertProvider>
            <UserDataProvider>
              <IKContext
                authenticationEndpoint={imageAuth}
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
