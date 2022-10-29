import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#F93E6C",
    },
    secondary: {
      main: "#2CCFBC",
      light: "#00C3F9",
    },
    success: {
      main: "#34D182",
      light: "#D6FCDA",
    },
    error: {
      main: "#FF4339",
      light: "#FFE8DA",
    },
    warning: {
      main: "#83828E",
      light: "#FEF4DE",
    },
    info: {
      main: "#00C3F9",
    },

    grey: {
      "300": "#C1C0C7",
      "500": "#9897A1",
      "600": "#83828E",
      "700": "#464356",
      "800": "#5A5869",
      "900": "#464356",
    },

    text: {
      primary: "#5A5869",
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: "72px",
    },
    h2: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 36,
      lineHeight: "45px",
    },
    h4: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "36px",
    },
    h5: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: "36px",
    },
    h6: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "27px",
    },
    body1: {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "18px",
    },
    body2: {
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: 12,
      lineHeight: "18px",
    },
    button: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "18px",
    },
    caption: {
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "24px",
    },
  },
});

export { theme };
