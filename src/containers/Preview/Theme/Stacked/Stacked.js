import PropTypes from "prop-types";
import Mandala from "@ramadhan/Mandala1";
import Mosque from "@ramadhan/Mosque3";
import { motion } from "framer-motion";
import {
  previewVariant,
  UpVariant,
  RightVariant,
  ZoomVariant,
  LeftVariant,
} from "src/configs/animation";
import CommentCard from "src/fragments/CommentCard";
import { IKImage } from "imagekitio-react";
import Card from "@components/elements/Card";
import MotionCard from "@components/elements/MotionCard";
import { cva } from "class-variance-authority";

export default function Container(props) {
  const { data, name } = props;

  const container = cva("max-w-screen-sm mx-auto", {
    variants: {
      variant: {
        dark: "bg-main",
        light: "bg-[#f7f2f2]",
      },
    },
  });

  return (
    <div className={container(data)}>
      <Main name={name} />
      <Detail {...data} />
      <Comment name={name} />
      <Footer {...data} />
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

  const container = cva("max-w-screen-sm mx-auto", {
    variants: {
      variant: {
        dark: "bg-main",
        light: "bg-[#f7f2f2]",
      },
    },
  });

  return (
    <div className="h-screen p-8 flex items-end">
      <motion.div
        animate="visible"
        className="grid gap-3 grid-cols-3 w-full"
        initial="hidden"
        variants={previewVariant}
      >
        <MotionCard
          border={false}
          className="col-span-2 row-start-1 row-end-3 bg-secondary"
          padding=""
          variants={RightVariant}
        >
          <Mosque className="w-full h-auto mt-16 text-indigo-200" />
        </MotionCard>
        <MotionCard
          border={false}
          className="col-span-2 row-span-1 bg-[#262626]"
          variants={UpVariant}
        >
          <p className="title-3 bold">Selamat Hari Raya</p>
          <h1 className="title-1 bold text-amber-400">Idul Fitri</h1>
        </MotionCard>

        <MotionCard
          border={false}
          className="col-span-1 row-start-2 row-end-4 bg-[#1f2937]"
          variants={LeftVariant}
        >
          <p className="body-1">1 Syawal</p>
          <p className="title-3 bold">1442H</p>
        </MotionCard>
        <MotionCard
          border={false}
          className="col-span-1 row-span-1 flex items-center justify-center bg-[#1f2937]"
          padding="p-3"
          variants={ZoomVariant}
        >
          <Mandala className="w-20 h-20" />
        </MotionCard>
        <MotionCard
          border={false}
          className="col-span-2 row-span-1 bg-[#262626]"
          variants={LeftVariant}
        >
          <div className="flex items-center">
            <p className="title-1 bold">Happy</p>
            <h1 className="title-1 bold text-amber-400"> Eid</h1>
          </div>
          <h1 className="title-1 bold text-amber-400"> Mubarak!</h1>
        </MotionCard>
        <motion.div className="col-span-3" variants={UpVariant}>
          {!!name && (
            <Card border={false} className="w-full bg-[#27272a]">
              <p className="body-1">Kepada</p>
              <p className="title-3 bold">{name}</p>
            </Card>
          )}
        </motion.div>
      </motion.div>
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
    <div className="h-screen p-8 flex items-end">
      <div className="grid gap-3 grid-cols-3 w-full">
        <Card border={false} className="col-span-2 bg-secondary">
          <p className="title-3 bold">Keluarga Besar</p>
          <h1 className="title-2 bold text-amber-400">{data?.name}</h1>
        </Card>
        <Card border={false} className="col-span-3 bg-secondary" padding="">
          <IKImage
            alt={image?.name}
            height="auto"
            loading="lazy"
            lqip={{ active: true, quality: 10 }}
            path={image?.filePath}
            transformation={[
              {
                ar: "4-3",
              },
            ]}
            width="100%"
          />
        </Card>
        <Card border={false} className="col-span-1 bg-secondary">
          <p className="title-3 bold text-amber-400">MENG- UCAPKAN</p>
        </Card>
        <Card border={false} className="col-span-2 bg-secondary">
          <h1 className="title-3 bold">Minal Aidin wal Faizin</h1>
        </Card>
        <Card border={false} className="col-span-2 bg-secondary">
          <h2 className="title-3 bold">Mohon Maaf Lahir dan Batin</h2>
        </Card>

        <Card border={false} className="col-span-1 bg-secondary" />
        <Card border={false} className="col-span-3 bg-secondary">
          <p className="body-2 text-center">{data?.message}</p>
        </Card>
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

  const _topProps = <div className="relative" />;

  const _bottomProps = <div className="relative" />;

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {_topProps}
      <div className="px-8 z-10 py-24">
        <div className="text-center mb-8">
          <h1 className="title-2 bold text-amber-400">Kirim Ucapan</h1>
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
    <div className="flex flex-col justify-between bg-blue-gray-900/20 px-8 text-center">
      <p className="body-2 mx-6 mb-2">{data.quotes}</p>
      <p className="subtitle-1 text-amber-400">{data.name}</p>
      <div className="mt-8">
        <p>Eid Mubarak</p>
        <p>Bikin ucapan versimu sendiri!</p>
      </div>
    </div>
  );
}

Footer.propTypes = { data: PropTypes.object };

Footer.defaultProps = { data: {} };
