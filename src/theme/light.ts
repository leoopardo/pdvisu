import Default from "./default.json";

const Light = {
  primary: Default.primary,
  background: {
    primary: "#ffffff", // Cor de fundo principal alterada para branco
    elevated: "#f5f5f5", // Cor de fundo elevado alterada para um cinza claro
    medium: "#f0f0f0", // Cor de fundo médio alterada para um cinza um pouco mais escuro
  },
  sider: {
    background: {
      0: "#ffffff", // Cores de fundo do sider ajustadas para branco
      1: "#f5f5f5",
      2: "#eeeeee",
      3: "#e0e0e0",
      4: "#d3d3d3",
      5: "#c0c0c0",
    },
  },
  outline: "#bdbdbd", // Cor do contorno ajustada para um cinza mais claro
  text: {
    button: "#ffffff", // Cor do texto do botão alterada para branco
    primary: "#1c1c1c", // Cor do texto principal alterada para preto
    secondary: "#1c1c1c", // Cor do texto secundário também alterada para preto
    grey: "#757575", // Cor do texto cinza ajustada para um cinza mais claro
  },
  button: {
    primary: {
      background: {
        initial: Default.primary[500],
        disabled: "#757575", // Cor do botão primário desativado ajustada para um cinza mais claro
        hover: Default.primary[400], // Cor do botão primário ao passar o mouse ajustada para uma tonalidade mais clara do tom primário
        active: Default.primary[300], // Cor do botão primário ativo ajustada para uma tonalidade mais clara do tom primário
        ["initial-danger"]: Default.danger[500],
        ["hover-danger"]: Default.danger[400],
        ["active-danger"]: Default.danger[300],
      },
      stroke: Default.primary[100],
      ["stroke-danger"]: Default.danger[100],
    },
    secondary: {
      background: {
        initial: Default.primary[500],
        disabled: "#757575",
        hover: Default.primary[400],
        active: Default.primary[300],
        ["initial-danger"]: Default.danger[500],
        ["hover-danger"]: Default.danger[400],
        ["active-danger"]: Default.danger[300],
      },
      stroke: Default.primary[100],
      ["stroke-danger"]: Default.danger[100],
    },
    outline: {
      text: Default.primary[500],
      ["text-danger"]: Default.danger[500],
      disabled: "#bdbdbd", // Cor do texto do botão desativado ajustada para um cinza mais claro
      background: {
        initial: Default.transparent,
        hover: "#f5f5f5", // Cor de fundo do botão ao passar o mouse ajustada para um cinza claro
        active: Default.transparent,
        ["hover-danger"]: "#fce4ec", // Cor de fundo do botão ao passar o mouse em caso de perigo ajustada para um rosa claro
        ["active-danger"]: Default.transparent,
      },
      stroke: Default.primary[200],
      ["stroke-danger"]: Default.danger[200],
    },
  },
  loading: {
    secondary: { fixed: "transparent", spin: "#000" }, // Cores de carregamento ajustadas para tons de cinza claro
    primary: { fixed: "transparent", spin: "#ffffff" },
    outline: {
      fixed: "transparent",
      spin: "#0da84c", // Cor de carregamento de contorno ajustada para um verde mais claro
      ["spin-danger"]: "#e53935", // Cor de carregamento de contorno em caso de perigo ajustada para um vermelho claro
    },
  },
};

export default Light;
