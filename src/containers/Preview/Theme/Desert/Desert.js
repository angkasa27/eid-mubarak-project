import PropTypes from "prop-types";
import Moon3 from "@ramadhan/Moon3";
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
import { backgroundVariant, containerCard } from "./variant";
import MusicPlayer from "src/fragments/MusicPlayer";
import Card from "@components/elements/Card";
import clsx from "clsx";
import Footer from "src/fragments/Footer";
import CamelSilhouette from "@ramadhan/CamelSilhouette1";
import PalmSilhouette from "@ramadhan/PalmSilhouette1";
import WaveSilhouette from "@ramadhan/WaveSilhouette1";

const headingFont = "font-cinzel font-semibold";
const bodyFont = "font-poppins";

export default function Container(props) {
  const { data, name, isDemoMode } = props;

  return (
    <div className={containerCard()(data)}>
      <div className={clsx(bodyFont, "max-w-screen-sm mx-auto relative")}>
        <Main name={name} variant={data?.variant} />
        <Detail {...data} />
        <Comment isDemoMode={isDemoMode} name={name} variant={data?.variant} />
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
  const { name, variant } = props;
  // eslint-disable-next-line object-curly-spacing
  const blink = { opacity: [1, 0, 1] };

  const _topProps = (
    <div className="relative">
      <motion.div
        animate={blink}
        className="absolute top-[8vh] right-[15%] h-0.5 w-0.5 rounded-full bg-white"
        transition={{
          delay: 3,
          repeat: Infinity,
          ease: "easeOut",
          duration: 4,
        }}
      />
      <motion.div
        animate={blink}
        className="absolute top-[18vh] right-[36%] h-0.5 w-0.5 rounded-full bg-white"
        transition={{
          delay: 1,
          repeat: Infinity,
          ease: "easeOut",
          duration: 4,
        }}
      />
      <motion.div
        animate={blink}
        className="absolute top-[33vh] right-[10%] h-0.5 w-0.5 rounded-full bg-white"
        transition={{
          delay: 2,
          repeat: Infinity,
          ease: "easeOut",
          duration: 4,
        }}
      />
      <motion.div
        animate={blink}
        className="absolute top-[16vh] left-[10%] h-0.5 w-0.5 rounded-full bg-white"
        transition={{
          delay: 4,
          repeat: Infinity,
          ease: "easeOut",
          duration: 4,
        }}
      />
      <motion.div
        animate={blink}
        className="absolute top-[38vh] left-[17%] h-0.5 w-0.5 rounded-full bg-white"
        transition={{
          delay: 2,
          repeat: Infinity,
          ease: "easeOut",
          duration: 4,
        }}
      />
      <motion.div
        animate={blink}
        className="absolute top-[5vh] left-[36%] h-0.5 w-0.5 rounded-full bg-white"
        transition={{
          delay: 3,
          repeat: Infinity,
          ease: "easeOut",
          duration: 4,
        }}
      />
      <motion.div
        animate={blink}
        className="absolute bottom-[24vh] left-[22%] h-0.5 w-0.5 rounded-full bg-white"
        transition={{
          delay: 1,
          repeat: Infinity,
          ease: "easeOut",
          duration: 4,
        }}
      />
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <motion.div variants={RightVariant}>
        <PalmSilhouette className="h-auto w-36 absolute bottom-10 left-0 text-gray-900" />
      </motion.div>
      <CamelSilhouette className="h-auto w-full absolute bottom-0 text-gray-900" />
    </div>
  );

  return (
    <motion.div
      animate="visible"
      className={backgroundVariant("h-screen flex flex-col justify-between")({
        variant,
      })}
      initial="hidden"
      variants={previewVariant}
    >
      {_topProps}
      <div className="px-8 flex flex-col items-center text-center gap-6 z-10 mb-[20vh]">
        <motion.div variants={FadeInVariant}>
          <Moon3 className="h-auto w-24 mb-12" />
        </motion.div>
        <div>
          <motion.p className="title-3 font-semibold" variants={UpVariant}>
            Selamat Hari Raya
          </motion.p>
          <motion.h1
            className={clsx(headingFont, "title-1")}
            variants={ZoomVariant}
          >
            Idul Fitri
          </motion.h1>
          <motion.p className="body-1" variants={RightVariant}>
            1 Syawal 1444H
          </motion.p>
        </div>
        <motion.div variants={UpVariant}>
          {!!name && (
            <>
              <p className="body-1">Kepada</p>
              <p className={clsx(headingFont, "title-3")}>{name}</p>
            </>
          )}
        </motion.div>
      </div>
      {_bottomProps}
    </motion.div>
  );
}

Main.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.string,
};

Main.defaultProps = {
  name: "",
  variant: "",
};

function Detail(props) {
  const { data, image, variant } = props;

  const _bottomProps = <div className="relative" />;

  return (
    <div className="flex flex-col justify-between overflow-hidden min-h-screen">
      <div className="px-8 py-12 z-10 flex flex-col items-center text-center gap-6">
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
  const { name, isDemoMode, variant } = props;

  const _topProps = (
    <div className="relative">
      <WaveSilhouette className="h-auto w-full rotate-180 text-gray-900 scale-125" />
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <PalmSilhouette className="h-auto w-36 absolute -scale-x-100 bottom-12 right-0 text-gray-900" />
      <WaveSilhouette className="h-auto w-full text-gray-900 -scale-x-125" />
    </div>
  );

  return (
    <div
      className={backgroundVariant(
        "flex flex-col justify-between min-h-screen"
      )({ variant })}
    >
      {_topProps}
      <div className="px-8 z-10 py-24">
        <Moon3 className="mx-auto h-auto w-12 mb-6" />
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
  variant: PropTypes.string,
};

Comment.defaultProps = {
  isDemoMode: false,
  name: "",
  variant: "",
};

function ClosingSection({ data }) {
  return (
    <div className="flex flex-col justify-between px-8 text-center z-0 pb-6">
      <p className="body-2 mb-2 mt-6">{data?.closing}</p>
      <p className={clsx(headingFont, "title-3 ")}>{data.name}</p>
    </div>
  );
}

ClosingSection.propTypes = { data: PropTypes.object };

ClosingSection.defaultProps = { data: {} };
