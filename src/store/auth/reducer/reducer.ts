import {
  LOGIN,
  SET_SERVER_MESSAGE,
  LOGOUT,
  SET_ERROR_MESSAGE,
  RESET_MESSAGES,
} from "../actionTypes";
import { getLocalData } from "lib/localStorage";

interface IState {
  user: object;
  token: string;
  auth: boolean;
  serverMessage: string;
  errorMessage: string;
}

type ActionType = {
  type: string;
  payload: any;
};

const token = getLocalData() || "";

const initialState: IState = {
  user: {},
  token,
  auth: false,
  serverMessage: "",
  errorMessage: "",
};

const auth = (state: IState = initialState, action: ActionType) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        auth: true,
      };
    case LOGOUT:
      return { ...state, user: {}, token: "", auth: false };
    case SET_SERVER_MESSAGE:
      return { ...state, serverMessage: action.payload };
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    case RESET_MESSAGES:
      return { ...state, errorMessage: "", serverMessage: "" };
    default:
      return state;
  }
};
export default auth;
