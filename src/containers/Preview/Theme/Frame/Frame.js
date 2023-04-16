import PropTypes from "prop-types";
import Mosque from "@ramadhan/MosqueSilhouette2";
import Ornament1 from "@ramadhan/Ornament1";
import CloudFrame from "@ramadhan/CloudFrame1";
import Moon1 from "@ramadhan/Moon1";
import { motion } from "framer-motion";
import {
  previewVariant,
  UpVariant,
  FadeInVariant,
  RightVariant,
  ZoomVariant,
} from "src/configs/animation";
import CommentCard from "src/fragments/CommentCard";
import { IKImage } from "imagekitio-react";
import Frame from "@ramadhan/frame";
import { componentCard, containerCard } from "./variant";
import Image from "next/image";
import MusicPlayer from "src/fragments/MusicPlayer";
import Card from "@components/elements/Card";
import clsx from "clsx";
import Footer from "src/fragments/Footer";

const headingFont = "font-cinzel font-semibold";
const bodyFont = "font-poppins";

export default function Container(props) {
  const { data, name, isDemoMode } = props;

  return (
    <div className={containerCard()(data)}>
      <div className={clsx(bodyFont, "max-w-screen-sm mx-auto relative")}>
        <Main name={name} />
        <Detail {...data} />
        <Comment isDemoMode={isDemoMode} name={name} />
        <ClosingSection {...data} />
        <Footer className="bg-main text-white" />
        <MusicPlayer music={data?.data?.music} />
      </div>
    </div>
  );
}

Container.propTypes = {
  data: PropTypes.object.isRequired,
  isDemoMode: PropTypes.bool,
  name: PropTypes.string,
};

Container.defaultProps = {
  isDemoMode: false,
  name: "",
};

function Main(props) {
  const { name } = props;

  const _topProps = (
    <div className="relative">
      <Image
        alt="topFrame"
        className="w-full h-auto absolute -top-10"
        src={Frame.TopFrame1}
      />
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <Mosque className="h-auto w-full absolute bottom-0 text-gray-900/30 z-0" />
      <CloudFrame className="h-auto w-full absolute -bottom-1" />
    </div>
  );

  return (
    <div className="h-screen flex flex-col justify-between">
      {_topProps}
      <div className="px-8 flex flex-col items-center text-center gap-6 z-10">
        <Moon1 className="h-auto w-32 my-12" />
        <div>
          <p className="title-3 font-semibold">Selamat Hari Raya</p>
          <h1 className={clsx(headingFont, "title-1")}>Idul Fitri</h1>
          <p className="body-1">1 Syawal 1444H</p>
        </div>
        <div className="">
          {!!name && (
            <>
              <p className="body-1">Kepada</p>
              <p className={clsx(headingFont, "title-3")}>{name}</p>
            </>
          )}
        </div>
      </div>
      {_bottomProps}
    </div>
  );
}

Main.propTypes = {
  name: PropTypes.string,
};

Main.defaultProps = {
  name: "",
};

function Detail(props) {
  const { data, image, variant } = props;

  const _bottomProps = (
    <div className="relative">
      <Mosque
        className={componentCard(
          "h-auto w-full absolute -bottom-6 scale-[130%] "
        )({ variant })}
      />
    </div>
  );

  return (
    <div className="flex flex-col justify-between overflow-hidden min-h-screen bg-gray-900/30">
      <div className="px-8 py-12 z-10 flex flex-col items-center text-center gap-6">
        <div className="w-24 rotate-180">
          <Ornament1 className="h-auto w-full text-[#f9be65]" />
        </div>
        <div className="">
          <p className={clsx(headingFont, "title-2")}>{data?.mainQuotes}</p>
          <h1 className="body-1">{data?.secondaryQuotes}</h1>
        </div>
        <Card className="z-10 mx-4" padding="p-3">
          <IKImage
            alt={image?.name}
            height="auto"
            loading="lazy"
            lqip={{ active: true, quality: 10 }}
            path={image?.filePath}
            transformation={[
              {
                ar: "3-4",
              },
            ]}
            width="100%"
          />
          <div className="text-blue-gray-800 mt-3">
            <h1 className="body-2">Keluarga Besar</h1>
            <h2 className={clsx(headingFont, "title-3")}>{data?.name}</h2>
          </div>
        </Card>
        <div className="w-24">
          <Ornament1 className="h-auto w-full text-[#f9be65]" />
        </div>
        <p className="body-2 ">{data?.message}</p>
      </div>
      {_bottomProps}
    </div>
  );
}

Detail.propTypes = {
  data: PropTypes.object,
  image: PropTypes.object,
  variant: PropTypes.string,
};

Detail.defaultProps = {
  data: {},
  image: {},
  variant: "",
};

function Comment(props) {
  const { name, isDemoMode } = props;

  const _bottomProps = (
    <div className="relative">
      <CloudFrame className="h-auto w-full absolute -bottom-1" />
    </div>
  );

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="px-8 z-10 py-24">
        <div className="text-center mb-8">
          <h1 className={clsx(headingFont, "title-2")}>Kirim Ucapan</h1>
          <p className="body-3 mx-6 mt-2">
            Tanpa jabatan tangan atau pelukan hangat, masih ada simpul-simpul
            senyum dan doa-doa baik yang bisa diberikan
          </p>
        </div>
        <CommentCard isDemoMode={isDemoMode} name={name} />
      </div>
      {_bottomProps}
    </div>
  );
}

Comment.propTypes = {
  isDemoMode: PropTypes.bool,
  name: PropTypes.string,
};

Comment.defaultProps = {
  isDemoMode: false,
  name: "",
};

function ClosingSection({ data }) {
  return (
    <div className="flex flex-col justify-between px-8 text-center bg-[#ffeec0] text-blue-gray-800 z-0 pb-6">
      <p className="body-2 mb-2 mt-6">{data?.closing}</p>
      <p className={clsx(headingFont, "title-3 ")}>{data.name}</p>
    </div>
  );
}

ClosingSection.propTypes = { data: PropTypes.object };

ClosingSection.defaultProps = { data: {} };
