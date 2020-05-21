import { LOGIN, FETCH_LOGIN, SET_ERROR, LOGOUT } from "../actionTypes";
import { deleteSessionData } from "lib/localStorage";

const fetchLogin = (data: object): object => {
  return { type: FETCH_LOGIN, payload: data };
};
const logout = (): object => {
  deleteSessionData();
  return { type: LOGOUT };
};
const login = (userData: object): object => {
  return { type: LOGIN, payload: userData };
};
const setError = (errorMessage: string): object => {
  return { type: SET_ERROR, payload: errorMessage };
};
export { fetchLogin, login, logout, setError };
