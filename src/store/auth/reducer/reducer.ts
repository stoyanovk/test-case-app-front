import {
  LOGIN,
  LOGOUT,
  SET_AUTH_MESSAGE,
  SET_AUTH_ERROR,
  FETCH_LOGIN,
  FETCH_CONFIRM_REGISTER,
  GET_AUTH_USER,
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
  loading: false,
  auth: false,
  message: "",
  error: false,
};

const auth = (state: IState = initialState, action: ActionType) => {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONFIRM_REGISTER:
      return {
        ...state,
        loading: true,
      };
    case GET_AUTH_USER:
      return {
        ...state,
        loading: true,
      };

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
