import Default from "./default.json";

const Light = {
  primary: Default.primary,
  background: {
    primary: "#1c1c1c",
    elevated: "#232323",
    medium: "#303030",
  },
  sider: {
    background: {
      0: "rgb(35, 35, 35)",
      1: "rgb(35, 35, 35)",
      2: "rgb(40, 40, 40)",
      3: "rgb(45, 45, 45)",
      4: "rgb(50, 50, 50)",
      5: "rgb(55, 55, 55)",
    },
  },
  outline: "#4f4f4f",
  text: {
    button: "#1c1c1c",
    primary: "#ffffff",
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
  input: {
    outline: {
      initial: "#d1d1d1",
      active: Default.primary["500"],
      error: Default.danger["500"],
    },
    background: {
      initial: "transparent",
      disabled: "#d4d4d4",
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

export default Light;
