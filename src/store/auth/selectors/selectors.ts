import { createSelector } from "reselect";
import { IStore } from "interfaces/store";
import { IUser } from "interfaces/entities";

const getUser = (state: IStore): IUser | null => state.auth.user;
const getMessage = (state: IStore): string => state.auth.message;
const getError = (state: IStore): boolean => state.auth.error;
const getAuth = (state: IStore): boolean => state.auth.auth;
const getLoading = (state: IStore): boolean => state.auth.loading;
//selectors
const authSelector = createSelector(
  [getMessage, getAuth, getError, getLoading],
  (message, auth, error, loading) => ({ message, auth, error, loading })
);

export { authSelector, getMessage, getAuth, getError, getUser, getLoading };
