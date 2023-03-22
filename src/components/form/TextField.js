import Input from "@components/elements/Input";
import Field from "./Field";

const TextField = (props) => {
  return <Field component={Input} {...props} />;
};

export default TextField;
