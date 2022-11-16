import { createTheme, PaletteColor, lighten, darken } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    actionSecondary: PaletteColor;
    heliotrope: PaletteColor;
  }
  interface PaletteOptions {
    actionSecondary: PaletteColor;
    heliotrope: PaletteColor;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    actionSecondary: true;
    heliotrope: true;
  }
}

const { palette } = createTheme();
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
      light: "#FC9FB6",
    },
    secondary: {
      main: "#2CCFBC",
      light: "#96E7DE",
      contrastText: "white",
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
      "100": "#EAEAEC",
      "200": "#D6D5D9",
      "300": "#C1C0C7",
      "500": "#9897A1",
      "600": "#83828E",
      "700": "#6F6D7B",
      "800": "#5A5869",
      "900": "#464356",
      A100: "#312E43",
      A200: "#F6F8FA",
    },

    actionSecondary: palette.augmentColor({
      color: {
        main: "#04385A",
        light: lighten("#04385A", 0.5),
        dark: darken("#04385A", 0.5),
        contrastText: "white",
      },
    }),

    heliotrope: palette.augmentColor({
      color: {
        main: "#CE69FE",
        light: lighten("#CE69FE", 0.5),
        dark: darken("#CE69FE", 0.5),
        contrastText: "white",
      },
    }),

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
      textTransform: "none",
    },
    caption: {
      fontFamily: "Inter",
      fontWeight: 600,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "11px 12px",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          color: "#5A5869",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: `#C1C0C7`,
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: `2px solid #04385A`,
            },
          },
          "& .MuiInputBase-input": {
            padding: "12px 16px",
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#9897A1",
          top: "-2.5px",
          left: "1px",
          "&.Mui-focused": {
            color: "#04385A",
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#A5A5AA",
          marginRight: "5px",

          "&.Mui-checked": {
            color: "#04385A",
          },

          "&:hover": {
            backgroundColor: lighten("#04385A", 0.9),
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: "#2CCFBC",
          fontFamily: "Inter",
          fontWeight: 600,
          textDecoration: "none",

          "@media (min-width: 0px)": {
            fontSize: "5px",
            lineHeight: "7px",
          },
          "@media (min-width: 768px)": {
            fontSize: "8px",
            lineHeight: "11px",
          },
          "@media (min-width: 1024px)": {
            fontSize: "10px",
            lineHeight: "15px",
          },
          "@media (min-width: 1440px)": {
            fontSize: "14px",
            lineHeight: "21px",
          },

          "&:hover": {
            color: darken("#2CCFBC", 0.1),
            transition: "250ms",
            cursor: "pointer",
          },
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: "1.5rem",
          label: {
            margin: 0,
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#FF4339",
          "@media (min-width: 0)": {
            fontSize: "10px",
            lineHeight: "14px",
          },
          "@media (min-width: 1440px)": {
            fontSize: "12px",
            lineHeight: "16px",
          },
          margin: "0.5rem  0.75rem 0 0.75rem",

          "&.Mui-error": {
            "@media (min-width: 0)": {
              fontSize: "10px",
              lineHeight: "14px",
            },
            "@media (min-width: 1440px)": {
              fontSize: "12px",
              lineHeight: "16px",
            },
            margin: "0.5rem  0.75rem 0 0.75rem",
          },
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          alignItems: "center",
          padding: "1rem",
          borderRadius: ".5rem",
          "& .MuiAlert-icon": {
            flex: 0,
            padding: 0,
          },
          "& .MuiAlert-message": {
            padding: 0,
          },
          "& .MuiAlert-action": {
            padding: 0,
            margin: "auto 0 0 auto",
            "& :first-of-type": {
              padding: 0,
            },
          },
        },
      },
    },

    MuiAlertTitle: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
});

theme.typography.h1 = {
  [theme.breakpoints.up("xs")]: {
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
