import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#4F2D80",
    },
    secondary: {
      main: "#F4F1F7",
    },
    error: {
      main: "#DE5159",
    },
    success: {
      main: "#56C57D",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "#4F2D80",
          backgroundColor: "#fff",
          boxShadow: "0px 2px 3px -1px #142F471F",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "50px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#4F2D80",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Poppins", '"Segoe UI"', "Roboto"].join(","),
  },
});
