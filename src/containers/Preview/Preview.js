import LoadingPage from "src/fragments/LoadingPage";
import Mandala from "./Theme/Mandala";
import Stacked from "./Theme/Stacked";
import Frame from "./Theme/Frame";
import Cloudy from "./Theme/Cloudy";
import Flat from "./Theme/Flat";
import Desert from "./Theme/Desert";
import * as TEMPLATE from "src/configs/template";
import { Fragment } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Head from "next/head";

export default function Container(props) {
  const { data } = props;
  const {
    query: { name },
  } = useRouter();

  const themeProps = {
    data,
    name,
  };

  const _renderTheme = () => {
    switch (data?.theme) {
      case TEMPLATE.MANDALA.theme:
        return <Mandala {...themeProps} />;
      case TEMPLATE.STACKED.theme:
        return <Stacked {...themeProps} />;
      case TEMPLATE.FRAME.theme:
        return <Frame {...themeProps} />;
      case TEMPLATE.CLOUDY.theme:
        return <Cloudy {...themeProps} />;
      case TEMPLATE.FLAT.theme:
        return <Flat {...themeProps} />;
      case TEMPLATE.DESERT.theme:
        return <Desert {...themeProps} />;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <Head>
        <link href={data?.image} rel="image_src" />
      </Head>
      <div className="h-screen w-full overflow-y-scroll  text-white overflow-x-hidden">
        {_renderTheme()}
        {/* <LoadingPage loading={loading || !_renderTheme()} /> */}
      </div>
    </Fragment>
  );
}

Container.propTypes = {
  data: PropTypes.object.isRequired,
};
