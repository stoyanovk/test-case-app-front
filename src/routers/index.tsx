import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "scenes/Auth";
import Projects from "scenes/Projects";
import Home from "scenes/Home";
import Tasks from "scenes/Tasks";
import ConfirmRegister from "scenes/ConfirmRegister";

export default ({ auth }: { auth: boolean }) => {
  return (
    <Switch>
      <Route
        render={() => (auth ? <Home /> : <Redirect to="/auth/sign-in" />)}
        exact
        path="/"
      />
      <Route
        render={() => (auth ? <Tasks /> : <Redirect to="/auth/sign-in" />)}
        exact
        path="/projects/:project_id/tasks/:task_id"
      />
      <Route component={Auth} path="/auth/:subpage" />
      <Route
        render={() => (auth ? <Projects /> : <Redirect to="/auth/sign-in" />)}
        path="/projects/:project_id"
        exact
      />

      <Route component={ConfirmRegister} path="/auth/:token/confirm-register" />
      <Redirect to="/auth/sign-in" />
    </Switch>
  );
};
