import { LOGIN, SET_ERROR, LOGOUT } from "../actionTypes";
import { getLocalData } from "lib/localStorage";

interface IState {
  user: object;
  token: string;
  error: string;
}
type ActionType = {
  type: string;
  payload: any;
};

const token = getLocalData() || "";

const initialState: IState = {
  user: {},
  token,
  error: "",
};

const auth = (state: IState = initialState, action: ActionType) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGOUT:
      return { ...initialState, token: "" };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default auth;
