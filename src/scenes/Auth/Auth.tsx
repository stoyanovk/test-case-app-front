import React from "react";
import { Switch, Route } from "react-router-dom";
import Title from "components/Title";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import { Main } from "./style";
const Auth = () => {
  return (
    <Main>
      <Title component="h1">Test case application</Title>
      <Switch>
        <Route exact path="/auth/sign-in" component={SignIn} />
        <Route exact path="/auth/sign-up" component={SignUp} />
        <Route exact path="/auth/reset-password" component={ResetPassword} />
        {/* <Route path={`${match.path}/update-password/:token`} /> */}
      </Switch>
    </Main>
  );
};
export default Auth;
