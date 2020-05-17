import React from "react";
// import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import Routers from "routers";
import Wrapper from "components/Wrapper";
import GlobalStyle from "styles/global.style";
import theme from "styles";

function App() {
  React.useEffect(() => {}, []);

  return (
    // <Provider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Routers />
      </Wrapper>
    </ThemeProvider>
    // </Provider>
  );
}

export default App;
