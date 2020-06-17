import { createSelector } from "reselect";
import { IUser } from "interfaces/entities";

const getUser = (state: any): IUser => state.auth.user;
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
