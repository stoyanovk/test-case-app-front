import React from "react";
import Input from "components/Input";
import { useAuth } from "hooks";
import { Container, Grid } from "@material-ui/core";

type SignInState = {
  email: string;
  password: string;
};
const initialState: SignInState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const { formState, handleChange } = useAuth(initialState);
  return (
    <Container maxWidth="sm">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Input
              onChange={handleChange}
              label="Email"
              name="email"
              fullWidth
              value={formState.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              onChange={handleChange}
              label="Password"
              name="password"
              type="password"
              value={formState.password}
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default SignIn;
