import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Routers from "routers";
import { getAuth } from "store/auth/selectors";
import { getAuthUser } from "store/auth/actions";
import Wrapper from "components/Wrapper";
import GlobalStyle from "styles/global.style";
import theme from "styles";

function App() {
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    !auth && dispatch(getAuthUser());
  }, [auth, dispatch]);

  return (
    <Suspense fallback={<CircularProgress size={200} />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper isAuth={auth}>
          <Routers />
        </Wrapper>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
