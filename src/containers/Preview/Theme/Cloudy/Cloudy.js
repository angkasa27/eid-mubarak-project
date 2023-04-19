import PropTypes from "prop-types";
import Mosque from "@ramadhan/Mosque1";
import CloudSilhouette1 from "@ramadhan/CloudSilhouette1";
import CloudSilhouette2 from "@ramadhan/CloudSilhouette2";
import CloudSilhouette3 from "@ramadhan/CloudSilhouette3";
import Lantern1 from "@ramadhan/Lantern2";
import Moon2 from "@ramadhan/Moon2";
import { motion } from "framer-motion";
import {
  previewVariant,
  UpVariant,
  RightVariant,
  ZoomVariant,
  FadeInVariant,
  DownVariant,
} from "src/configs/animation";
import CommentCard from "src/fragments/CommentCard";
import { IKImage } from "imagekitio-react";
import { cloudCard, cloudStyle, containerCard } from "./variant";
import MusicPlayer from "src/fragments/MusicPlayer";
import clsx from "clsx";
import Footer from "src/fragments/Footer";

const headingFont = "font-berkshireSwash";
const bodyFont = "font-jakarta";

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

  const _topProps = (
    <div className="relative">
      <CloudSilhouette3
        className={cloudStyle(
          "h-auto w-full absolute -mt-1 -top-8 z-20 rotate-180"
        )({
          variant,
        })}
      />
      <motion.div variants={DownVariant}>
        <Lantern1 className="h-auto w-8 absolute top-6 left-[25%]" />
      </motion.div>
      <motion.div variants={DownVariant}>
        <Lantern1 className="h-auto w-10 absolute top-10 right-[18%]" />
      </motion.div>
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <CloudSilhouette2
        className={cloudStyle(
          "h-auto w-40 absolute -translate-x-1/2 left-1/2 bottom-6 z-20"
        )({ variant })}
      />
      <CloudSilhouette3
        className={cloudStyle("h-auto w-full absolute -bottom-6 z-20")({
          variant,
        })}
      />
      <motion.div variants={UpVariant}>
        <Moon2 className="h-auto w-72 absolute bottom-16 -translate-x-1/2 left-[48%] z-10" />
      </motion.div>
      <motion.div variants={UpVariant}>
        <Mosque className="h-auto w-40 absolute bottom-16 -translate-x-1/2 left-[67%] z-10" />
      </motion.div>
      <CloudSilhouette3 className="h-auto w-full absolute bottom-6 text-blue-gray-900/30" />

      {/* Cloud Animation */}
      <motion.div
        animate={{
          translateX: ["-55%", "-45%", "-55%"],
        }}
        className="absolute left-[85%] bottom-44"
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        variants={FadeInVariant}
      >
        <CloudSilhouette1 className={"h-auto w-36 text-white"} />
      </motion.div>
      <motion.div
        animate={{
          translateX: ["-45%", "-55%", "-45%"],
        }}
        className="absolute left-[20%] bottom-60 z-10"
        transition={{
          repeat: Infinity,
          duration: 3,
          delay: 1,
        }}
        variants={FadeInVariant}
      >
        <CloudSilhouette1 className={"h-auto w-36 text-white"} />
      </motion.div>
      <motion.div
        animate={{
          translateX: ["-43%", "-57%", "-43%"],
        }}
        className=" absolute left-1/2 bottom-72"
        transition={{
          repeat: Infinity,
          duration: 3,
          delay: 1.5,
        }}
        variants={FadeInVariant}
      >
        <CloudSilhouette1 className={"h-auto w-16 text-white"} />
      </motion.div>
    </div>
  );

  return (
    <motion.div
      animate="visible"
      className="h-screen flex flex-col justify-between"
      initial="hidden"
      variants={previewVariant}
    >
      {_topProps}
      <div className="px-8 flex flex-col items-center text-center gap-6 z-40">
        <div>
          <motion.p className="title-3 font-semibold" variants={RightVariant}>
            Selamat Hari Raya
          </motion.p>
          <motion.h1
            className={clsx("title-1", headingFont)}
            variants={ZoomVariant}
          >
            Idul Fitri
          </motion.h1>
          <motion.p className="body-1" variants={UpVariant}>
            1 Syawal 1444H
          </motion.p>
        </div>
        <motion.div className="mb-40" variants={UpVariant}>
          {!!name && (
            <>
              <p className="body-1">Kepada</p>
              <p className={clsx("title-3", headingFont)}>{name}</p>
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

  return (
    <div
      className={cloudCard("flex flex-col justify-center overflow-hidden ")({
        variant,
      })}
    >
      <div className="px-8 z-10 flex flex-col items-center text-center gap-2 py-10">
        <div className="w-20">
          <CloudSilhouette2 className="h-auto w-full text-[#f9be65]" />
        </div>
        <div>
          <p className="title-3">Keluarga Besar</p>
          <h1 className={clsx("title-2", headingFont)}>{data?.name}</h1>
        </div>
        <div className="rounded-md border-4 border-[#f9be65] overflow-hidden">
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
          <p className="body-1 ">Mengucapkan</p>
          <h1 className={clsx("title-2", headingFont)}>{data?.mainQuotes}</h1>
          <h2 className="title-3">{data?.secondaryQuotes}</h2>
        </div>
        <p className="body-2 pt-12">{data?.message}</p>
      </div>
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
  const { name, variant, isDemoMode } = props;

  const _topProps = (
    <div className="relative h-40">
      <CloudSilhouette3
        className={cloudStyle("h-auto w-full absolute -mt-1 z-20 rotate-180")({
          variant,
        })}
      />
      <Lantern1 className="h-auto w-12 absolute top-4 -translate-x-1/2 left-1/2  z-10" />
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <CloudSilhouette3 className="h-auto w-full absolute bottom-0 text-blue-gray-900/30 z-10" />
    </div>
  );

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {_topProps}
      <div className="px-8 z-20 py-24">
        <div className="text-center mb-8">
          <h1 className={clsx("title-2", headingFont)}>Kirim Ucapan</h1>
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
    <div className="flex flex-col justify-between px-8 text-center bg-blue-gray-900/30 pb-6">
      <p className="body-2 mx-6 mb-2">{data?.closing}</p>
      <p className={clsx("body-1", headingFont)}>{data.name}</p>
    </div>
  );
}

ClosingSection.propTypes = {
  data: PropTypes.object,
};

ClosingSection.defaultProps = {
  data: {},
};
