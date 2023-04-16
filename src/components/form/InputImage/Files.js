import Field from "../Field";
import Files from "./FilesBase";

const InputField = (props) => {
  return <Field component={Files} {...props} />;
};

export default InputField;
