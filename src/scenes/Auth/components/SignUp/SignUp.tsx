import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MuiAlert from "@material-ui/lab/Alert";
import { useAuth } from "hooks";
import { fetchRegister, setError } from "store/auth/actions";
import { authSelector } from "store/auth/selectors";
import { isNotEmail, isNotAlpha, isEmpty } from "utils/validators";

import { useStyles } from "./style";

type SignUpType = {
  email: string;
  password: string;
  user_name: string;
  confirm: string;
};

const initialState: SignUpType = {
  email: "",
  password: "",
  user_name: "",
  confirm: "",
};

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { error, message } = useSelector(authSelector);
  const {
    errors,
    formState,
    changeState,
    resetState,
    hasError,
    handleCheckValidForm,
    handleCheckValidField,
  } = useAuth(initialState);

  const resetError = useCallback(
    () => dispatch(setError({ message: "", isError: false })),
    [dispatch]
  );

  const handleChange = useCallback(
    ({ target: { name, value } }: any) => {
      changeState({ name, value });
      resetError();
    },
    [changeState, resetError]
  );

  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    const isFormFieldNotValid = handleCheckValidForm({
      user_name: isNotAlpha,
      email: isNotEmail,
      password: isEmpty,
      confirm: isEmpty,
    });

    if (errors.length || isFormFieldNotValid) {
      return;
    }
    dispatch(fetchRegister(formState));
    resetState();
  };
  const messageType: "error" | "success" = error ? "error" : "success";
  return (
    <Container maxWidth="xs">
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              value={formState.user_name}
              error={hasError("user_name")}
              name="user_name"
              variant="outlined"
              required
              fullWidth
              id="user_name"
              label="Name"
              onChange={handleChange}
              onBlur={handleCheckValidField(isNotAlpha)}
              helperText={hasError("user_name") && "invalid value"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={formState.email}
              error={hasError("email")}
              variant="outlined"
              required
              fullWidth
              label="Email Address"
              name="email"
              onChange={handleChange}
              onBlur={handleCheckValidField(isNotEmail)}
              helperText={hasError("email") && "invalid value"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={formState.password}
              error={hasError("password")}
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={handleChange}
              onBlur={handleCheckValidField(isEmpty)}
              helperText={hasError("password") && "invalid value"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={formState.confirm}
              error={hasError("confirm")}
              variant="outlined"
              required
              fullWidth
              name="confirm"
              label="Confirm password"
              type="password"
              onChange={handleChange}
              onBlur={handleCheckValidField(isEmpty)}
              helperText={hasError("confirm") && "invalid value"}
            />
          </Grid>
        </Grid>
        <Button
          onClick={handleSubmit}
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        {message && <MuiAlert severity={messageType}>{message}</MuiAlert>}
      </form>
    </Container>
  );
}
