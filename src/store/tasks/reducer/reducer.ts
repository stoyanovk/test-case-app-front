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
import { ITasks, ITask } from "interfaces/entities";

interface IState {
  tasks: ITasks;
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
  tasks: [],
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
    case REQUEST_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: false,
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
    case ADD_TASKS: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
        error: false,
      };
    }
    case DELETE_TASKS: {
      const newCurrentTask = getCurrentEntities(state.tasks, action.payload.id);
      const newTasks = state.tasks.filter(({ id }) => id !== action.payload.id);
      return {
        ...state,
        currentTask: newCurrentTask,
        message: action.payload.message,
        tasks: newTasks,
        error: false,
      };
    }

    case UPDATE_TASKS: {
      const newProjects = state.tasks.filter(
        ({ id }) => id !== action.payload.id
      );
      return {
        ...state,
        tasks: [...newProjects, action.payload.data],
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
