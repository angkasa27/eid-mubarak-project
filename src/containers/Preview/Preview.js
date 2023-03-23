import useAction from "./hooks/useAction";
import LoadingPage from "src/fragments/LoadingPage";
import PropTypes from "prop-types";
import Mandala from "@ramadhan/Mandala2";
import Mosque from "@ramadhan//Mosque3";
import Lamp1 from "@ramadhan/Lamp1";
import Ornament1 from "@ramadhan/Ornament1";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  contentVariant2,
  UpVariant,
  FadeInVariant,
  RightVariant,
  ZoomVariant,
} from "src/configs/animation";
import CommentCard from "src/fragments/CommentCard";
import { IKImage } from "imagekitio-react";

export default function Container() {
  const { data, loading, container, height, name } = useAction();

  return (
    <>
      <Head>
        <title>{!!data?.data && `${data?.data?.name} | `}Idul Fitri 144H</title>
      </Head>
      <div className="h-screen w-full overflow-y-scroll bg-deep-purple-900 text-white overflow-x-hidden">
        {!loading && (
          <div className="h-full max-w-screen-sm mx-auto" ref={container}>
            <Main {...data} height={height} name={name} />
            <Detail {...data} height={height} />
            <Comment {...data} height={height} />
          </div>
        )}
      </div>
    </>
  );
}

function Main(props) {
  const { data, image, height, name } = props;

  const _topProps = (
    <div className="relative">
      <motion.div
        animate={{
          rotateZ: [0, 360, 0],
        }}
        className="absolute -top-16 -left-24 w-60"
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          duration: 40,
        }}
      >
        <Mandala className="h-auto w-full " />
      </motion.div>
      <motion.div
        className="absolute -top-10 right-8 w-8"
        variants={FadeInVariant}
      >
        <Lamp1 className="h-auto w-full text-amber-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute -top-16 right-32 w-8"
        variants={FadeInVariant}
      >
        <Lamp1 className="h-auto w-full text-amber-400 drop-shadow-lg" />
      </motion.div>
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <motion.div
        animate={{
          rotateZ: [0, 180, 0],
        }}
        className="absolute -bottom-24 -left-32 w-60"
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          duration: 50,
        }}
      >
        <Mandala className="h-auto w-full " />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-[40%] z-10  w-screen max-w-screen-sm md:-bottom-12"
        variants={UpVariant}
      >
        <Mosque className="h-auto w-full  drop-shadow-lg" />
      </motion.div>
    </div>
  );

  return (
    <motion.div
      animate="visible"
      className="h-screen flex flex-col justify-between"
      initial="hidden"
      variants={contentVariant2}
    >
      {_topProps}
      <motion.div
        animate="visible"
        className="px-8"
        initial="hidden"
        variants={contentVariant2}
      >
        <div>
          <motion.p className="title-3 bold" variants={RightVariant}>
            Selamat Hari Raya
          </motion.p>
          <motion.h1
            className="title-1 bold text-amber-400"
            variants={ZoomVariant}
          >
            Idul Fitri
          </motion.h1>
          <motion.p className="body-1" variants={UpVariant}>
            1 Syawal 1444H
          </motion.p>
        </div>
        <motion.div className="mt-8" variants={UpVariant}>
          {!!name && (
            <>
              <p className="body-1">Kepada</p>
              <p className="title-3 bold">{name}</p>
            </>
          )}
        </motion.div>
      </motion.div>
      {_bottomProps}
    </motion.div>
  );
}

Main.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
  image: PropTypes.object,
  name: PropTypes.string,
};

Main.defaultProps = {
  data: {},
  height: 0,
  image: {},
  name: "",
};

function Detail(props) {
  const { data, image, height } = props;

  const _topProps = (
    <div className="relative">
      <div className="absolute -top-10 right-8 w-8">
        <Lamp1 className="h-auto w-full text-blue-gray-900/20" />
      </div>
      <div className="absolute -top-16 right-32 w-8">
        <Lamp1 className="h-auto w-full text-blue-gray-900/20" />
      </div>
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <div className="absolute bottom-0 w-screen max-w-screen-sm">
        <Mosque className="h-auto w-full text-blue-gray-900/20" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-between overflow-hidden min-h-screen">
      {_topProps}
      <div className="px-8 z-10 pb-24 flex flex-col items-center text-center gap-2">
        <div className="w-24 rotate-180">
          <Ornament1 className="h-auto w-full text-[#f9be65]" />
        </div>
        <div>
          <p className="title-3">Keluarga Besar</p>
          <h1 className="title-2 bold text-amber-400">{data?.name}</h1>
        </div>
        <div className="rounded-md border-2 border-amber-400 overflow-hidden">
          <IKImage
            alt={image?.name}
            height={300}
            loading="lazy"
            lqip={{ active: true, quality: 10 }}
            path={image?.filePath}
            transformation={[
              {
                ar: "4-3",
              },
            ]}
            width={400}
          />
        </div>
        <div>
          <p className="body-1 text-amber-400">Mengucapkan</p>
          <h1 className="title-2 bold">Minal Aidin wal Faizin</h1>
          <h2 className="title-3">Mohon Maaf Lahir dan Batin</h2>
        </div>
        <div className="w-24">
          <Ornament1 className="h-auto w-full text-[#f9be65]" />
        </div>
        <p className="body-2 pt-12">{data?.message}</p>
      </div>
      {_bottomProps}
    </div>
  );
}

Detail.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
  image: PropTypes.object,
};

Detail.defaultProps = {
  data: {},
  height: 0,
  image: {},
};

function Comment(props) {
  const { data, image, height } = props;

  const _topProps = (
    <div className="relative">
      <motion.div
        animate={{
          rotateZ: [0, 360, 0],
        }}
        className="absolute -top-28 -right-28 w-60"
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          duration: 40,
        }}
      >
        <Mandala className="h-auto w-full " />
      </motion.div>
    </div>
  );

  const _bottomProps = <div className="relative" />;

  return (
    <div className="flex flex-col justify-between min-h-screen bg-blue-gray-900/20">
      {_topProps}
      <div className="px-8 z-10 py-24">
        <div className="text-center mb-8">
          <h1 className="title-2 bold text-amber-400">Kirim Ucapan</h1>
          <p className="body-3 mx-6 mt-2">
            Tanpa jabatan tangan atau pelukan hangat, masih ada simpul-simpul
            senyum dan doa-doa baik yang bisa diberikan
          </p>
        </div>
        <CommentCard />
      </div>
      {_bottomProps}
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.object,
  height: PropTypes.number,
  image: PropTypes.object,
};

Comment.defaultProps = {
  data: {},
  height: 0,
  image: {},
};
