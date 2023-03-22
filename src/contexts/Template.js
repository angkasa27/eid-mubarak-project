import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { TEMPLATE_DATA } from "src/constants";

const TemplateContext = createContext(TEMPLATE_DATA.DEFAULT_BIRTHDAY_VALUE);

const Provider = TemplateContext.Provider;

export const TemplateProvider = (props) => {
  const [template, setTemplate] = useState(
    TEMPLATE_DATA.DEFAULT_BIRTHDAY_VALUE
  );

  return (
    <Provider
      value={{
        data: template,
        setData: setTemplate,
      }}
    >
      {props.children}
    </Provider>
  );
};

TemplateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateContext;
