import PropTypes from "prop-types";

export default function Cloud({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 387 148"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M386.2 147.3H0.400024C15.1 134.8 34.1 127.2 54.9 127.2C59.3 127.2 63.7 127.5 67.9 128.2C67.6 124.6 67.4 120.9 67.4 117.2C67.4 67.8998 98.1 25.6999 141.5 8.79993C154.6 3.69993 168.8 0.899902 183.7 0.899902C235.4 0.899902 279.2 34.5998 294.3 81.1998C297.5 80.7998 300.8 80.5999 304.1 80.5999C322.7 80.5999 339.9 86.6999 353.8 96.8999C370.1 109 381.9 126.8 386.2 147.3Z" />
    </svg>
  );
}

Cloud.propTypes = {
  className: PropTypes.string,
};

Cloud.defaultProps = {
  className: "",
};
