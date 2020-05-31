import { LOGIN, LOGOUT, SET_MESSAGE, SET_ERROR } from "../actionTypes";

interface IState {
  user: object;
  auth: boolean;
  message: string;
  error: boolean;
}

type ActionType = {
  type: string;
  payload: any;
};

const initialState: IState = {
  user: {},
  auth: false,
  message: "",
  error: false,
};

const auth = (state: IState = initialState, action: ActionType) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        auth: true,
      };
    case LOGOUT:
      return { ...state, user: {}, auth: false };
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.isError,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
export default auth;
