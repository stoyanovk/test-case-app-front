import {
  LOGIN,
  FETCH_LOGIN,
  SET_ERROR,
  LOGOUT,
  FETCH_REGISTER,
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
const login = (userData: object): object => {
  return { type: LOGIN, payload: userData };
};
const setError = (errorMessage: string): object => {
  return { type: SET_ERROR, payload: errorMessage };
};

export { fetchLogin, login, logout, setError, fetchRegister };
