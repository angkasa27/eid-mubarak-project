import PropTypes from "prop-types";
import Mosque from "@ramadhan/Mosque1";
import Ornament1 from "@ramadhan/Ornament1";
import CloudSilhouette1 from "@ramadhan/CloudSilhouette1";
import CloudSilhouette2 from "@ramadhan/CloudSilhouette2";
import CloudSilhouette3 from "@ramadhan/CloudSilhouette3";
import Lantern1 from "@ramadhan/Lantern2";
import Moon2 from "@ramadhan/Moon2";
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
import { containerCard } from "./variant";
import MusicPlayer from "src/fragments/MusicPlayer";

export default function Container(props) {
  const { data, name } = props;

  return (
    <div className={containerCard("bg-[#474e7a]")(data)}>
      <div className="max-w-screen-sm mx-auto relative">
        <Main name={name} />
        <Detail {...data} />
        <Comment name={name} />
        <Footer {...data} />
        <MusicPlayer music={data?.data?.music} />
      </div>
    </div>
  );
}

Container.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string,
};

Container.defaultProps = {
  name: "",
};

function Main(props) {
  const { name } = props;

  const _topProps = (
    <div className="relative">
      <Lantern1 className="h-auto w-12 absolute -top-20 left-16" />
      <Lantern1 className="h-auto w-16 absolute -top-16 right-16" />
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <CloudSilhouette2 className="h-auto w-40 absolute -translate-x-1/2 left-1/2 bottom-6 z-20" />
      <CloudSilhouette3 className="h-auto w-full absolute -bottom-6 z-20" />
      <Moon2 className="h-auto w-72 absolute bottom-16 -translate-x-1/2 left-[48%] z-10" />
      <Mosque className="h-auto w-40 absolute bottom-16 -translate-x-1/2 left-[67%] z-10" />
      <CloudSilhouette3 className="h-auto w-full absolute bottom-6 text-blue-gray-900/30" />

      <CloudSilhouette1 className="h-auto w-36 absolute -translate-x-1/2 left-[85%] bottom-44" />
      <CloudSilhouette1 className="h-auto w-36 absolute -translate-x-1/2 left-[20%] bottom-60 z-10" />
      <CloudSilhouette1 className="h-auto w-16 absolute -translate-x-1/2 left-1/2 bottom-72" />
    </div>
  );

  return (
    <div className="h-screen flex flex-col justify-between">
      {_topProps}
      <div className="px-8 flex flex-col items-center text-center gap-6 z-10">
        <div>
          <p className="title-3 bold">Selamat Hari Raya</p>
          <h1 className="title-1 bold ">Idul Fitri</h1>
          <p className="body-1">1 Syawal 1444H</p>
        </div>
        <div className="mb-40">
          {!!name && (
            <>
              <p className="body-1">Kepada</p>
              <p className="title-3 bold">{name}</p>
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
  const { data, image } = props;

  return (
    <div className="flex flex-col justify-center overflow-hidden bg-white text-blue-gray-800">
      <div className="px-8 z-10 flex flex-col items-center text-center gap-2 py-10">
        <div className="w-24 rotate-180">
          <Ornament1 className="h-auto w-full text-[#f9be65]" />
        </div>
        <div>
          <p className="title-3">Keluarga Besar</p>
          <h1 className="title-2 bold ">{data?.name}</h1>
        </div>
        <div className="rounded-md border-4 border-[#f9be65] overflow-hidden">
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
          <p className="body-1 ">Mengucapkan</p>
          <h1 className="title-2 bold">{data?.mainQuotes}</h1>
          <h2 className="title-3">{data?.secondaryQuotes}</h2>
        </div>
        <div className="w-24">
          <Ornament1 className="h-auto w-full text-[#f9be65]" />
        </div>
        <p className="body-2 pt-12">{data?.message}</p>
      </div>
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
  const { name } = props;

  const _topProps = (
    <div className="relative h-40">
      <CloudSilhouette3 className="h-auto w-full absolute -mt-1 z-20 rotate-180" />
      <Lantern1 className="h-auto w-12 absolute top-4 -translate-x-1/2 left-1/2  z-10" />
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <CloudSilhouette3 className="h-auto w-full absolute bottom-0 text-blue-gray-900/30" />
    </div>
  );

  return (
    <div className="flex flex-col justify-between min-h-screen ">
      {_topProps}
      <div className="px-8 z-10 py-24">
        <div className="text-center mb-8">
          <h1 className="title-2 bold ">Kirim Ucapan</h1>
          <p className="body-3 mx-6 mt-2">
            Tanpa jabatan tangan atau pelukan hangat, masih ada simpul-simpul
            senyum dan doa-doa baik yang bisa diberikan
          </p>
        </div>
        <CommentCard name={name} />
      </div>
      {_bottomProps}
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string,
};

Comment.defaultProps = {
  name: "",
};

function Footer({ data }) {
  return (
    <div className="flex flex-col justify-between px-8 text-center bg-blue-gray-900/30">
      <p className="body-2 mx-6 mb-2">{data?.closing}</p>
      <p className="subtitle-1 ">{data.name}</p>
      <div className="mt-8">
        <p>Eid Mubarak</p>
        <p>Bikin ucapan versimu sendiri!</p>
      </div>
    </div>
  );
}

Footer.propTypes = { data: PropTypes.object };

Footer.defaultProps = { data: {} };
