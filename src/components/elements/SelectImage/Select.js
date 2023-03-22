import PropTypes from "prop-types";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Image from "next/image";
import { thumbnail } from "@utils/image";

export default function SelectBase(props) {
  const {
    label,
    name,
    id,
    value,
    onChange,
    className,
    error,
    options,
    helperText,
    ...inputProps
  } = props;

  const handleClick = (v) => {
    onChange(v);
  };

  const isChecked = (v) => {
    return v === value;
  };

  return (
    <div
      className={clsx(
        "relative w-full border border-blue-gray-200 rounded-md p-3",
        className
      )}
    >
      <div className="mb-4">
        <label className="subtitle-2">{label}</label>
        <p className="text-xs text-default-secondary whitespace-pre-line">
          {helperText}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {Array.isArray(options) && options.length > 0 ? (
          options.map((image, i) => (
            <button
              className={clsx(
                "relative rounded-md overflow-hidden bg-blue-gray-200 cursor-pointer ",
                isChecked(image.filePath) && "outline outline-blue-500"
              )}
              key={i}
              onClick={() => handleClick(image.filePath)}
              type="button"
            >
              <Image
                alt={image.fileName}
                height={400}
                src={thumbnail(image.filePath)}
                width={400}
              />
              <div
                className={clsx(
                  "absolute left-0 top-0 rounded-br-md",
                  isChecked(image.filePath)
                    ? "bg-blue-500 text-white"
                    : "hidden"
                )}
              >
                <CheckIcon className="h-6 w-6" strokeWidth={4} />
              </div>
            </button>
          ))
        ) : (
          <div className="aspect-square rounded-md overflow-hidden flex items-center justify-center border border-default">
            <p className="body-3 text-default-secondary text-center">
              Belum ada Foto
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

SelectBase.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

SelectBase.defaultProps = {
  className: "",
  error: false,
  helperText: "",
  id: "",
  label: "",
};
