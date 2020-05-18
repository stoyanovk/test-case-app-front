import React from "react";
import Input from "components/Input";
import { useAuth } from "hooks";
import { Container, Grid } from "@material-ui/core";

type SignUpState = {
  email: string;
  user_name: string;
  password: string;
  confirm: string;
};
const initialState: SignUpState = {
  email: "",
  user_name: "",
  password: "",
  confirm: "",
};

const SignUp = () => {
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
              label="Name"
              name="user_name"
              value={formState.user_name}
              fullWidth
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
          <Grid item xs={12}>
            <Input
              onChange={handleChange}
              label="Confirm password"
              name="confirm"
              type="password"
              value={formState.confirm}
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default SignUp;
