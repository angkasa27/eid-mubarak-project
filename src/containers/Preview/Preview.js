import useAction from "./hooks/useAction";
import LoadingPage from "src/fragments/LoadingPage";
import Mandala from "./Theme/Mandala";
import Stacked from "./Theme/Stacked";
import { MANDALA, STACKED } from "src/configs/template";

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
      default:
        break;
    }
  };

  return (
    <div className="h-screen w-full overflow-y-scroll  text-white overflow-x-hidden">
      {_renderTheme()}
      <LoadingPage loading={loading || !_renderTheme()} />
    </div>
  );
}
