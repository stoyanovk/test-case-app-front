import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import Routers from "routers";
import { getAuth } from "store/auth/selectors";
import { getAuthUser } from "store/auth/actions";
import GlobalStyle from "styles/global.style";
import theme from "styles";

function App() {  
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    !auth && dispatch(getAuthUser());
  }, [auth, dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
