import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Routers from "routers";
import { authSelector } from "store/auth/selectors";
import { getAuthUser } from "store/auth/actions";
import Wrapper from "components/Wrapper";
import theme from "styles";
import "styles/global.css";

function App() {
  const { auth, loading }: { auth: boolean; loading: boolean } = useSelector(
    authSelector
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    !auth && dispatch(getAuthUser());
  }, [auth, dispatch]);

  return (
    <Suspense fallback={<CircularProgress size={200} />}>
      <ThemeProvider theme={theme}>
        {loading ? (
          <CircularProgress size={200} />
        ) : (
          <Router>
            <Wrapper isAuth={auth}>
              <Routers auth={auth} />
            </Wrapper>
          </Router>
        )}
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
