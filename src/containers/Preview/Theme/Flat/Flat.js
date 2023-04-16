import PropTypes from "prop-types";
import Mosque from "@ramadhan/MosqueSilhouette3";
import Lantern from "@ramadhan/LanternSilhouette1";
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
import {
  ornamentVariant,
  containerCard,
  backgroundVariant,
  textVariant,
} from "./variant";
import MusicPlayer from "src/fragments/MusicPlayer";
import Card from "@components/elements/Card";
import clsx from "clsx";
import CloudSilhouette3 from "@ramadhan/CloudSilhouette3";
import Background from "@ramadhan/background";
import Footer from "src/fragments/Footer";

const headingFont = "font-croissantOne font-semibold";
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

  const _topProps = (
    <div className="relative">
      <Lantern
        className={ornamentVariant("absolute -top-36 left-12 h-auto w-6")({
          variant,
        })}
      />
      <Lantern
        className={ornamentVariant("absolute -top-44 left-20 h-auto w-10")({
          variant,
        })}
      />
      <Lantern
        className={ornamentVariant("absolute -top-24 left-1/3 h-auto w-6")({
          variant,
        })}
      />
      <Lantern
        className={ornamentVariant("absolute -top-36 right-32 h-auto w-6")({
          variant,
        })}
      />
      <Lantern
        className={ornamentVariant("absolute -top-44 right-12 h-auto w-10")({
          variant,
        })}
      />
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <Mosque
        className={ornamentVariant(
          "h-auto w-full absolute bottom-0 z-0 scale-125"
        )({ variant })}
      />
    </div>
  );

  return (
    <div
      className="h-screen flex flex-col justify-between overflow-x-hidden overflow-y-hidden"
      style={{
        background: `url("${Background.Pattern3?.src}")`,
        backgroundSize: "72px",
        backgroundBlendMode: "overlay",
      }}
    >
      {_topProps}
      <div className="px-8 flex flex-col items-center text-center gap-20 z-10">
        <div>
          <p className="title-3 font-semibold ">Selamat Hari Raya</p>
          <h1 className={textVariant([headingFont, "title-1"])({ variant })}>
            Idul Fitri
          </h1>
          <p className="body-1">1 Syawal 1444H</p>
          <div
            className={backgroundVariant("w-24 h-1 mx-auto mt-2")({ variant })}
          />
        </div>
        <div className="">
          {!!name && (
            <>
              <p className="body-1">Kepada</p>
              <p className={textVariant([headingFont, "title-3"])({ variant })}>
                {name}
              </p>
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
    <div
      className={backgroundVariant(
        "flex flex-col justify-between overflow-hidden min-h-screen py-10"
      )({ variant })}
    >
      <Card
        childClass="flex flex-col items-center text-center gap-6"
        className="z-10 mx-4"
      >
        <div>
          <p className="title-3">Keluarga Besar</p>
          <h1 className={textVariant("title-2 font-semibold")({ variant })}>
            {data?.name}
          </h1>
        </div>
        <div className="rounded-md overflow-hidden">
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
          <p className="title-3">Mengucapkan</p>
          <h1
            className={textVariant([headingFont, "title-2 my-2 "])({ variant })}
          >
            {data?.mainQuotes}
          </h1>
          <h2 className="body-1">{data?.secondaryQuotes}</h2>
        </div>
        <div
          className={backgroundVariant("w-24 h-1 mx-auto mt-2")({ variant })}
        />
        <p className="body-2 pt-12">{data?.message}</p>
      </Card>
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
  const { name, variant, isDemoMode } = props;

  const _bottomProps = (
    <div className="relative">
      <CloudSilhouette3 className="h-auto w-full absolute -bottom-1 text-white" />
    </div>
  );
  const _topProps = (
    <div className="relative">
      <Lantern className="absolute -top-44 left-12 h-auto w-6 text-white" />
      <Lantern className="absolute -top-56 left-20 h-auto w-10 text-white" />
      <Lantern className="absolute -top-36 left-1/3 h-auto w-6 text-white" />
      <Lantern className="absolute -top-44 right-32 h-auto w-6 text-white" />
      <Lantern className="absolute -top-56 right-12 h-auto w-10 text-white" />
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
        <div className="text-center mb-8 text-white">
          <h1 className={clsx(headingFont, "title-2")}>Kirim Ucapan</h1>
          <div className="bg-white w-24 h-1 mx-auto mt-2" />
          <p className={"body-3 mx-6 mt-2"}>
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

function ClosingSection({ data, variant }) {
  return (
    <div className="flex flex-col justify-between px-8 text-center bg-white z-0">
      <p className="body-2 mb-2 mt-6">{data?.closing}</p>
      <p className={textVariant([headingFont, "title-3 mb-6"])({ variant })}>
        {data.name}
      </p>
    </div>
  );
}

ClosingSection.propTypes = {
  data: PropTypes.object,
  variant: PropTypes.string,
};

ClosingSection.defaultProps = {
  data: {},
  variant: "",
};
