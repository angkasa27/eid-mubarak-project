import useAction from "./hooks/useAction";
import LoadingPage from "src/fragments/LoadingPage";
import Mandala from "./Theme/Mandala";
import Stacked from "./Theme/Stacked";
import Frame from "./Theme/Frame";
import Cloudy from "./Theme/Cloudy";
import Flat from "./Theme/Flat";
import { MANDALA, STACKED, FRAME, CLOUDY, FLAT } from "src/configs/template";
// import Head from "next/head";
import { Fragment } from "react";

export default function Container() {
  const { data, loading, name } = useAction();

  const props = {
    data,
    name,
  };

  const _renderTheme = () => {
    switch (data?.theme) {
      case MANDALA.theme:
        return <Mandala {...props} />;
      case STACKED.theme:
        return <Stacked {...props} />;
      case FRAME.theme:
        return <Frame {...props} />;
      case CLOUDY.theme:
        return <Cloudy {...props} />;
      case FLAT.theme:
        return <Flat {...props} />;
      default:
        break;
    }
  };

  return (
    <Fragment>
      {/* <Head>
        <link href={data?.image} rel="image_src" />
      </Head> */}
      <div className="h-screen w-full overflow-y-scroll  text-white overflow-x-hidden">
        {_renderTheme()}
        <LoadingPage loading={loading || !_renderTheme()} />
      </div>
    </Fragment>
  );
}
