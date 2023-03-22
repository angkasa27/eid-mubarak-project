import clsx from "clsx";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const Field = (props) => {
  const {
    control,
    name,
    helperText,
    error,
    component: Component,
    className,
    inputClass,
    defaultHelper,
    ...textFieldProps
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const { value = "", onChange, onBlur, name } = field;
        const fieldProps = {
          name,
          onBlur,
          onChange,
          value,
          className: inputClass,
          error: !!fieldState?.error?.message || error,
          helperText: fieldState?.error?.message || helperText || "",
        };

        if (defaultHelper)
          return (
            <div className={className}>
              <Component {...textFieldProps} {...fieldProps} />
              <p
                className={clsx(
                  "text-xs",
                  "min-h-[16px]",
                  fieldProps.error ? "error" : "text-default-secondary"
                )}
              >
                {fieldProps.helperText}
              </p>
            </div>
          );
        return (
          <Component
            className={className}
            {...textFieldProps}
            {...fieldProps}
          />
        );
      }}
    />
  );
};

Field.propTypes = {
  className: PropTypes.string,
  component: PropTypes.func.isRequired, // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.any.isRequired,
  defaultHelper: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  inputClass: PropTypes.string,
  name: PropTypes.string.isRequired,
};
Field.defaultProps = {
  className: "",
  defaultHelper: true,
  error: false,
  helperText: "",
  inputClass: "",
};

export default Field;
