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

import { ITasksStore } from "interfaces/store";

type ActionType = {
  type: string;
  payload: any;
};

const initialState: ITasksStore = {
  tasks: [],
  currentTask: null,
  loading: false,
  message: "",
  error: false,
};

const tasks = (
  state: ITasksStore = initialState,
  action: ActionType
): ITasksStore => {
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
    case REQUEST_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: false,
      };
    }
    case UPDATE_TASKS: {
      const newTasks = state.tasks.filter(({ id }) => id !== action.payload.id);
      return {
        ...state,
        currentTask: action.payload,
        tasks: [...newTasks, action.payload],
        error: false,
      };
    }
    case ADD_TASKS: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        currentTask: action.payload,
        error: false,
      };
    }
    case DELETE_TASKS: {
      const newTasks = state.tasks.filter(({ id }) => id !== action.payload.id);
      return {
        ...state,
        tasks: newTasks,
        currentTask: null,
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
