import Field from "../Field";
import Files from "./FilesBase";

const InputField = (props) => {
  return <Field component={Files} defaultHelper={false} {...props} />;
};

export default InputField;
