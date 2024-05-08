declare const Light: {
  background: {
    primary: string;
    elevated: string;
    medium: string;
  };
  outline: string;
  text: {
    button: string;
    primary: string;
    secondary: string;
    grey: string;
  };
  button: {
    primary: {
      background: {
        initial: string;
        disabled: string;
        hover: string;
        active: string;
        "initial-danger": string;
        "hover-danger": string;
        "active-danger": string;
      };
      stroke: string;
      "stroke-danger": string;
    };
    secondary: {
      background: {
        initial: string;
        disabled: string;
        hover: string;
        active: string;
        "initial-danger": string;
        "hover-danger": string;
        "active-danger": string;
      };
      stroke: string;
      "stroke-danger": string;
    };
    outline: {
      text: string;
      "text-danger": string;
      disabled: string;
      background: {
        initial: string;
        hover: string;
        active: string;
        "hover-danger": string;
        "active-danger": string;
      };
      stroke: string;
      "stroke-danger": string;
    };
  };
  loading: {
    secondary: {
      fixed: string;
      spin: string;
    };
    primary: {
      fixed: string;
      spin: string;
    };
    outline: {
      fixed: string;
      spin: string;
      "spin-danger": string;
    };
  };
};
export default Light;
