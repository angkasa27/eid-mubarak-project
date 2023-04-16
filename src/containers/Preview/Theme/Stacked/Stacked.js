import PropTypes from "prop-types";
import Mosque from "@ramadhan/MosqueSilhouette1";
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
import { mosqueCard, mainCard, secondaryCard, mandalaCard } from "./variant";
import KetupatIcon from "@ramadhan/KetupatIcon";
import BulanBintangIcon from "@ramadhan/MoonStarIcon";
import MasjidIcon from "@ramadhan/MosqueIcon";
import LanternIcon from "@ramadhan/LanternIcon";
import BedugIcon from "@ramadhan/BedugIcon";
import MusicPlayer from "src/fragments/MusicPlayer";
import clsx from "clsx";
import Footer from "src/fragments/Footer";

const bodyFont = "font-poppins";

export default function Container(props) {
  const { data, name, isDemoMode } = props;

  const container = cva("", {
    variants: {
      variant: {
        dark: "bg-main text-white",
        light: "bg-amber-50 text-blue-gray-700",
      },
    },
  });

  return (
    <div className={container(data)}>
      <div className={clsx(bodyFont, "max-w-screen-sm mx-auto relative")}>
        <Main name={name} variant={data?.variant} />
        <Detail {...data} />
        <Comment isDemoMode={isDemoMode} name={name} variant={data?.variant} />
        <ClosingSection {...data} />
        <Footer />
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
          childClass="relative h-full"
          className={mosqueCard("col-span-2 row-start-1 row-end-4")({
            variant,
          })}
          padding
          shadow={false}
          variants={RightVariant}
        >
          <Mosque className="w-full h-auto mt-16 bottom-0 absolute" />
        </MotionCard>
        <MotionCard
          border={false}
          className={mainCard("col-span-2 row-span-1")({ variant })}
          padding="p-4"
          shadow={false}
          variants={UpVariant}
        >
          <div>
            <p className="body-3 font-semibold">Selamat Hari Raya</p>
            <h1 className="text-4xl font-bold text-amber-400">Idul Fitri</h1>
          </div>
        </MotionCard>
        <div className="col-span-1 row-start-1 w-full aspect-video" />
        <MotionCard
          border={false}
          className={mandalaCard("col-span-1 row-start-2 ")({
            variant,
          })}
          padding="p-4"
          shadow={false}
          variants={LeftVariant}
        >
          <p className="title-1 font-semibold text-center">01</p>
          <p className="body-1 font-semibold text-center ">Syawal</p>
        </MotionCard>
        <MotionCard
          border={false}
          childClass="flex items-center justify-center"
          className={secondaryCard("col-span-1 row-start-3 row-end-5")({
            variant,
          })}
          padding="p-4"
          shadow={false}
          variants={LeftVariant}
        >
          <p className="text-6xl font-semibold text-right">
            <span className="text-white">
              14
              <br />
              42
            </span>
            <br />H
          </p>
        </MotionCard>
        <MotionCard
          border={false}
          className={mandalaCard(
            "col-span-1 row-span-1 flex items-center justify-center"
          )({ variant })}
          padding="p-2"
          shadow={false}
          variants={ZoomVariant}
        >
          <KetupatIcon className="w-20 h-20" />
        </MotionCard>
        <MotionCard
          border={false}
          className={mainCard("col-span-2 row-span-1")({ variant })}
          padding="p-4"
          shadow={false}
          variants={LeftVariant}
        >
          <div>
            <h1 className="title-2 font-bold">
              Happy
              <span className="text-amber-400"> Eid</span>
            </h1>
            <h1 className="title-2 font-bold text-amber-400"> Mubarak!</h1>
          </div>
        </MotionCard>
        <motion.div className="col-span-3" variants={UpVariant}>
          {!!name && (
            <Card
              border={false}
              className={secondaryCard("w-full")({ variant })}
              padding="p-4"
              shadow={false}
            >
              <p className="body-1">Kepada</p>
              <p className="title-3 font-semibold">{name}</p>
            </Card>
          )}
        </motion.div>
      </motion.div>
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

  return (
    <div className="p-8 grid gap-3 grid-cols-3 w-full">
      <Card
        border={false}
        className={mandalaCard("col-span-1 flex items-center justify-center")({
          variant,
        })}
        padding="p-2"
        shadow={false}
      >
        <BulanBintangIcon className="w-20 h-20" />
      </Card>
      <Card
        border={false}
        className={mainCard("col-span-2 flex items-center")({ variant })}
        padding="p-4"
        shadow={false}
      >
        <p className="font-semibold subtitle-2">Keluarga Besar</p>
        <h1 className="title-3 font-bold text-amber-400">{data?.name}</h1>
      </Card>
      <Card
        border={false}
        className={secondaryCard("col-span-3")({ variant })}
        padding=""
        shadow={false}
      >
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
      <Card
        border={false}
        className={secondaryCard("col-span-1 flex items-center justify-center")(
          { variant }
        )}
        padding="p-4"
        shadow={false}
      >
        <p className="title-3 font-semibold">
          MENG
          <br />
          UCAP
          <br />
          KAN
        </p>
      </Card>
      <Card
        border={false}
        className={mainCard("col-span-2  flex items-center")({ variant })}
        padding="p-4"
        shadow={false}
      >
        <h1 className="title-3 font-semibold text-amber-400">
          {data?.mainQuotes}
        </h1>
      </Card>
      <Card
        border={false}
        className={mainCard("col-span-2  flex items-center")({ variant })}
        padding="p-4"
        shadow={false}
      >
        <h2 className="title-3 font-semibold">{data?.secondaryQuotes}</h2>
      </Card>

      <Card
        border={false}
        className={mandalaCard("col-span-1 flex items-center justify-center")({
          variant,
        })}
        padding="p-2"
        shadow={false}
      >
        <MasjidIcon className="w-20 h-20" />
      </Card>
      <Card
        border={false}
        className={mainCard("col-span-3")({ variant })}
        padding="p-4"
        shadow={false}
      >
        <p className="body-2 text-center">{data?.message}</p>
      </Card>
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

  return (
    <div className="p-8 grid gap-3 grid-cols-3 w-full">
      <Card
        border={false}
        className={mandalaCard("col-span-1 flex items-center justify-center")({
          variant,
        })}
        padding="p-2"
        shadow={false}
      >
        <LanternIcon className="w-20 h-20" />
      </Card>
      <Card
        border={false}
        className={secondaryCard("col-span-2 flex items-center")({ variant })}
        padding="p-4"
        shadow={false}
      >
        <h1 className="title-2 font-bold">KIRIM UCAPAN</h1>
      </Card>
      <CommentCard
        avatarColor={["bg-amber-500", "bg-light-blue-500"]}
        border={false}
        commentClass={mainCard("col-span-3")({ variant })}
        formClass={mainCard("col-span-3")({ variant })}
        isDemoMode={isDemoMode}
        name={name}
        shadow={false}
      />
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
    <div className="p-8 grid gap-3 grid-cols-3 w-full">
      <Card
        border={false}
        className={mainCard("col-span-2")({ variant })}
        padding="p-4"
        shadow={false}
      >
        <p className="body-2">{data?.closing}</p>
      </Card>
      <Card
        border={false}
        className={mandalaCard("col-span-1")({ variant })}
        padding="p-4"
        shadow={false}
      >
        <BedugIcon className="w-20 h-20" />
      </Card>
      <Card
        border={false}
        className={secondaryCard("col-span-3")({ variant })}
        padding="p-4"
        shadow={false}
      >
        <p className="font-bold subtitle-2 text-center">{data.name}</p>
      </Card>
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
