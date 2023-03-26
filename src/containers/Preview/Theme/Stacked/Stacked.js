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
import { mosqueCard, mainCard, secondaryCard, mandalaCard } from "./variant";

export default function Container(props) {
  const { data, name } = props;

  const container = cva("", {
    variants: {
      variant: {
        dark: "bg-main text-white",
        light: "bg-amber-50 text-blue-gray-800",
      },
    },
  });

  return (
    <div className={container(data)}>
      <div className="max-w-screen-sm mx-auto">
        <Main name={name} variant={data?.variant} />
        <Detail {...data} />
        <Comment name={name} variant={data?.variant} />
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
          className={mosqueCard("col-span-2 row-start-1 row-end-3")({
            variant,
          })}
          padding
          shadow={false}
          variants={RightVariant}
        >
          <Mosque className="w-full h-auto mt-16 " />
        </MotionCard>
        <MotionCard
          border={false}
          className={mainCard("col-span-2 row-span-1")({ variant })}
          shadow={false}
          variants={UpVariant}
        >
          <p className="title-3 bold">Selamat Hari Raya</p>
          <h1 className="title-1 bold text-amber-400">Idul Fitri</h1>
        </MotionCard>

        <MotionCard
          border={false}
          className={secondaryCard("col-span-1 row-start-2 row-end-4")({
            variant,
          })}
          shadow={false}
          variants={LeftVariant}
        >
          <p className="body-1">1 Syawal</p>
          <p className="title-3 bold">1442H</p>
        </MotionCard>
        <MotionCard
          border={false}
          className={mandalaCard(
            "col-span-1 row-span-1 flex items-center justify-center"
          )({ variant })}
          padding="p-3"
          shadow={false}
          variants={ZoomVariant}
        >
          <Mandala className="w-20 h-20" />
        </MotionCard>
        <MotionCard
          border={false}
          className={mainCard("col-span-2 row-span-1")({ variant })}
          shadow={false}
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
            <Card
              border={false}
              className={secondaryCard("w-full")({ variant })}
              shadow={false}
            >
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
        className={mandalaCard("col-span-1")({ variant })}
        shadow={false}
      />
      <Card
        border={false}
        className={mainCard("col-span-2")({ variant })}
        shadow={false}
      >
        <p className="title-3 bold">Keluarga Besar</p>
        <h1 className="title-2 bold text-amber-400">{data?.name}</h1>
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
        className={secondaryCard("col-span-1")({ variant })}
        shadow={false}
      >
        <p className="title-3 bold">MENGU- CAPKAN</p>
      </Card>
      <Card
        border={false}
        className={mainCard("col-span-2")({ variant })}
        shadow={false}
      >
        <h1 className="title-3 bold">{data?.mainQuotes}</h1>
      </Card>
      <Card
        border={false}
        className={mainCard("col-span-2")({ variant })}
        shadow={false}
      >
        <h2 className="title-3 bold">{data?.secondaryQuotes}</h2>
      </Card>

      <Card
        border={false}
        className={mandalaCard("col-span-1")({ variant })}
        shadow={false}
      />
      <Card
        border={false}
        className={mainCard("col-span-3")({ variant })}
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
  const { name, variant } = props;

  return (
    <div className="p-8 grid gap-3 grid-cols-3 w-full">
      <Card
        border={false}
        className={mandalaCard("col-span-1")({ variant })}
        shadow={false}
      />
      <Card
        border={false}
        className={secondaryCard("col-span-2")({ variant })}
        shadow={false}
      >
        <h1 className="title-2 bold">KIRIM UCAPAN</h1>
      </Card>
      <CommentCard
        avatarColor={["bg-amber-500", "bg-light-blue-500"]}
        border={false}
        commentClass="col-span-3"
        formClass="col-span-3"
        name={name}
        shadow={false}
      />
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.string,
};

Comment.defaultProps = {
  name: "",
  variant: "",
};

function Footer({ data, variant }) {
  return (
    <div className="p-8 grid gap-3 grid-cols-3 w-full">
      <Card
        border={false}
        className={mainCard("col-span-2")({ variant })}
        shadow={false}
      >
        <p className="body-2">{data?.closing}</p>
      </Card>
      <Card
        border={false}
        className={secondaryCard("col-span-1")({ variant })}
        shadow={false}
      >
        <p className="subtitle-1 ">{data.name}</p>
      </Card>
      <Card
        border={false}
        className={mandalaCard("col-span-1")({ variant })}
        shadow={false}
      />
      <Card
        border={false}
        className={mainCard("col-span-2")({ variant })}
        shadow={false}
      >
        <p>Eid Mubarak</p>
        <p>Bikin ucapan versimu sendiri!</p>
      </Card>
    </div>
  );
}

Footer.propTypes = {
  data: PropTypes.object,
  variant: PropTypes.string,
};

Footer.defaultProps = {
  data: {},
  variant: "",
};
