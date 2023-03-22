import { Select, TextArea, TextField } from "@components/form";
import { Button } from "@material-tailwind/react";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function FormGenerator(props) {
  const {
    fields,
    handleSubmit,
    className,
    onSubmit,
    buttons,
    buttonContainer,
  } = props;

  const _renderField = ({ field, ...fieldProps }, key) => {
    switch (field) {
      case "select":
        return <Select {...fieldProps} key={key} />;
      case "textarea":
        return <TextArea {...fieldProps} key={key} />;
      default:
        return <TextField {...fieldProps} key={key} />;
    }
  };
  const _renderButton = (buttonProps) => {
    return <Button {...buttonProps} />;
  };

  const { className: buttonContainerClass, ...buttonContainerProps } =
    buttonContainer;

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {fields?.map((field, i) => _renderField(field, i))}
      <div
        className={clsx("flex justify-end", buttonContainerClass)}
        {...buttonContainerProps}
      >
        {buttons?.map((button) => _renderButton(button))}
      </div>
    </form>
  );
}

FormGenerator.propTypes = {
  buttonContainer: PropTypes.object,
  buttons: PropTypes.array,
  className: PropTypes.string,
  fields: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

FormGenerator.defaultProps = {
  buttonContainer: {},
  buttons: [],
  className: "",
  fields: [],
};
