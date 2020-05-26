import { createSelector } from "reselect";
//get from state functions
// const getToken = (state: any): string => state.auth.token;
// const getUser = (state: any): object => state.auth.user;
const getServerMessage = (state: any): string => state.auth.serverMessage;
const getErrorMessage = (state: any): string => state.auth.errorMessage;
const getAuth = (state: any): boolean => state.auth.auth;

//selectors

const messageSelector = createSelector(
  [getErrorMessage, getServerMessage],
  (errorMessage: string, serverMessage: string): any => ({
    errorMessage,
    serverMessage,
  })
);
const authSelector = createSelector(
  [getAuth, getErrorMessage],
  (auth: boolean, errorMessage: string): any => ({
    auth,
    errorMessage,
  })
);
export { messageSelector, authSelector };
