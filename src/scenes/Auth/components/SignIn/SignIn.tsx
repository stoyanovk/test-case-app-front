import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MuiAlert from "@material-ui/lab/Alert";
import { useAuth, useSetServerError } from "hooks";
import { Auth } from "api";

import { useStyles } from "./style";

type SignInType = {
  email: string;
  password: string;
  remember: boolean;
};

const initialState: SignInType = {
  email: "",
  password: "",
  remember: false,
};

const auth = new Auth();

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const { formState, handleChange, resetState } = useAuth(initialState);
  const { error, setError, resetError } = useSetServerError();

  const handleSubmit = async (
    e: React.FormEvent<EventTarget>
  ): Promise<any> => {
    resetState();
    const responce = await auth.login(formState);

    if (responce.status === "success") {
      // add token in storage
      history.push("/");
      console.log(responce);
    }
    if (responce.status === "error") {
      setError(responce.data.message);
      resetError();
    }
  };

  return (
    <Container maxWidth="xs">
      <form className={classes.form}>
        <TextField
          value={formState.email}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          onChange={handleChange}
        />
        <TextField
          value={formState.password}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          onChange={handleChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              name="remember"
              color="primary"
              checked={formState.remember}
            />
          }
          label="Remember me"
        />
        <Button
          onClick={handleSubmit}
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>

        {!!error ? <MuiAlert severity="error">{error}</MuiAlert> : null}
      </form>
    </Container>
  );
};
export default SignIn;
