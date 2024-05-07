import Default from "./default.json";

const Dark = {
  background: {
    primary: "#1c1c1c",
    elevated: "#343434",
    medium: "#303030",
  },
  text: {
    button: "#EDEDED",
    primary: "#EDEDED",
    grey: "#A0A0A0",
  },
  button: {
    primary: {
      background: {
        initial: Default.primary[600],
        disabled: "#A0A0A0",
        hover: Default.primary[500],
        active: Default.primary[600],
      },
    },
  },
  loading: {
    primary: Default.primary[600],
    secondary: "#EDEDED",
  },
};

export default Dark;
