import PropTypes from "prop-types";
import Mandala from "@ramadhan/Mandala2";
import Mosque from "@ramadhan/MosqueSilhouette1";
import Lantern from "@ramadhan/LanternSilhouette1";
import Ornament1 from "@ramadhan/Ornament1";
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
import Background from "@ramadhan/background";
import { containerCard } from "./variant";
import MusicPlayer from "src/fragments/MusicPlayer";
import clsx from "clsx";
import Footer from "src/fragments/Footer";

const headingFont = "font-pacifico";
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
        <Lantern className="h-auto w-full text-amber-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute -top-16 right-32 w-8"
        variants={FadeInVariant}
      >
        <Lantern className="h-auto w-full text-amber-400 drop-shadow-lg" />
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
        className="absolute bottom-0 left-[35%] z-10 w-[28rem]"
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
      style={{
        background: `url("${Background.Pattern1?.src}")`,
        backgroundPosition: "center",
        backgroundSize: "800px",
        backdropFilter: "opacity(0.1)",
      }}
      variants={previewVariant}
    >
      {_topProps}
      <div className="px-8">
        <div>
          <motion.p className={"title-3 font-semibold"} variants={RightVariant}>
            Selamat Hari Raya
          </motion.p>
          <motion.h1
            className={clsx(headingFont, "title-1 text-amber-400 my-2")}
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
              <p className="title-3 font-semibold">{name}</p>
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
};

Main.defaultProps = {
  name: "",
};

function Detail(props) {
  const { data, image } = props;

  const _topProps = (
    <div className="relative">
      <div className="absolute -top-10 right-8 w-8">
        <Lantern className="h-auto w-full text-blue-gray-300/5" />
      </div>
      <div className="absolute -top-16 right-32 w-8">
        <Lantern className="h-auto w-full text-blue-gray-300/5" />
      </div>
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <div className="absolute bottom-0 w-screen max-w-screen-sm">
        <Mosque className="h-auto w-full text-blue-gray-300/5" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-between overflow-hidden min-h-screen ">
      {_topProps}
      <div className="px-8 py-24 z-10 flex flex-col items-center text-center gap-2">
        <div className="w-24 rotate-180">
          <Ornament1 className="h-auto w-full text-amber-400" />
        </div>
        <div>
          <p className="title-3">Keluarga Besar</p>
          <h1 className="title-2 font-semibold text-amber-400">{data?.name}</h1>
        </div>
        <div className="rounded-md overflow-hidden">
          <IKImage
            alt={image?.name}
            height="auto"
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            path={image?.filePath}
            transformation={[
              {
                height: 400,
                width: 400,
              },
            ]}
            width="100%"
          />
        </div>
        <div>
          <p className="title-3">Mengucapkan</p>
          <h1 className={clsx(headingFont, "title-2 my-2 text-amber-400")}>
            {data?.mainQuotes}
          </h1>
          <h2 className="body-1">{data?.secondaryQuotes}</h2>
        </div>
        <div className="w-24">
          <Ornament1 className="h-auto w-full text-amber-400" />
        </div>
        <p className="body-2 pt-12">{data?.message}</p>
      </div>
      {_bottomProps}
    </div>
  );
}

Detail.propTypes = {
  data: PropTypes.object,
  image: PropTypes.object,
};

Detail.defaultProps = {
  data: {},
  image: {},
};

function Comment(props) {
  const { name, isDemoMode } = props;

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
    <div className="flex flex-col justify-between min-h-screen bg-blue-gray-300/5">
      {_topProps}
      <div className="px-8 z-10 py-24">
        <div className="text-center mb-8">
          <h1 className={"title-2 font-semibold text-amber-400"}>
            Kirim Ucapan
          </h1>
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
    <div className="flex flex-col justify-between bg-blue-gray-300/5 px-8 text-center pb-6">
      <p className="body-2 mx-6 mb-2">{data?.closing}</p>
      <p className="body-1 font-semibold text-amber-400">{data.name}</p>
    </div>
  );
}

ClosingSection.propTypes = { data: PropTypes.object };

ClosingSection.defaultProps = { data: {} };
