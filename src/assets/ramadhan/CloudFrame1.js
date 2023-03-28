import PropTypes from "prop-types";

export default function CloudFrame1({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 1080 282"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M316.7 281.4H0V18.8C41 54.8 72.3 101.6 89.5 154.7C98 153.7 106.7 153.1 115.5 153.1C204.6 153.1 281.4 205.6 316.7 281.4Z"
        fill="#FFEEC0"
      />
      <path
        d="M1080 0.300049V281.4H870.6C870.3 276.4 870.1 271.3 870.1 266.2C870.1 137 959.6 28.9 1080 0.300049Z"
        fill="#FFEEC0"
      />
    </svg>
  );
}

CloudFrame1.propTypes = {
  className: PropTypes.string,
};

CloudFrame1.defaultProps = {
  className: "",
};
