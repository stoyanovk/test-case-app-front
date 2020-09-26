import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { authSelector } from "store/auth/selectors";
import { fetchConfirmRegister, setError } from "store/auth/actions";
import { useStyles } from "./style";

const ConfirmRegister = ({
  match: {
    params: { token },
  },
  history: { push },
}: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { message, error, loading } = useSelector(authSelector);

  useEffect(() => {
    dispatch(fetchConfirmRegister(token));
  }, [dispatch, token]);

  const redirectTo = () => {
    dispatch(setError({ message: "", isError: false }));
    push("/auth/sign-in");
  };
  const messageType: "error" | "success" = error ? "error" : "success";

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress size={200} />
      ) : (
        <div>
          {message && <MuiAlert severity={messageType}>{message}</MuiAlert>}
          <Box mt={2}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={redirectTo}
            >
              go to auth
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};
export default ConfirmRegister;
