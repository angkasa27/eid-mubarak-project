import PropTypes from "prop-types";

export default function Cloud({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 1163 380"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1047.3 146.4C1041.2 146.4 1035.2 146.8 1029.2 147.5C1001.4 61.9 921 0 826.1 0C757.5 0 696.5 32.3 657.4 82.6C645.1 98.5 634.9 116.2 627.4 135.2C620.3 153.3 615.5 172.5 613.6 192.6C585.6 164.1 546.7 146.4 503.6 146.4C497.5 146.4 491.5 146.8 485.5 147.5C479.3 128.3 470.3 110.2 459.2 93.8C447.5 76.6 433.4 61.1 417.3 48C380.6 18 333.6 0 282.5 0C164.6 0 69 95.6 69 213.5C69 220.3 69.3 227 70 233.7C62.2 232.4 54.2 231.8 46.1 231.8C30 231.8 14.6 234.3 0 238.8V379.1H211.4H955.2H1162.7V198.4C1134.5 166.5 1093.2 146.4 1047.3 146.4Z" />
    </svg>
  );
}

Cloud.propTypes = {
  className: PropTypes.string,
};

Cloud.defaultProps = {
  className: "",
};
