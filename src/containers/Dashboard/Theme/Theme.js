import Card from "@components/elements/Card";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import Header from "src/fragments/Header";
import { FLATTENED_THEME_LIST } from "src/configs/template";
import clsx from "clsx";
import { EyeIcon } from "@heroicons/react/24/solid";
import useAction from "./hooks/useAction";

export default function Main() {
  const { onSelectTheme, loading } = useAction();

  return (
    <div className="py-6 px-4">
      <Header name="Pilih Tema" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
        {FLATTENED_THEME_LIST.map((theme) => (
          <Card
            border={false}
            className="w-full text-blue-gray-800"
            header={
              <div
                className={clsx("aspect-square w-full", theme.variant.color)}
              />
            }
            key={theme.theme}
            padding="lg:p-4 p-2"
          >
            <div className="flex justify-between flex-col lg:flex-row">
              <h5 className="title-3 bold">{theme.name}</h5>
            </div>
            <div className="flex gap-1 items-end mb-2">
              <div
                className={clsx(
                  "rounded-md h-2 p-2 border",
                  theme.variant.color
                )}
              />
              <p className="text-default-secondary body-3">
                {theme.variant.name}
              </p>
            </div>
            <div className="flex gap-2">
              <IconButton
                className="px-3 md:hidden"
                disabled={loading}
                size="sm"
                variant="outlined"
              >
                <EyeIcon className="h-4" />
              </IconButton>
              <Button
                className="hidden md:block"
                disabled={loading}
                size="sm"
                variant="outlined"
              >
                preview
              </Button>
              <Button
                className="w-full"
                disabled={loading}
                onClick={() =>
                  onSelectTheme(theme.theme, theme.variant.variant)
                }
                size="sm"
              >
                Pilih
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
