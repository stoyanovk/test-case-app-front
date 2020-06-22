import {
  REQUEST_TASKS_SUCCESS,
  REQUEST_CURRENT_TASK_SUCCESS,
  ADD_TASKS,
  SET_TASKS_ERROR,
  SET_TASKS_LOADING,
  DELETE_TASKS,
  UPDATE_TASKS,
  SET_TASKS_MESSAGE,
} from "../actionTypes";
import getCurrentEntities from "utils/getCurrentEntities";
import { ITask } from "interfaces/entities";

interface IState {
  currentTask: ITask | null;
  message: string;
  error: boolean;
  loading: boolean;
}

type ActionType = {
  type: string;
  payload: any;
};

const initialState: IState = {
  currentTask: null,
  loading: false,
  message: "",
  error: false,
};

const tasks = (state: IState = initialState, action: ActionType): IState => {
  switch (action.type) {
    case SET_TASKS_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case REQUEST_CURRENT_TASK_SUCCESS: {
      return {
        ...state,
        currentTask: action.payload,
        loading: false,
        error: false,
      };
    }

    case UPDATE_TASKS: {
      return {
        ...state,
        currentTask: action.payload.data,
        error: false,
      };
    }

    case SET_TASKS_ERROR: {
      return {
        ...state,
        error: action.payload.isError,
        message: action.payload.message,
        loading: false,
      };
    }
    case SET_TASKS_MESSAGE: {
      return {
        ...state,
        message: action.payload,
      };
    }
    default:
      return state;
  }
};
export default tasks;
