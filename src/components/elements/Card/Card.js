import PropTypes from "prop-types";
import clsx from "clsx";

export default function Card(props) {
  const {
    className,
    children,
    hover,
    header,
    backgroundColor,
    childClass,
    footer,
    padding,
    shadow,
    ...cardProps
  } = props;
  return (
    <div
      className={clsx(
        "rounded-lg border border-default overflow-hidden",
        {
          ["cursor-pointer hover:border-blue-500"]: hover,
          ["drop-shadow-xl"]: shadow,
        },
        backgroundColor,
        className
      )}
      {...cardProps}
    >
      {!!header && <div className="w-full">{header}</div>}
      <div className={clsx(padding, childClass)}>{children}</div>
      {!!footer && <div className="w-full">{footer}</div>}
    </div>
  );
}

Card.propTypes = {
  backgroundColor: PropTypes.string,
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
  backgroundColor: " bg-white ",
  childClass: "",
  className: "",
  footer: undefined,
  header: undefined,
  hover: false,
  padding: " p-6 ",
  shadow: true,
};
