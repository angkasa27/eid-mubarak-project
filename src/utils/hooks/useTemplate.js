import { useContext } from "react";
import TemplateContext from "src/contexts/Template";
import { TEMPLATE } from "src/configs";

const useTemplate = () => {
  const { data: templateData, setData } = useContext(TemplateContext);

  const setTemplate = (property) => {
    if (!property) return;
    const { type, theme } = property;

    const config = {
      ...property.config,
      ...TEMPLATE[type][theme].defaultConfig,
    };

    setData({
      ...property,
      config,
    });
  };

  return {
    setTemplate,
    templateData,
  };
};

export default useTemplate;
