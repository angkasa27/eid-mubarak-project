import PropTypes from "prop-types";

export default function Moon1({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 758 740"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M740.9 561.2C671 668 544.1 739.5 399.1 739.5C178.7 739.5 0 574.4 0 370.7C0 277.8 47.2 184.3 108.7 119.4C72.3 175 41.3 248.8 41.3 318.6C41.3 522.3 220 687.4 440.4 687.4C560.2 687.4 667.7 638.5 740.9 561.2Z"
        fill="#ED9636"
      />
      <path
        d="M752.4 542.3C748.8 548.7 744.9 555 740.9 561.2C667.8 638.5 560.2 687.4 440.3 687.4C219.9 687.4 41.2 522.3 41.2 318.6C41.2 280.1 47.6 242.9 59.5 208C78.8 151.2 117.5 103.3 167.6 70.3C232.9 27.3 312.8 2 399.1 2C400.4 2 401.7 1.99998 403 2.09998C248.9 40.7 136.6 161.1 136.6 303.5C136.6 477.2 303.7 618 509.7 618C602.4 618 687.1 589.5 752.4 542.3Z"
        fill="#FDDB64"
        stroke="#FDDB64"
        strokeMiterlimit="10"
        strokeWidth="3.3742"
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
