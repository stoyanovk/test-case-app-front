import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import validator from "validator";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MuiAlert from "@material-ui/lab/Alert";
import { useAuth, useSetServerError } from "hooks";
import { fetchLogin } from "store/auth/actions";

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

const isNotEmail = (value: string) => !validator.isEmail(value);

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    errors,
    formState,
    handleChange,
    resetState,
    hasError,
    handleCheckValidField,
  } = useAuth(initialState);

  const {
    errorMessage,
    setErrorMessage,
    resetErrorMessage,
  } = useSetServerError();

  const handleSubmit = async (
    e: React.FormEvent<EventTarget>
  ): Promise<any> => {
    if (errors.length) {
      setErrorMessage("full field please");
      resetErrorMessage();
      return;
    }

    resetState();
    dispatch(fetchLogin(formState));
    // if (response.status === "success") {
    //   // add token in storage
    //   history.push("/");
    // }

    // if (response.status === "error") {
    //   setErrorMessage(response.data.message);
    //   // reset with timeout (default value 6000ms)
    //   resetErrorMessage();
    // }
  };

  return (
    <Container maxWidth="xs">
      <form className={classes.form}>
        <TextField
          error={hasError("email")}
          value={formState.email}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          onChange={handleChange}
          onBlur={handleCheckValidField(isNotEmail)}
        />
        <TextField
          error={hasError("password")}
          value={formState.password}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          onChange={handleChange}
          onBlur={handleCheckValidField(validator.isEmpty)}
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

        {!!errorMessage ? (
          <MuiAlert severity="error">{errorMessage}</MuiAlert>
        ) : null}
      </form>
    </Container>
  );
};
export default SignIn;
