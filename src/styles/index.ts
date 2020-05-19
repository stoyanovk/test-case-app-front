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
      main: "#0288d1",
      dark: "#005b9f",
      light: "#5eb8ff",
      contrastText: "#fff",
    },
    text: {
      primary: "#2d2d2d",
      secondary: "#757575",
      disabled: "#5eb8ff",
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      default: "#f9f9f9",
    },
  },
});

export default theme;
