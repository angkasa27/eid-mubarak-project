import PropTypes from "prop-types";
import clsx from "clsx";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function SelectBase(props) {
  const {
    options,
    mapValue,
    mapLabel,
    optionProps,
    error,
    label,
    name,
    id,
    className,
    value,
    ...selectProps
  } = props;

  return (
    <Listbox
      id={id || name}
      name={name}
      title={label}
      value={value}
      {...selectProps}
    >
      <div className="relative h-12 w-full">
        <Listbox.Button
          className={clsx(
            "peer h-full w-full rounded-md border bg-transparent px-3 py-3 text-base font-normal outline outline-0 transition-all focus:border-2 focus:outline-0  disabled:bg-blue-gray-50 text-left",
            error
              ? "border-red-200 text-red-700 focus:border-red-500"
              : " text-blue-gray-800 border-blue-gray-200 focus:border-blue-500",
            !!label && " border-t-transparent focus:border-t-transparent",
            className
          )}
        >
          <span className="block truncate">{mapLabel(value)}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </Listbox.Button>

        {!!label && (
          <label
            className={clsx(
              "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-disabled:peer-placeholder-shown:text-blue-gray-500",
              error
                ? "before:border-red-200 after:border-red-200 peer-focus:before:border-red-500 peer-focus:after:border-red-500 text-red-400 peer-placeholder-shown:text-red-500 peer-focus:text-red-500"
                : "before:border-blue-gray-200 after:border-blue-gray-200 peer-focus:before:border-blue-500 peer-focus:after:border-blue-500 text-blue-gray-400 peer-placeholder-shown:text-blue-gray-500 peer-focus:text-blue-500"
            )}
            htmlFor="name"
          >
            {label}
          </label>
        )}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30">
            {options.map((item, i) => (
              <Listbox.Option
                className={({ active }) =>
                  clsx(
                    "relative cursor-pointer select-none py-2 px-4 text-blue-gray-800",
                    active ? "bg-blue-500/10" : ""
                  )
                }
                key={i}
                value={mapValue(item)}
              >
                {({ selected }) => (
                  <span className={clsx(selected ? "bold" : "")}>
                    {mapLabel(item)}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

SelectBase.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  mapLabel: PropTypes.func,
  mapValue: PropTypes.func,
  name: PropTypes.string.isRequired,
  optionProps: PropTypes.array,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string, // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any.isRequired,
};

SelectBase.defaultProps = {
  className: "",
  error: false,
  id: "",
  label: "",
  mapLabel: (v) => v,
  mapValue: (v) => v,
  optionProps: [],
  placeholder: " ",
};
