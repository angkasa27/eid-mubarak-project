import PropTypes from "prop-types";
import clsx from "clsx";
import { motion } from "framer-motion";
export default function Card(props) {
  const {
    className,
    children,
    hover,
    header,
    childClass,
    footer,
    padding,
    shadow,
    border,
    ...cardProps
  } = props;

  return (
    <motion.div
      className={clsx(
        "rounded-lg overflow-hidden",
        {
          ["cursor-pointer hover:border-blue-500"]: hover,
          ["drop-shadow-xl"]: shadow,
          ["border border-default"]: border,
          ["bg-white"]: !className?.includes("bg-"),
        },
        className
      )}
      {...cardProps}
    >
      {!!header && <div className="w-full">{header}</div>}
      <div className={clsx(padding, childClass)}>{children}</div>
      {!!footer && <div className="w-full">{footer}</div>}
    </motion.div>
  );
}

Card.propTypes = {
  border: PropTypes.bool,
  childClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  footer: PropTypes.node,
  header: PropTypes.node,
  hover: PropTypes.bool,
  padding: PropTypes.string,
  shadow: PropTypes.bool,
};

Card.defaultProps = {
  border: true,
  childClass: "",
  className: "",
  footer: undefined,
  header: undefined,
  hover: false,
  padding: "p-6",
  shadow: true,
};
