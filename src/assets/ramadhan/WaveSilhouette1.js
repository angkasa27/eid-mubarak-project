import PropTypes from "prop-types";

export default function Wave({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      preserveAspectRatio="none"
      viewBox="0 0 1140 316"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 79.4002C0 79.4002 119.4 16.6002 288.3 73.9002C599.3 179.5 881.5 -89.3998 1139.6 32.4002V316H0V79.4002Z" />
    </svg>
  );
}

Wave.propTypes = {
  className: PropTypes.string,
};

Wave.defaultProps = {
  className: "",
};
