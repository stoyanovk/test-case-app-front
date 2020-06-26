import {
  LOGIN,
  LOGOUT,
  SET_AUTH_MESSAGE,
  SET_AUTH_ERROR,
} from "../actionTypes";
import { IAuthStore } from "interfaces/store";

type ActionType = {
  type: string;
  payload: any;
};

const initialState: IAuthStore = {
  user: null,
  loading: true,
  auth: false,
  message: "",
  error: false,
};

const auth = (
  state: IAuthStore = initialState,
  action: ActionType
): IAuthStore => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        auth: true,
        loading: false,
        error: false,
      };
    case LOGOUT:
      return { ...state, user: null, auth: false };
    case SET_AUTH_MESSAGE:
      return { ...state, message: action.payload, loading: false };
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: action.payload.isError,
        message: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
};
export default auth;
