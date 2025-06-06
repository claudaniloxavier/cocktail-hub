import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2D545E",
      dark: "#1E3A42",
      light: "#3D6E7A",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F5D5CB",
      light: "#F9E8E2",
      dark: "#E1B8A8",
      contrastText: "#2D545E",
    },
    background: {
      default: "#F2F2F2",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2D545E",
      secondary: "#6D6D6D",
      disabled: "#E0E0E0",
    },
    divider: "#E0E0E0",
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
