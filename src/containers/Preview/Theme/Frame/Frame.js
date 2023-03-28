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
import { containerCard } from "./variant";
import Image from "next/image";

export default function Container(props) {
  const { data, name } = props;

  return (
    <div className={containerCard("bg-[#474e7a]")(data)}>
      <div className="max-w-screen-sm mx-auto">
        <Main name={name} />
        <Detail {...data} />
        <Comment name={name} />
        <Footer {...data} />
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
      <Image
        alt="topFrame"
        className="w-full h-auto absolute -top-10"
        src={Frame.TopFrame1}
      />
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <Mosque className="h-auto w-full absolute bottom-0 text-blue-gray-900/30" />
      <CloudFrame className="h-auto w-full absolute -bottom-1" />
    </div>
  );

  return (
    <div className="h-screen flex flex-col justify-between">
      {_topProps}
      <div className="px-8 flex flex-col items-center text-center gap-6">
        <Moon1 className="h-auto w-32 my-12" />
        <div>
          <p className="title-3 bold">Selamat Hari Raya</p>
          <h1 className="title-1 bold ">Idul Fitri</h1>
          <p className="body-1">1 Syawal 1444H</p>
        </div>
        <div className="">
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

  const _topProps = (
    <div className="relative">
      <CloudFrame className="h-auto w-full absolute top-0 -scale-y-100 " />
    </div>
  );

  const _bottomProps = (
    <div className="relative">
      <Mosque className="h-auto w-full absolute -bottom-6 scale-[130%] text-[#474e7a]" />
    </div>
  );

  return (
    <div className="flex flex-col justify-between overflow-hidden min-h-screen bg-blue-gray-900/30">
      {_topProps}
      <div className="px-8 z-10 pb-24 flex flex-col items-center text-center gap-2">
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
  const { name } = props;

  const _topProps = <div className="relative" />;

  const _bottomProps = <div className="relative" />;

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {_topProps}
      <div className="px-8 z-10 py-24">
        <div className="w-24 rotate-180 mx-auto mb-4">
          <Ornament1 className="h-auto w-full text-[#f9be65]" />
        </div>
        <div className="text-center mb-8">
          <h1 className="title-2 bold ">Kirim Ucapan</h1>
          <p className="body-3 mx-6 mt-2">
            Tanpa jabatan tangan atau pelukan hangat, masih ada simpul-simpul
            senyum dan doa-doa baik yang bisa diberikan
          </p>
        </div>
        <CommentCard name={name} />

        <div className="w-24 mx-auto mt-8">
          <Ornament1 className="h-auto w-full text-[#f9be65]" />
        </div>
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
    <div className="flex flex-col justify-between px-8 text-center">
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
