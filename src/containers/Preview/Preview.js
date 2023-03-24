import useAction from "./hooks/useAction";
import LoadingPage from "src/fragments/LoadingPage";
import Mandala from "./Theme/Mandala";

export default function Container() {
  const { data, loading, name } = useAction();

  const props = {
    data,
    name,
  };

  const _renderTheme = () => {
    switch (data?.theme) {
      case "mandala":
        return <Mandala {...props} />;
      default:
        break;
    }
  };

  return (
    <div className="h-screen w-full overflow-y-scroll  text-white overflow-x-hidden bg-main">
      {_renderTheme()}
      <LoadingPage loading={loading} />
    </div>
  );
}
