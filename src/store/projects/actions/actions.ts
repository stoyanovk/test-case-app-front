import {
  FETCH_PROJECTS,
  FETCH_CURRENT_PROJECT,
  REQUEST_PROJECTS_SUCCESS,
  REQUEST_PROJECT_ERROR,
  REQUEST_CURRENT_PROJECT_SUCCESS,
  FETCH_ADD_PROJECT,
} from "../actionTypes";
import { deleteSessionData } from "lib/localStorage";

// type returnType = {
//   type: string;
//   payload?: any;
// };

// const fetchProjects = (data: object): returnType => {
//   return { type: FETCH_PROJECTS, payload: data };
// };

// const fetchRegister = (data: object): returnType => {
//   return { type: FETCH_REGISTER, payload: data };
// };

// const logout = (): object => {
//   deleteSessionData();
//   return { type: LOGOUT };
// };
// const login = (userData: any): returnType => {
//   return { type: LOGIN, payload: userData };
// };
// const setMessage = (message: string): returnType => {
//   return { type: SET_AUTH_MESSAGE, payload: message };
// };

// const fetchConfirmRegister = (token: string): returnType => {
//   return { type: FETCH_CONFIRM_REGISTER, payload: token };
// };

// const getAuthUser = (): returnType => {
//   return { type: GET_AUTH_USER };
// };
// //
// const setError = ({
//   message,
//   isError,
// }: {
//   message: string;
//   isError: boolean;
// }): returnType => {
//   return { type: SET_AUTH_ERROR, payload: { message, isError } };
// };
// export {
//   fetchLogin,
//   login,
//   logout,
//   fetchRegister,
//   fetchConfirmRegister,
//   getAuthUser,
//   setMessage,
//   setError,
// };
