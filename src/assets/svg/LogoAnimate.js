import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function Logo({ className }) {
  // eslint-disable-next-line object-curly-spacing
  const blink = { opacity: [1, 0, 1] };
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 540 790"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <path
        d="M520 270V770H20V270C20 131.9 131.9 20 270 20C408.1 20 520 131.9 520 270Z"
        fill="#1E293B"
      />
      {/* Border */}
      <path
        d="M270 20C408.1 20 520 131.9 520 270V770H20V270C20 131.9 131.9 20 270 20ZM270 0C233.6 0 198.2 7.1 164.9 21.2C132.7 34.8 103.9 54.3 79.1 79.1C54.3 103.9 34.8 132.8 21.2 164.9C7.1 198.2 0 233.6 0 270V770C0 781 9 790 20 790H520C531 790 540 781 540 770V270C540 233.6 532.9 198.2 518.8 164.9C505.2 132.7 485.7 103.9 460.9 79.1C436.1 54.3 407.2 34.8 375.1 21.2C341.8 7.1 306.4 0 270 0Z"
        fill="white"
      />
      {/* Moon */}
      <path
        d="M262.5 498.6C306.4 525.1 355 536.8 402.7 535.2C407.4 535 409.7 541 406.1 544C353.1 589.1 275.1 597.6 212.3 559.6C142.7 517.5 115 432.4 142.6 358.9C144.3 354.4 150.6 354.6 152 359.1C170.3 415.4 208 465.6 262.5 498.6Z"
        fill="white"
      />

      {/* Midle left */}
      <motion.path
        animate={blink}
        d="M94.2 268.5C100.827 268.5 106.2 263.127 106.2 256.5C106.2 249.873 100.827 244.5 94.2 244.5C87.5726 244.5 82.2 249.873 82.2 256.5C82.2 263.127 87.5726 268.5 94.2 268.5Z"
        fill="white"
        transition={{
          delay: 0.8,
          repeat: Infinity,
          ease: "easeOut",
          duration: 1.2,
        }}
      />
      {/* Top left */}
      <motion.path
        animate={blink}
        d="M199.4 143.3C206.027 143.3 211.4 137.927 211.4 131.3C211.4 124.673 206.027 119.3 199.4 119.3C192.773 119.3 187.4 124.673 187.4 131.3C187.4 137.927 192.773 143.3 199.4 143.3Z"
        fill="white"
        transition={{
          delay: 0.8,
          repeat: Infinity,
          ease: "easeOut",
          duration: 1.2,
        }}
      />
      {/* Top midle */}
      <motion.path
        animate={blink}
        d="M258 292.5C264.627 292.5 270 287.127 270 280.5C270 273.873 264.627 268.5 258 268.5C251.373 268.5 246 273.873 246 280.5C246 287.127 251.373 292.5 258 292.5Z"
        fill="white"
        transition={{
          delay: 0.9,
          repeat: Infinity,
          ease: "easeOut",
          duration: 1.2,
        }}
      />
      {/* Top Right */}
      <motion.path
        animate={blink}
        d="M438.2 214.5C444.827 214.5 450.2 209.127 450.2 202.5C450.2 195.873 444.827 190.5 438.2 190.5C431.573 190.5 426.2 195.873 426.2 202.5C426.2 209.127 431.573 214.5 438.2 214.5Z"
        fill="white"
        transition={{
          delay: 1,
          repeat: Infinity,
          ease: "easeOut",
          duration: 1.2,
        }}
      />

      <motion.path
        animate={blink}
        d="M94.2 645C100.827 645 106.2 639.627 106.2 633C106.2 626.373 100.827 621 94.2 621C87.5726 621 82.2 626.373 82.2 633C82.2 639.627 87.5726 645 94.2 645Z"
        fill="white"
        transition={{
          delay: 1,
          repeat: Infinity,
          ease: "easeOut",
          duration: 1.2,
        }}
      />
      {/* Middle */}
      <motion.path
        animate={blink}
        d="M373.1 407C379.727 407 385.1 401.627 385.1 395C385.1 388.373 379.727 383 373.1 383C366.473 383 361.1 388.373 361.1 395C361.1 401.627 366.473 407 373.1 407Z"
        fill="white"
        transition={{
          delay: 1.1,
          repeat: Infinity,
          ease: "easeOut",
          duration: 1.2,
        }}
      />
      {/* Last */}
      <motion.path
        animate={blink}
        d="M438.2 695.2C444.827 695.2 450.2 689.827 450.2 683.2C450.2 676.573 444.827 671.2 438.2 671.2C431.573 671.2 426.2 676.573 426.2 683.2C426.2 689.827 431.573 695.2 438.2 695.2Z"
        fill="white"
        transition={{
          delay: 1.2,
          repeat: Infinity,
          ease: "easeOut",
          duration: 1.2,
        }}
      />
    </svg>
  );
}

Logo.defaultProps = {
  className: "",
};

Logo.propTypes = {
  className: PropTypes.string,
};
