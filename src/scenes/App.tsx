import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import Routers from "routers";
import store from "store";
import GlobalStyle from "styles/global.style";
import theme from "styles";

function App() {
  React.useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routers />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
