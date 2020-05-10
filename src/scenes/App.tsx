import React from "react";
// import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";

import GlobalStyle from "../styles/global.style";
import theme from "../styles";

import Routers from "../routers";

function App() {
  return (
    // <Provider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routers />
    </ThemeProvider>
    // </Provider>
  );
}

export default App;
