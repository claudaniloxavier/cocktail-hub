import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9147FF",
      dark: "#6A00F4",
      light: "#AD7BFF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#00ADB5",
      light: "#00E5D4",
      dark: "#007F87",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F7F7F8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#4A4A4A",
      disabled: "#E0E0E0",
    },
    error: {
      main: "#FF33333",
    },
    warning: {
      main: "#FF9C27",
    },
    info: {
      main: "#0099FF",
    },
    success: {
      main: "#2EB67D",
    },
    divider: "#E0E0E0",
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 600,
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
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0",
          "&:last-child": {
            padding: "0",
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          "ul>li>button": {
            borderRadius: "8px",
            width: 56,
            height: 56,
            border: "none",

            "&.Mui-selected": {
              backgroundColor: "#DECAFF",
              color: "#6A00F4",
            },
          },
        },
      },
    },
  },
});

export default theme;
