import Card from "@components/elements/Card";
import { Button, IconButton } from "@material-tailwind/react";
import clsx from "clsx";
import { EyeIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import Image from "next/image";

export default function CardPreview(props) {
  const {
    isSelected,
    data,
    mapColor,
    mapName,
    loading,
    mapPreview,
    setSelected,
    mapImage,
    previewOnly,
    className,
  } = props;

  const handleClick = async (item) => {
    await setSelected(item);
    window.scrollTo({ top: 9999, behavior: "smooth" });
  };

  return (
    <div className={clsx("grid grid-cols-2 gap-4", className)}>
      {data?.map((item, i) => (
        <Card
          border={false}
          className={clsx(
            "w-full text-blue-gray-800",
            isSelected(item) && "ring ring-blue-500"
          )}
          header={
            <div
              className={clsx(
                "aspect-[3/4] w-full overflow-hidden",
                mapColor(item)
              )}
            >
              <Image
                alt={mapName(item)}
                className="h-full w-auto mx-auto "
                placeholder="blur"
                src={mapImage(item)}
              />
            </div>
          }
          key={i}
          padding="lg:p-4 p-2"
        >
          {/* <div className="flex justify-between flex-col lg:flex-row mb-1">
            <h5 className="title-3 bold">{mapName(item)}</h5>
          </div> */}
          <div className="flex gap-2">
            {previewOnly ? (
              <Button
                className="!w-full flex justify-center gap-2"
                onClick={() => mapPreview(item)}
                size="sm"
                variant="outlined"
              >
                {/* <EyeIcon className="h-4" /> */}
                Preview
              </Button>
            ) : (
              <>
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
                  onClick={() => handleClick(item)}
                  size="sm"
                >
                  {isSelected(item) ? "Terpilih" : "Pilih"}
                </Button>
              </>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

CardPreview.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  isSelected: PropTypes.func,
  loading: PropTypes.bool,
  mapColor: PropTypes.func,
  mapImage: PropTypes.func,
  mapName: PropTypes.func,
  mapPreview: PropTypes.func,
  previewOnly: PropTypes.bool,
  setSelected: PropTypes.func,
};

CardPreview.defaultProps = {
  className: "",
  data: {},
  isSelected: () => false,
  loading: false,
  mapColor: () => "",
  mapImage: () => "",
  mapName: (v) => v.name,
  mapPreview: () => {},
  previewOnly: false,
  setSelected: () => {},
};
