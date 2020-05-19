import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import Title from "components/Title";
import LinkButton from "components/LinkButton";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import { Main, Row } from "./style";
const Auth = (props:any) => {
  console.log(props);
  return (
    <Main>
      <Title variant="h3" component="h1">
        Test case application
      </Title>
      <Container maxWidth="sm">
        <Row>
          <LinkButton to="auth/sign-in">Sign in</LinkButton>
          <LinkButton to="auth/sign-up">Sign un</LinkButton>
        </Row>
      </Container>
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
