import {
  LOGIN,
  FETCH_LOGIN,
  LOGOUT,
  FETCH_REGISTER,
  FETCH_CONFIRM_REGISTER,
  GET_AUTH_USER,
  SET_AUTH_ERROR,
  SET_AUTH_MESSAGE,
  FETCH_LOGOUT,
} from "../actionTypes";

type returnType = {
  type: string;
  payload?: any;
};

const fetchLogin = (data: object): returnType => {
  return { type: FETCH_LOGIN, payload: data };
};

const login = (userData: any): returnType => {
  return { type: LOGIN, payload: userData };
};

const fetchRegister = (data: object): returnType => {
  return { type: FETCH_REGISTER, payload: data };
};

const fetchLogout = (): returnType => {
  return { type: FETCH_LOGOUT };
};

const logout = (): returnType => {
  return { type: LOGOUT };
};
const setMessage = (message: string): returnType => {
  return { type: SET_AUTH_MESSAGE, payload: message };
};

const fetchConfirmRegister = (token: string): returnType => {
  return { type: FETCH_CONFIRM_REGISTER, payload: token };
};

const getAuthUser = (): returnType => {
  return { type: GET_AUTH_USER };
};
//
const setError = ({
  message,
  isError,
}: {
  message: string;
  isError: boolean;
}): returnType => {
  return { type: SET_AUTH_ERROR, payload: { message, isError } };
};
export {
  fetchLogin,
  login,
  logout,
  fetchRegister,
  fetchConfirmRegister,
  getAuthUser,
  setMessage,
  fetchLogout,
  setError,
};
