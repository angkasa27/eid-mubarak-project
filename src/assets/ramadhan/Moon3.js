import PropTypes from "prop-types";

export default function Moon1({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 109 127"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.0001 88.5C5.00009 60.5 8.60009 23.7 30.9001 0C-0.999907 22.2 -9.59991 65.4 11.8001 96.8C33.2001 128.2 76.6001 136.1 108.9 114.4C78.7001 126.5 43.1001 116.5 24.0001 88.5Z"
        fill="#FED691"
      />
    </svg>
  );
}

Moon1.propTypes = {
  className: PropTypes.string,
};

Moon1.defaultProps = {
  className: "",
};
