import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1a237e",
      light: "#534bae",
      dark: "#000051",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00838f",
      dark: "#005662",
      light: "#4fb3bf",
      contrastText: "#fff",
    },
    text: {
      primary: "#2d2d2d",
      secondary: "#757575",
      disabled: "#5eb8ff",
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      default: "#f9f9f9",
    },
  },
});

export default theme;
