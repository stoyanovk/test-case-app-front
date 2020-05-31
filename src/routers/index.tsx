import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Auth from "scenes/Auth";
import ConfirmRegister from "scenes/ConfirmRegister";
import { getAuth } from "store/auth/selectors";
import routes from "./privateRoutes";

export default () => {
  const auth = useSelector(getAuth);

  return (
    <Router basename={"/"}>
      <Switch>
        {auth &&
          routes.map(({ path, component, exact }) => (
            <Route render={component} exact={exact} path={path} key={path} />
          ))}
        <Route
          component={ConfirmRegister}
          path="/auth/:token/confirm-register"
        />
        <Route component={Auth} path="/auth/:subpage" />
        <Redirect to="/auth/sign-in" />
      </Switch>
    </Router>
  );
};
