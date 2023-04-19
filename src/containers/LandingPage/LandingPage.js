import WaveSilhouette from "@ramadhan/WaveSilhouette1";
import Logo from "src/assets/svg/Logo";
import Mosque from "@ramadhan/MosqueSilhouette1";
import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { getAccessToken } from "@utils/common";
import { useRouter } from "next/router";
import { ROUTES } from "src/configs";
import { THEME_LIST } from "src/configs/template";
import { DOMAIN } from "src/constants";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="text-white overflow-x-hidden ">
      <Main />
      {/* <Feature /> */}
      <Theme />
      <div className="bg-[#121212] pt-2 pb-3">
        <p className=" text-center text-sm md:text-base text-gray-300">
          Created by{" "}
          <a
            className="hover:underline text-amber-400"
            href="https://github.com/angkasa27"
            rel="noreferrer"
            target="_blank"
          >
            angkasa27
          </a>
        </p>
      </div>
    </div>
  );
}

function Main() {
  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHasToken(!!getAccessToken());
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-main  to-indigo-900 bg-fixed">
      <div className="h-screen flex flex-col justify-between relative container">
        <div />
        <div className="z-10">
          <div className="flex items-center flex-col md:flex-row md:items-end justify-center gap-4 ">
            <Logo
              className="h-36"
              style={{
                filter:
                  "drop-shadow(0 0.1rem 0 hsla(0,0%,100%,.1)) drop-shadow(0 0 5rem hsla(0,0%,100%,.5))",
              }}
            />
            <div className="text-center">
              <h1
                className="text-5xl md:text-7xl bold mb-2"
                // style={{
                //   textShadow:
                //     "0 0.1rem 0 hsla(0,0%,100%,.1), 0 0 5rem hsla(0,0%,100%,.5)",
                // }}
              >
                EidMubarak!
              </h1>
              <p className="text-lg md:text-2xl">
                Buat ucapan lebaran mu sekarang!
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-4 md:mt-8 mb-[10vh]">
            {hasToken ? (
              <Button
                color="white"
                onClick={() => router.push(ROUTES.DASHBOARD())}
              >
                Dashboard
              </Button>
            ) : (
              <>
                <Button
                  color="white"
                  onClick={() => router.push(ROUTES.LOGIN())}
                  variant="outlined"
                >
                  Masuk
                </Button>
                <Button
                  color="white"
                  onClick={() => router.push(ROUTES.REGISTER())}
                >
                  Buat Ucapan
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="w-full">
          <Mosque className="min-w-[20rem] w-[50%] max-w-[30rem] h-auto text-main absolute bottom-12 -right-16 z-0" />
        </div>
      </div>
      <WaveSilhouette className="absolute -bottom-1 h-24 w-screen text-main -scale-x-150 md:-scale-x-100" />
    </div>
  );
}

function Feature() {
  return (
    <div className="container h-screen p-8">
      <h1 className="text-center text-2xl md:text-3xl bold">
        Sambung Silaturahmi, Sambung Kebahagiaan
      </h1>
      <p />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 mt-12">
        <div className="text-center">
          <h1 className="title-1 bold">12+</h1>
          <p>Ucapan Dibuat</p>
        </div>
        <div className="text-center">
          <h1 className="title-1 bold">12+</h1>
          <p>Ucapan Dibagikan</p>
        </div>
        <div className="text-center">
          <h1 className="title-1 bold">12+</h1>
          <p>Ucapan Dibalas</p>
        </div>
        <div className="text-center">
          <h1 className="title-1 bold">12+</h1>
          <p>Ucapan Dibalas</p>
        </div>
      </div>
    </div>
  );
}

function Theme() {
  const redirectDemo = (theme, variant) => {
    window.open(`${DOMAIN}${ROUTES.DEMO(theme, variant)}`, "_blank");
  };

  return (
    <div className="container px-8 py-16">
      <h1 className="text-center text-2xl md:text-3xl bold">
        Beragam Pilihan Tema
      </h1>
      <div className="mt-8 grid grid-cols-3 gap-2 md:gap-4 md:grid-cols-6">
        {THEME_LIST.map(({ theme, name, variants }) => (
          <div
            className="rounded-lg overflow-hidden hover:ring ring-blue-500 cursor-pointer"
            key={theme}
            onClick={() => redirectDemo(theme, variants[0].variant)}
          >
            <Image
              alt={name}
              className="w-full h-auto"
              placeholder="blur"
              src={variants[0].image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
