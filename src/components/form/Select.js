import Field from "./Field";
import Select from "@components/elements/Select";

const SelectField = (props) => {
  return <Field component={Select} {...props} />;
};

export default SelectField;
