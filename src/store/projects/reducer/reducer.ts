import {
  REQUEST_PROJECTS_SUCCESS,
  SET_PROJECT_ERROR,
  REQUEST_CURRENT_PROJECT_SUCCESS,
  ADD_PROJECTS,
  DELETE_PROJECTS,
  SET_PROJECTS_LOADING,
  UPDATE_PROJECTS,
  SET_PROJECTS_MESSAGE,
} from "../actionTypes";

import getCurrentProject from "utils/getCurrentEntities";
import { IProjectStore } from "interfaces/store";

type ActionType = {
  type: string;
  payload: any;
};

const initialState: IProjectStore = {
  projects: [],
  currentProject: null,
  loading: false,
  message: "",
  error: false,
};

const projects = (
  state: IProjectStore = initialState,
  action: ActionType
): IProjectStore => {
  switch (action.type) {
    case SET_PROJECTS_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case REQUEST_PROJECTS_SUCCESS: {
      return {
        ...state,
        projects: action.payload,
        loading: false,
        error: false,
      };
    }
    case REQUEST_CURRENT_PROJECT_SUCCESS: {
      return {
        ...state,
        currentProject: action.payload,
        loading: false,
        error: false,
      };
    }
    case ADD_PROJECTS: {
      return {
        ...state,
        projects: [...state.projects, action.payload],
        loading: false,
        error: false,
      };
    }
    case DELETE_PROJECTS: {
      const newCurrentProject = getCurrentProject(
        state.projects,
        action.payload.id
      );
      const newProjects = state.projects.filter(
        ({ id }) => id !== action.payload.id
      );
      return {
        ...state,
        currentProject: newCurrentProject,
        message: action.payload.message,
        projects: newProjects,
        error: false,
      };
    }
    case UPDATE_PROJECTS: {
      const newProjects = state.projects.filter(
        ({ id }) => id !== action.payload.id
      );
      return {
        ...state,
        projects: [...newProjects, action.payload.data],
        currentProject: action.payload.data,
        error: false,
      };
    }
    case SET_PROJECT_ERROR: {
      return {
        ...state,
        error: action.payload.isError,
        message: action.payload.message,
        loading: false,
      };
    }
    case SET_PROJECTS_MESSAGE: {
      return {
        ...state,
        message: action.payload,
      };
    }

    default:
      return state;
  }
};
export default projects;
