import React from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MuiAlert from "@material-ui/lab/Alert";
import { useAuth } from "hooks";
import { fetchRegister } from "store/auth/actions";
import { messageSelector } from "store/auth/selectors";
import { isNotEmail, isNotAlpha } from "utils/validators";

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
  const { serverMessage, errorMessage } = useSelector((state) =>
    messageSelector(state)
  );
  const {
    errors,
    formState,
    handleChange,
    resetState,
    hasError,
    handleCheckValidForm,
    handleCheckValidField,
  } = useAuth(initialState);

  const handleSubmit = async (
    e: React.FormEvent<EventTarget>
  ): Promise<any> => {
    const isFormFieldNotValid = handleCheckValidForm({
      fields: ["user_name", "email", "password", "confirm"],
      checkFunctions: [
        isNotAlpha,
        isNotEmail,
        validator.isEmpty,
        validator.isEmpty,
      ],
    });

    if (errors.length || isFormFieldNotValid) {
      return;
    }
    resetState();
    dispatch(fetchRegister(formState));
  };

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
              onBlur={handleCheckValidField(validator.isEmpty)}
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
              onBlur={handleCheckValidField(validator.isEmpty)}
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
        {errorMessage && <MuiAlert severity="error">{errorMessage}</MuiAlert>}
        {serverMessage && (
          <MuiAlert severity="success">{serverMessage}</MuiAlert>
        )}
      </form>
    </Container>
  );
}
