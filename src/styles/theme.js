const customTheme = {
  textarea: {
    defaultProps: {
      className: "font-jakarta",
      size: "lg",
    },
    styles: {
      base: {
        textarea: {
          fontSize: "text-base",
        },
        label: {
          fontSize: "text-sm",
        },
      },
    },
  },
  select: {
    defaultProps: {
      className: "font-jakarta",
      size: "lg",
    },
    styles: {
      base: {
        select: {
          fontSize: "text-base",
        },
        label: {
          fontSize: "text-sm",
        },
        container: {
          height: "!h-12",
        },
        option: {
          active: {
            backgroundColor: "bg-white",
          },
        },
      },
    },
  },
  button: {
    defaultProps: {
      className: "font-jakarta ",
    },
    styles: {
      sizes: {
        md: {
          font: "text-base",
        },
      },
    },
  },
  iconButton: {
    defaultProps: {
      className: "font-jakarta ",
    },
    styles: {
      sizes: {
        md: {
          font: "text-base",
        },
      },
    },
  },
  breadcrumbs: {
    styles: {
      base: {
        list: {
          padding: "p-0",
          backgroundColor: "bg-transparent",
          backgroundOpacity: "bg-opacity-100",
        },
        item: {
          initial: {
            fontFamily: "font-jakarta",
            fontSize: "text-base",
            fontWeight: "last:font-semibold",
            hover: "hover:last:text-blue-gray-900",
            cursor: "cursor-normal",
          },
        },
        separator: {
          userSelcet: "select-none",
        },
      },
    },
  },
  dialog: {
    styles: {
      sizes: {
        md: {
          width: "w-full md:w-[32rem]",
          minWidth: "min-w-0",
          maxWidth: "max-w-[95%]",
        },
      },
    },
  },
};

export default customTheme;
