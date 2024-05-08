import Default from "./default.json";

const Dark = {
  background: {
    primary: "#1c1c1c",
    elevated: "#343434",
    medium: "#303030",
  },
  text: {
    button: "#1c1c1c",
    primary: "#1c1c1c",
    secondary: "#ffffff",
    grey: "#A0A0A0",
  },
  button: {
    primary: {
      background: {
        initial: Default.primary[500],
        disabled: "#A0A0A0",
        hover: Default.primary[400],
        active: Default.primary[500],
        ["initial-danger"]: Default.danger[500],
        ["hover-danger"]: Default.danger[300],
        ["active-danger"]: Default.danger[500],
      },
      stroke: Default.primary[100],
      ["stroke-danger"]: Default.danger[100],
    },
    secondary: {
      background: {
        initial: Default.primary[500],
        disabled: "#A0A0A0",
        hover: Default.primary[400],
        active: Default.primary[500],
        ["initial-danger"]: Default.danger[500],
        ["hover-danger"]: Default.danger[300],
        ["active-danger"]: Default.danger[500],
      },
      stroke: Default.primary[100],
      ["stroke-danger"]: Default.danger[100],
    },
    outline: {
      text: Default.primary[500],
      ["text-danger"]: Default.danger[500],
      disabled: "#9e9e9e",
      background: {
        initial: Default.transparent,
        hover: Default.primary[50],
        active: Default.transparent,
        ["hover-danger"]: Default.danger[50],
        ["active-danger"]: Default.transparent,
      },
      stroke: Default.primary[200],
      ["stroke-danger"]: Default.danger[200],
    },
  },
  loading: {
    secondary: { fixed: "transparent", spin: "rgb(237, 237, 237, 0.8)" },
    primary: { fixed: "transparent", spin: "rgb(28, 28, 28, 0.8)" },
    outline: {
      fixed: "transparent",
      spin: "rgb(13, 172, 72, 0.8)",
      ["spin-danger"]: "rgb(229, 57, 53, 0.8)",
    },
  },
};

export default Dark;
