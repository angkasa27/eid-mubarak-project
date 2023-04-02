import Card from "@components/elements/Card";
import { useState } from "react";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import { THEME_LIST } from "src/configs/template";
import clsx from "clsx";
import { EyeIcon } from "@heroicons/react/24/solid";
import useAction from "./hooks/useAction";
import PropTypes from "prop-types";

export default function Main() {
  const { submitTheme, loading, redirectDemo, useTheme, useTab } = useAction();
  const [tab, setTab] = useTab;

  const _renderChild = () => {
    switch (tab) {
      case 1:
        return (
          <ThemeSelector
            redirectDemo={redirectDemo}
            setTab={setTab}
            useTheme={useTheme}
          />
        );
      case 2:
        return (
          <VariantSelector
            loading={loading}
            onSubmit={submitTheme}
            redirectDemo={redirectDemo}
            setTab={setTab}
            useTheme={useTheme}
          />
        );
      default:
        break;
    }
  };

  return <div className="flex flex-col gap-6">{_renderChild()}</div>;
}

export function ThemeSelector({ redirectDemo, useTheme, setTab }) {
  const [selected, setSelected] = useTheme;

  return (
    <>
      <div className="mx-0 text-center">
        <h2 className="md:text-3xl text-2xl bold">Pilih Tema</h2>
      </div>
      <CardPreview
        data={THEME_LIST}
        isSelected={(item) => selected.theme === item.theme}
        mapColor={(item) => item.variants[0].color}
        mapPreview={(item) =>
          redirectDemo(item.theme, item.variants[0].variant)
        }
        setSelected={(item) => setSelected(item)}
      />
      <div className="flex justify-end">
        {!!selected?.theme && (
          <Button onClick={() => setTab(2)}>Selanjutnya</Button>
        )}
      </div>
    </>
  );
}

ThemeSelector.propTypes = {
  redirectDemo: PropTypes.func.isRequired,
  setTab: PropTypes.func.isRequired,
  useTheme: PropTypes.array.isRequired,
};

export function VariantSelector(props) {
  const { redirectDemo, useTheme, setTab, onSubmit, loading } = props;
  const [selected] = useTheme;
  const [selectedVariant, setSelected] = useState("");

  return (
    <>
      <div className="mx-0 text-center">
        <h2 className="md:text-3xl text-2xl bold">Pilih Variant</h2>
      </div>
      <CardPreview
        data={selected?.variants}
        isSelected={(item) => selectedVariant === item.variant}
        loading={loading}
        mapColor={(item) => item.color}
        mapPreview={(item) => redirectDemo(selected.theme, item.variant)}
        setSelected={(item) => setSelected(item.variant)}
      />
      <div className="flex justify-between">
        <Button disabled={loading} onClick={() => setTab(1)} variant="outlined">
          Kembali
        </Button>
        {!!selectedVariant && (
          <Button
            disabled={loading}
            onClick={() => onSubmit(selected.theme, selectedVariant)}
          >
            Selanjutnya
          </Button>
        )}
      </div>
    </>
  );
}

VariantSelector.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  redirectDemo: PropTypes.func.isRequired,
  setTab: PropTypes.func.isRequired,
  useTheme: PropTypes.array.isRequired,
};

function CardPreview(props) {
  const {
    isSelected,
    data,
    mapColor,
    mapName,
    loading,
    mapPreview,
    setSelected,
  } = props;

  return (
    <div className="grid grid-cols-2 gap-4">
      {data?.map((item, i) => (
        <Card
          border={false}
          className={clsx(
            "w-full text-blue-gray-800",
            isSelected(item) && "ring ring-blue-500"
          )}
          header={
            <div className={clsx("aspect-square w-full", mapColor(item))} />
          }
          key={i}
          padding="lg:p-4 p-2"
        >
          <div className="flex justify-between flex-col lg:flex-row mb-1">
            <h5 className="title-3 bold">{mapName(item)}</h5>
          </div>
          <div className="flex gap-2">
            <IconButton
              className="px-3"
              disabled={loading}
              onClick={() => mapPreview(item)}
              size="sm"
              variant="outlined"
            >
              <EyeIcon className="h-4" />
            </IconButton>
            <Button
              className="w-full"
              disabled={isSelected(item) || loading}
              onClick={() => setSelected(item)}
              size="sm"
            >
              {isSelected(item) ? "Terpilih" : "Pilih"}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

CardPreview.propTypes = {
  data: PropTypes.object,
  isSelected: PropTypes.func,
  loading: PropTypes.bool,
  mapColor: PropTypes.func,
  mapName: PropTypes.func,
  mapPreview: PropTypes.func,
  setSelected: PropTypes.func,
};

CardPreview.defaultProps = {
  data: {},
  isSelected: () => false,
  loading: false,
  mapColor: () => "",
  mapName: (v) => v.name,
  mapPreview: () => {},
  setSelected: () => {},
};
