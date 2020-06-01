import { createSelector } from "reselect";
//get from state functions

type userType = {
  user_name: string;
  email: string;
  [key: string]: any;
};
const getUser = (state: any): userType => state.auth.user;
const getMessage = (state: any): string => state.auth.message;
const getError = (state: any): boolean => state.auth.error;
const getAuth = (state: any): boolean => state.auth.auth;
const getLoading = (state: any): boolean => state.auth.loading;
//selectors
const authSelector = createSelector(
  [getMessage, getAuth, getError, getLoading],
  (message, auth, error, loading) => ({ message, auth, error, loading })
);

export { authSelector, getMessage, getAuth, getError, getUser, getLoading };
