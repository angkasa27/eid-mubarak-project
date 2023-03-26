import Card from "@components/elements/Card";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import Header from "src/fragments/Header";
import { THEME_LIST } from "src/configs/template";
import clsx from "clsx";
import { EyeIcon } from "@heroicons/react/24/solid";

export default function Main() {
  return (
    <div className="py-6 px-4">
      <Header name="Pilih Tema" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
        {THEME_LIST.map((theme, i) => (
          <Card
            border={false}
            className="w-full text-blue-gray-800"
            header={<div className="bg-gray-500 aspect-square w-full" />}
            key={i}
            padding="lg:p-4 p-2"
          >
            {/* <div className="flex justify-between flex-col lg:flex-row">
              <h5 className="title-3 bold">{theme.name}</h5>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-default-secondary body-3">Warna</p>
              <div className="flex gap-2">
                {theme.variants.map((variant) => (
                  <Tooltip
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                    content={variant.name}
                    key={variant.variant}
                  >
                    <div
                      className={clsx(
                        "rounded-md h-3 p-3 border",
                        variant.color
                      )}
                    />
                  </Tooltip>
                ))}
              </div>
            </div> */}
            <div className="flex gap-2">
              <IconButton
                className="px-3 md:hidden"
                size="sm"
                variant="outlined"
              >
                <EyeIcon className="h-4" />
              </IconButton>
              <Button className="hidden md:block" size="sm" variant="outlined">
                preview
              </Button>
              <Button className="w-full" onClick={() => {}} size="sm">
                Pilih
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
