import Field from "./Field";
import Select from "@components/elements/SelectImage";

const SelectField = (props) => {
  return <Field component={Select} defaultHelper={false} {...props} />;
};

export default SelectField;
