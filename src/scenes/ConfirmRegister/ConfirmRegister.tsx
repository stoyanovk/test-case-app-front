import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { messageSelector } from "store/auth/selectors";
import { fetchConfirmRegister, resetMessages } from "store/auth/actions";
import { useStyles } from "./style";

type alertDataType = {
  type: "success" | "error" | "info";
  message: string;
};

const ConfirmRegister = ({
  match: {
    params: { token },
  },
  history: { push },
}: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { serverMessage, errorMessage } = useSelector((state) =>
    messageSelector(state)
  );

  useEffect(() => {
    dispatch(fetchConfirmRegister(token));
  }, [dispatch, token]);

  const getAlertData = (): alertDataType => {
    if (serverMessage) {
      return { type: "success", message: serverMessage };
    }
    if (errorMessage) {
      return { type: "error", message: errorMessage };
    }
    return { type: "info", message: "nothing has happened yet" };
  };
  const redirectTo = () => {
    dispatch(resetMessages());
    push("/auth/sign-in");
  };
  const alertData: alertDataType = getAlertData();
  return (
    <div className={classes.container}>
      {false ? (
        <CircularProgress size={200} />
      ) : (
        <div>
          {(serverMessage || errorMessage) && (
            <MuiAlert severity={alertData.type}>{alertData.message}</MuiAlert>
          )}
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
