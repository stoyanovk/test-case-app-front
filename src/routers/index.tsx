import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";

import routes from "./routers";

export default () => (
  <Router basename={"/"}>
    <Switch>
      {routes.map(({ path, component, exact }) => (
        <Route component={component} exact={exact} path={path} key={path} />
      ))}
      <Redirect to="/auth" />
    </Switch>
  </Router>
);
