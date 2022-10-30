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
    },
    h2: {
      fontFamily: "Inter",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Inter",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Inter",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Inter",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "Inter",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Inter",
      fontWeight: 600,
    },
    button: {
      fontFamily: "Inter",
      fontWeight: 700,
    },
    caption: {
      fontFamily: "Inter",
      fontWeight: 600,
    },
  },
});

theme.typography.h1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "25.6px",
    lineHeight: "38.4px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "34px",
    lineHeight: "51.2px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "48px",
    lineHeight: "72px",
  },
  ...theme.typography.h1,
};

theme.typography.h2 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "12px",
    lineHeight: "15px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "12px",
    lineHeight: "15px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "19.2px",
    lineHeight: "24px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "25.6px",
    lineHeight: "32px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "36px",
    lineHeight: "45px",
  },
  ...theme.typography.h2,
};

theme.typography.h4 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "8px",
    lineHeight: "12px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "8px",
    lineHeight: "12px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "12.8px",
    lineHeight: "19.2px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "17px",
    lineHeight: "25.6px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "24px",
    lineHeight: "36px",
  },
  ...theme.typography.h4,
};

theme.typography.h5 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "7px",
    lineHeight: "12px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "7px",
    lineHeight: "12px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "11px",
    lineHeight: "19.2px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "14.5px",
    lineHeight: "25.6px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "20px",
    lineHeight: "36px",
  },
  ...theme.typography.h5,
};

theme.typography.h6 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "6px",
    lineHeight: "9px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "6px",
    lineHeight: "9px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "10px",
    lineHeight: "14.5px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "13px",
    lineHeight: "19.2px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "18px",
    lineHeight: "27px",
  },
  ...theme.typography.h6,
};

theme.typography.body1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "5px",
    lineHeight: "6px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "5px",
    lineHeight: "6px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "7.5px",
    lineHeight: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "10px",
    lineHeight: "13px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "14px",
    lineHeight: "18px",
  },
  ...theme.typography.body1,
};

theme.typography.body2 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "4px",
    lineHeight: "6px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "4px",
    lineHeight: "6px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "6.5px",
    lineHeight: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "8.5px",
    lineHeight: "13px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "12px",
    lineHeight: "18px",
  },
  ...theme.typography.body2,
};

theme.typography.button = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "5px",
    lineHeight: "6px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "5px",
    lineHeight: "6px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "7.5px",
    lineHeight: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "10px",
    lineHeight: "13px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "14px",
    lineHeight: "18px",
  },
  ...theme.typography.button,
};

theme.typography.caption = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "6px",
    lineHeight: "8px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "6px",
    lineHeight: "8px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "8.5px",
    lineHeight: "13px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "11px",
    lineHeight: "17px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  ...theme.typography.caption,
};

export { theme };
