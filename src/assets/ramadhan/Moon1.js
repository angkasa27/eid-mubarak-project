import PropTypes from "prop-types";

export default function Moon1({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 287 291"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M286.22 186.4C286.22 186.5 286.12 186.6 286.12 186.7V186.8C276.42 216.3 257.32 243.3 229.72 262.8C162.92 310 71.5204 295.6 25.7204 230.6C-20.0796 165.6 -3.07959 74.8 63.7204 27.6C88.0204 10.4 115.62 1.4 143.12 0C142.52 0.3 141.92 0.499988 141.32 0.799988C134.62 3.89999 128.02 7.69998 121.82 12.2C65.7205 51.8 51.4204 128.1 89.9204 182.6C128.42 237.1 205.12 249.2 261.22 209.6C270.72 202.9 279.12 195.1 286.22 186.5C286.12 186.5 286.12 186.5 286.22 186.4Z"
        fill="#FCEEAF"
      />
      <path
        d="M286.02 186.6L286.12 186.7C286.12 186.7 286.12 186.7 286.02 186.8C284.32 189.2 252.22 235.5 226.42 240.3C226.42 240.3 220.62 250.2 209.82 246.8C209.82 246.8 203.72 265.7 187.22 253.5C187.22 253.5 176.12 271.5 163.32 255.3C163.32 255.3 154.52 272.2 136.72 250.7C136.72 250.7 120.32 263.1 110.42 237.9C110.42 237.9 87.4204 243.5 88.7204 221C88.7204 221 64.5204 223.5 72.3204 197.7C72.3204 197.7 43.3204 193.5 60.4204 173.9C60.4204 173.9 34.5204 164.8 51.7204 146.5C51.7204 146.5 29.4204 134.9 50.3204 118.8C50.3204 118.8 27.8204 99.4 54.7204 90.1C54.7204 90.1 38.9204 69 65.6204 67.4C65.6204 67.4 53.3204 48.7 77.1204 48.7C77.1204 48.7 69.9204 33.5 88.2204 35.1C88.2204 35.1 114.22 5.20002 141.32 0.900024C134.62 4.00002 128.02 7.80002 121.82 12.3C65.7205 51.9 51.4204 128.2 89.9204 182.7C128.42 237.2 205.12 249.3 261.22 209.7C270.62 203 279.02 195.2 286.02 186.6Z"
        fill="#FBB246"
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