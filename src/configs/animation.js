export const UpVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
    },
  },
  hidden: {
    opacity: 0,
    y: 10,
    transition: {
      type: "tween",
    },
  },
};

export const DownVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
    },
  },
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      type: "tween",
    },
  },
};

export const LeftVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
    },
  },
  hidden: {
    opacity: 0,
    x: 10,
    transition: {
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: {
      type: "tween",
    },
  },
};

export const RightVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
    },
  },
  hidden: {
    opacity: 0,
    x: -10,
    transition: {
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    x: 10,
    transition: {
      type: "tween",
    },
  },
};

export const FadeInVariant = {
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: "tween",
    },
  },
};

export const ZoomVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: {
      type: "tween",
    },
  },
};

export const containerVariant = {
  hidden: {
    x: "50vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: "-50vw",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

export const contentVariant = {
  visible: {
    transition: {
      delay: 1,
      type: "tween",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    transition: {
      type: "tween",
    },
  },
  exit: {
    transition: {
      type: "tween",
      when: "afterChildren",
    },
  },
};

export const contentVariant2 = {
  visible: {
    transition: {
      type: "tween",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    transition: {
      type: "tween",
    },
  },
  exit: {
    transition: {
      type: "tween",
      when: "afterChildren",
    },
  },
};
