import PropTypes from "prop-types";

export default function BulanBintangIcon({ className }) {
  return (
    <svg
      className={className}
      data-name="Layer 1"
      fill="currentColor"
      id="Layer_1"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="cls-1"
        d="M32.61,24.9a1,1,0,0,0,.26,1l3.14,3-.69,4.3a1,1,0,0,0,.41,1,.94.94,0,0,0,.58.19,1,1,0,0,0,.47-.12l3.83-2.06,3.87,2a1,1,0,0,0,1.44-1.06l-.77-4.29,3.08-3.06a1,1,0,0,0,.24-1,1,1,0,0,0-.81-.67l-4.31-.58-2-3.89a1,1,0,0,0-.9-.55h0a1,1,0,0,0-.89.57l-1.88,3.92-4.3.67A1,1,0,0,0,32.61,24.9Zm5.92.54a1,1,0,0,0,.75-.56l1.23-2.57,1.29,2.55a1,1,0,0,0,.76.54l2.82.38-2,2a1,1,0,0,0-.28.88l.51,2.81-2.53-1.3a1,1,0,0,0-.93,0l-2.51,1.35.45-2.82a1,1,0,0,0-.29-.88l-2.07-2Z"
      />
      <path
        className="cls-1"
        d="M50.87,41.64a1,1,0,0,0-1.17-.22A16.71,16.71,0,0,1,33,12.59a1,1,0,0,0,.39-1.13,1,1,0,0,0-1-.69A21.23,21.23,0,1,0,50.77,43.23l.15-.27.08-.13A1,1,0,0,0,50.87,41.64ZM22.56,48.32A19.23,19.23,0,0,1,29.2,13.09,18.72,18.72,0,0,0,32.44,42.3a18.54,18.54,0,0,0,15,2.12A19.27,19.27,0,0,1,22.56,48.32Z"
      />
    </svg>
  );
}

BulanBintangIcon.propTypes = {
  className: PropTypes.string,
};

BulanBintangIcon.defaultProps = {
  className: "",
};
