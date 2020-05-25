import {
  LOGIN,
  FETCH_LOGIN,
  SET_SERVER_MESSAGE,
  LOGOUT,
  FETCH_REGISTER,
  SET_ERROR_MESSAGE,
} from "../actionTypes";
import { deleteSessionData } from "lib/localStorage";

const fetchLogin = (data: object): object => {
  return { type: FETCH_LOGIN, payload: data };
};
const fetchRegister = (data: object): object => {
  return { type: FETCH_REGISTER, payload: data };
};

const logout = (): object => {
  deleteSessionData();
  return { type: LOGOUT };
};
const login = (userData: any): object => {
  return { type: LOGIN, payload: userData };
};
const setServerMessage = (serverMessage: string): object => {
  return { type: SET_SERVER_MESSAGE, payload: serverMessage };
};
const setErrorMessage = (errorMessage: string): object => {
  return { type: SET_ERROR_MESSAGE, payload: errorMessage };
};

export {
  fetchLogin,
  login,
  logout,
  setServerMessage,
  fetchRegister,
  setErrorMessage,
};
