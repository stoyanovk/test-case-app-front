import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MuiAlert from "@material-ui/lab/Alert";
import { useAuth } from "hooks";
import { isNotEmail, isEmpty } from "utils/validators";
import { fetchLogin } from "store/auth/actions";
import { authSelector } from "store/auth/selectors";

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

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();

  const { errorMessage, auth } = useSelector((state) => authSelector(state));
  const dispatch = useDispatch();

  useEffect(() => {
    auth && history.push("/");
  }, [history, auth]);
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
      email: isNotEmail,
      password: isEmpty,
    });

    if (errors.length || isFormFieldNotValid) {
      return;
    }
    dispatch(fetchLogin(formState));
    resetState();
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
          helperText={hasError("email") && "invalid value"}
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
          helperText={hasError("password") && "invalid value"}
          onChange={handleChange}
          onBlur={handleCheckValidField(isEmpty)}
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

        {errorMessage && <MuiAlert severity="error">{errorMessage}</MuiAlert>}
      </form>
    </Container>
  );
};
export default SignIn;
