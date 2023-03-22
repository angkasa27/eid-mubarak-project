import PropTypes from "prop-types";
import useUploader from "./hooks/useUploader";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Image from "next/image";
import { thumbnail } from "@utils/image";

const Files = (props) => {
  const {
    label,
    name,
    id,
    onChange,
    className,
    error,
    helperText,
    max,
    value,
    link,
    type,
    variant,
    ...inputProps
  } = props;
  const { onFileSelected, onDeleteFile, loading, visibleValue } = useUploader({
    value,
    onChange,
    link,
    type,
  });

  const disabledUpload = visibleValue.length === max || loading;
  const customId = id || type + name;

  const previewProps = {
    loading: loading,
    onDelete: onDeleteFile,
    value: visibleValue,
  };

  const buttonUpload = (
    <label
      className={clsx(
        "font-sans font-bold center uppercase transition-all py-2 px-3 rounded-lg text-xs bg-blue-500 text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center justify-center gap-1",
        disabledUpload
          ? "opacity-50 shadow-none pointer-events-none"
          : "shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 cursor-pointer"
      )}
      htmlFor={disabledUpload ? "" : customId}
    >
      <CloudArrowUpIcon className="h-5 w-5" strokeWidth={2} />
      Upload Gambar
    </label>
  );

  return (
    <div
      className={clsx(
        "relative w-full border border-blue-gray-200 rounded-md p-3 mb-[16px]",
        className
      )}
    >
      <div className="gap-4 flex flex-row justify-between">
        <div>
          <label className="subtitle-2">{label}</label>
          <p className="text-xs text-default-secondary whitespace-pre-line">
            {helperText}
          </p>
        </div>

        <input
          accept="image/png,image/jpg,image/jpeg"
          className="hidden"
          id={customId}
          onChange={onFileSelected}
          title={label}
          type="file"
          {...inputProps}
        />
        {!(max === 1 && disabledUpload) && (
          <div className="hidden md:block">{buttonUpload}</div>
        )}
      </div>
      {variant === "list" ? (
        <ListPreview {...previewProps} />
      ) : (
        <ImagePreview {...previewProps} />
      )}
      {!(max === 1 && disabledUpload) && (
        <div className="block md:hidden mt-4">{buttonUpload}</div>
      )}
    </div>
  );
};

export default Files;

Files.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  link: PropTypes.string.isRequired,
  max: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  variant: PropTypes.oneOf(["image", "list"]),
};

Files.defaultProps = {
  className: "",
  error: false,
  helperText: "",
  id: "",
  label: "",
  max: 1,
  variant: "image",
};

const ListPreview = ({ value, onDelete, loading }) => {
  return (
    value.length > 0 && (
      <div className="grid gap-2 mt-4">
        {value.map((image, i) => (
          <div
            className={clsx(
              "relative rounded-md overflow-hidden  flex justify-between items-center p-2 bg-blue-gray-100"
            )}
            key={i}
          >
            <p className="body-2 mx-2 truncate">{image.fileName}</p>
            {image?.progress > 0 && (
              <div
                className="absolute left-0 right-0 h-full bg-blue-500/50 transition-all duration-500"
                style={{ width: `${image?.progress}%` }}
              />
            )}
            <button
              className=" rounded-md hover:bg-blue-500 hover:text-white transition-all disabled:bg-gray-400/50  disabled:text-gray-500"
              disabled={loading || image?.progress > 0}
              onClick={() => onDelete(image.filePath)}
              type="button"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
        ))}
      </div>
    )
  );
};

ListPreview.propTypes = {
  loading: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
};

const ImagePreview = ({ value, onDelete, loading }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
      {value.length > 0 ? (
        value.map((image, i) => (
          <div
            className="relative rounded-md overflow-hidden bg-blue-gray-200"
            key={i}
          >
            {image.filePath ? (
              <>
                <Image
                  alt={image.fileName}
                  height={400}
                  src={thumbnail(image.filePath)}
                  width={400}
                />
                <button
                  className="absolute right-2 top-2  bg-blue-gray-800/50 rounded hover:bg-blue-500 hover:text-white transition-all disabled:bg-gray-400/50  disabled:text-gray-500"
                  disabled={loading}
                  onClick={() => onDelete(image.filePath)}
                  type="button"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </>
            ) : (
              <div className="aspect-square flex flex-col justify-center p-6">
                <div className="relative h-[6px] w-full rounded-full bg-white">
                  <div
                    className="absolute left-0 right-0 h-full rounded-full bg-blue-500 transition-all duration-500"
                    style={{ width: `${image?.progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="aspect-square rounded-md overflow-hidden flex items-center justify-center border border-default">
          <p className="body-3 text-default-secondary text-center">
            Belum ada Foto
          </p>
        </div>
      )}
    </div>
  );
};

ImagePreview.propTypes = {
  loading: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
};
