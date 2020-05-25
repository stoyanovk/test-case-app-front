import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import CircularProgress from "@material-ui/core/CircularProgress";
import MuiAlert from "@material-ui/lab/Alert";
import LinkButton from "components/LinkButton";
import { getServerMessage, getErrorMessage } from "store/auth/selectors";
import { useStyles } from "./style";

type alertDataType = {
  type: "success" | "error";
  message: string;
};
const selectors = createSelector(
  [getServerMessage, getErrorMessage],
  (serverMessage, errorMessage) => ({ serverMessage, errorMessage })
);

const ConfirmRegister = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { serverMessage, errorMessage } = useSelector(selectors);
  const getAlertData = (): alertDataType => {
    if (serverMessage) {
      return { type: "success", message: serverMessage };
    }
    if (errorMessage) {
      return { type: "error", message: errorMessage };
    }
    return { type: "error", message: "something went wrong!!!" };
  };
  const alertData: alertDataType = getAlertData();
  console.log(theme);
  return (
    <div className={classes.container}>
      {false ? (
        <CircularProgress size={200} />
      ) : (
        <div>
          <MuiAlert severity={alertData.type}>{alertData.message}</MuiAlert>
          <LinkButton theme={theme} to="/auth/sign-in">
            to login
          </LinkButton>
        </div>
      )}
    </div>
  );
};
export default ConfirmRegister;
