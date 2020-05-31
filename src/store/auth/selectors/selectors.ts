import { createSelector } from "reselect";
//get from state functions

const getUser = (state: any): object => state.auth.user;
const getMessage = (state: any): string => state.auth.message;
const getError = (state: any): boolean => state.auth.error;
const getAuth = (state: any): boolean => state.auth.auth;

//selectors
const authSelector = createSelector(
  [getMessage, getAuth, getError],
  (message, auth, error) => ({ message, auth, error })
);

export { authSelector, getMessage, getAuth, getError, getUser };
