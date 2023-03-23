import useAction from "./hooks/useAction";
import LoadingPage from "src/fragments/LoadingPage";
import PropTypes from "prop-types";
import Mandala from "@ramadhan/Mandala2";
import Mosque from "@ramadhan//Mosque3";
import Lamp1 from "@ramadhan/Lamp1";
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

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="relative" />

      <div className="px-4">
        <CommentCard />
      </div>
      <div className="relative" />
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
