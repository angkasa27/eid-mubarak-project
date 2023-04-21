import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { THEME_LIST } from "src/configs/template";
import useAction from "./hooks/useAction";
import PropTypes from "prop-types";
import Header from "src/fragments/Header";
import ThemePreviewCard from "src/fragments/ThemePreviewCard";
import { ROUTES } from "src/configs";

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

  return <div className="flex flex-col gap-4">{_renderChild()}</div>;
}

export function ThemeSelector({ redirectDemo, useTheme, setTab }) {
  const [selected, setSelected] = useTheme;

  return (
    <>
      <Header name="Pilih Tema" routerBack={ROUTES.DASHBOARD()} />
      <ThemePreviewCard
        data={THEME_LIST}
        isSelected={(item) => selected.theme === item.theme}
        mapColor={(item) => item.variants[0].color}
        mapImage={(item) => item.variants[0].image}
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
      <Header name="Pilih Varian Tema" routerBack={ROUTES.DASHBOARD()} />
      <ThemePreviewCard
        data={selected?.variants}
        isSelected={(item) => selectedVariant === item.variant}
        loading={loading}
        mapColor={(item) => item.color}
        mapImage={(item) => item.image}
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
