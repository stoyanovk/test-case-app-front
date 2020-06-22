import {
  LOGIN,
  LOGOUT,
  SET_AUTH_MESSAGE,
  SET_AUTH_ERROR,
} from "../actionTypes";

interface IState {
  user: object;
  auth: boolean;
  message: string;
  error: boolean;
  loading: boolean;
}

type ActionType = {
  type: string;
  payload: any;
};

const initialState: IState = {
  user: {},
  loading: true,
  auth: false,
  message: "",
  error: false,
};

const auth = (state: IState = initialState, action: ActionType) => {
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
      return { ...state, user: {}, auth: false };
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
