import PropTypes from "prop-types";

export default function Cloud({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 376 134"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.400024 133.1C0.400024 97.6 15.2 63.5 41.5 39.8C68.6 15.3 104.6 0.5 144 0.5C180.7 0.5 214.3 13.4 240.7 34.9C252.3 44.3 262.4 55.4 270.8 67.8C278.8 79.6 285.2 92.5 289.7 106.3C294 105.8 298.3 105.5 302.7 105.5C330.8 105.5 356.4 116 375.9 133.2H0.400024V133.1Z" />
    </svg>
  );
}

Cloud.propTypes = {
  className: PropTypes.string,
};

Cloud.defaultProps = {
  className: "",
};
