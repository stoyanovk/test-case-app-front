import React from "react";
import { Typography } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import { Main } from "./style";
const Auth = () => {
  return (
    <Main>
      <Typography variant="h2" component="h1">
        Test cases application
      </Typography>
      
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
