import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};

const rotateVariant = {
  hidden: {
    opacity: 0,
    rotate: "-180deg",
  },
  visible: {
    opacity: 1,
    rotate: "0deg",

    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};

export default function burger({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      height="538"
      viewBox="0 0 537 538"
      width="537"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate="visible"
        d="M457.1 182.4V75.6H344L268.5 0L193 75.6H79.9V182.4L0 262.3L75.5 337.9V450.9H182.3L268.5 537.1L354.7 450.9H461.5V337.9L537 262.3L457.1 182.4Z"
        fill="url(#paint0_linear_417_260)"
        initial="hidden"
        variants={rotateVariant}
      />
      <motion.path
        animate="visible"
        d="M191.3 430.7H96.3002V329.9L29.2002 262.7L100.5 191.4V96.4002H201.3L268.5 29.2002L335.7 96.4002H436.5V191.4L507.8 262.7L440.7 329.9V430.7H345.7L268.5 507.9L191.3 430.7Z"
        fill="url(#paint1_radial_417_260)"
        initial="hidden"
        variants={rotateVariant}
      />
      <path
        d="M220.1 413.901L255.8 345.601L282 359.201L246.3 427.601L220.1 413.901Z"
        fill="url(#paint2_linear_417_260)"
      />
      <path
        d="M316.9 413.901L281.2 345.601L255 359.201L290.7 427.601L316.9 413.901Z"
        fill="url(#paint3_linear_417_260)"
      />
      <path
        d="M263.6 2.90039H237.5V194.5H263.6V2.90039Z"
        fill="url(#paint4_linear_417_260)"
      />
      <path
        d="M299.5 2.90039H273.8V194.5H299.5V2.90039Z"
        fill="url(#paint5_linear_417_260)"
      />
      <path
        d="M268.5 205.9L237.5 174.9L257.7 154.7C263.7 148.7 273.3 148.7 279.3 154.7L299.5 174.9L268.5 205.9Z"
        fill="url(#paint6_linear_417_260)"
      />
      <path
        d="M299.5 236.9L268.5 205.9L299.5 174.8L330.5 205.9L299.5 236.9Z"
        fill="url(#paint7_linear_417_260)"
      />
      <path
        d="M330.5 267.9L299.5 236.9L330.5 205.9L361.5 236.9L330.5 267.9Z"
        fill="url(#paint8_linear_417_260)"
      />
      <path
        d="M361.5 298.9L330.5 267.9L361.5 236.9L381.7 257.1C387.7 263.1 387.7 272.7 381.7 278.7L361.5 298.9Z"
        fill="url(#paint9_linear_417_260)"
      />
      <path
        d="M237.5 236.9L206.5 205.9L237.5 174.8L268.5 205.9L237.5 236.9Z"
        fill="url(#paint10_linear_417_260)"
      />
      <path
        d="M268.5 267.9L237.5 236.9L268.5 205.9L299.5 236.9L268.5 267.9Z"
        fill="url(#paint11_linear_417_260)"
      />
      <path
        d="M299.5 298.9L268.5 267.9L299.5 236.9L330.5 267.9L299.5 298.9Z"
        fill="url(#paint12_linear_417_260)"
      />
      <path
        d="M330.5 329.9L299.5 298.9L330.5 267.9L361.5 298.9L330.5 329.9Z"
        fill="url(#paint13_linear_417_260)"
      />
      <path
        d="M206.5 267.9L175.5 236.9L206.5 205.9L237.5 236.9L206.5 267.9Z"
        fill="url(#paint14_linear_417_260)"
      />
      <path
        d="M237.5 298.9L206.5 267.9L237.5 236.9L268.5 267.9L237.5 298.9Z"
        fill="url(#paint15_linear_417_260)"
      />
      <path
        d="M268.5 329.9L237.5 298.9L268.5 267.9L299.5 298.9L268.5 329.9Z"
        fill="url(#paint16_linear_417_260)"
      />
      <path
        d="M299.5 360.9L268.5 329.9L299.5 298.9L330.5 329.9L299.5 360.9Z"
        fill="url(#paint17_linear_417_260)"
      />
      <path
        d="M175.5 298.9L155.3 278.7C149.3 272.7 149.3 263.1 155.3 257.1L175.5 236.9L206.5 267.9L175.5 298.9Z"
        fill="url(#paint18_linear_417_260)"
      />
      <path
        d="M206.5 329.9L175.5 298.9L206.5 267.9L237.5 298.9L206.5 329.9Z"
        fill="url(#paint19_linear_417_260)"
      />
      <path
        d="M237.5 360.9L206.5 329.9L237.5 298.9L268.5 329.9L237.5 360.9Z"
        fill="url(#paint20_linear_417_260)"
      />
      <path
        d="M257.7 381.1L237.5 360.9L268.5 329.9L299.5 360.9L279.3 381.1C273.3 387.1 263.7 387.1 257.7 381.1Z"
        fill="url(#paint21_linear_417_260)"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_417_260"
          x1="-0.0449"
          x2="537.045"
          y1="268.576"
          y2="268.576"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(268.5 268.576) scale(239.347)"
          gradientUnits="userSpaceOnUse"
          id="paint1_radial_417_260"
          r="1"
        >
          <stop stopColor="#6F1379" />
          <stop offset="0.7933" stopColor="#4A0023" />
        </radialGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_417_260"
          x1="220.105"
          x2="282.023"
          y1="386.594"
          y2="386.594"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint3_linear_417_260"
          x1="254.976"
          x2="316.894"
          y1="386.594"
          y2="386.594"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint4_linear_417_260"
          x1="237.494"
          x2="263.58"
          y1="98.6936"
          y2="98.6936"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint5_linear_417_260"
          x1="273.784"
          x2="299.505"
          y1="98.6936"
          y2="98.6936"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint6_linear_417_260"
          x1="237.494"
          x2="299.505"
          y1="178.007"
          y2="178.007"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint7_linear_417_260"
          x1="268.5"
          x2="330.51"
          y1="205.854"
          y2="205.854"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint8_linear_417_260"
          x1="299.505"
          x2="361.516"
          y1="236.86"
          y2="236.86"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint9_linear_417_260"
          x1="330.511"
          x2="386.205"
          y1="267.866"
          y2="267.866"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint10_linear_417_260"
          x1="206.489"
          x2="268.499"
          y1="205.854"
          y2="205.854"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint11_linear_417_260"
          x1="237.494"
          x2="299.505"
          y1="236.86"
          y2="236.86"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint12_linear_417_260"
          x1="268.5"
          x2="330.51"
          y1="267.866"
          y2="267.866"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint13_linear_417_260"
          x1="299.505"
          x2="361.516"
          y1="298.871"
          y2="298.871"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint14_linear_417_260"
          x1="175.483"
          x2="237.494"
          y1="236.86"
          y2="236.86"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint15_linear_417_260"
          x1="206.489"
          x2="268.499"
          y1="267.866"
          y2="267.866"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint16_linear_417_260"
          x1="237.494"
          x2="299.505"
          y1="298.871"
          y2="298.871"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint17_linear_417_260"
          x1="268.5"
          x2="330.51"
          y1="329.877"
          y2="329.877"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint18_linear_417_260"
          x1="150.794"
          x2="206.488"
          y1="267.866"
          y2="267.866"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint19_linear_417_260"
          x1="175.483"
          x2="237.494"
          y1="298.871"
          y2="298.871"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint20_linear_417_260"
          x1="206.489"
          x2="268.499"
          y1="329.877"
          y2="329.877"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint21_linear_417_260"
          x1="237.494"
          x2="299.505"
          y1="357.724"
          y2="357.724"
        >
          <stop stopColor="#9E5E1E" />
          <stop offset="0.3184" stopColor="#FEF1AD" />
          <stop offset="0.6872" stopColor="#915113" />
          <stop offset="1" stopColor="#FAC97D" />
        </linearGradient>
      </defs>
    </svg>
  );
}
