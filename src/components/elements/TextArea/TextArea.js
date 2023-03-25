import clsx from "clsx";
import PropTypes from "prop-types";

export default function Textarea(props) {
  const { error, label, name, id, className, ...inputProps } = props;

  return (
    <div className="relative w-full">
      <textarea
        className={clsx(
          "peer h-full w-full rounded-md border bg-transparent px-3 py-3 text-base font-normal outline outline-0 transition-all placeholder-shown:border  focus:outline-0  disabled:bg-blue-gray-50 placeholder-shown:placeholder:text-transparent placeholder-shown:focus:placeholder:text-blue-gray-100",
          error
            ? "border-red-200 text-red-700 focus:border-red-500 placeholder-shown:border-red-200 placeholder-shown:border-t-red-200"
            : "border-blue-gray-200 text-blue-gray-800 focus:border-blue-500 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200",
          !!label && " border-t-transparent focus:border-t-transparent",
          className
        )}
        title={label}
        {...inputProps}
        id={id || name}
        name={name}
      />
      {!!label && (
        <label
          className={clsx(
            "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-disabled:peer-placeholder-shown:text-blue-gray-500",
            error
              ? "before:border-red-200 after:border-red-200 peer-focus:before:border-red-500 peer-focus:after:border-red-500 text-red-400 peer-placeholder-shown:text-red-500 peer-focus:text-red-500"
              : "before:border-blue-gray-200 after:border-blue-gray-200 peer-focus:before:border-blue-500 peer-focus:after:border-blue-500 text-blue-gray-400 peer-placeholder-shown:text-blue-gray-500 peer-focus:text-blue-500"
          )}
          htmlFor="name"
        >
          {label}
        </label>
      )}
    </div>
  );
}

Textarea.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  className: "",
  error: false,
  id: "",
  label: "",
  placeholder: " ",
  rows: 3,
};
