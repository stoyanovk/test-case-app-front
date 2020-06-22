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

import { DELETE_TASKS, ADD_TASKS, UPDATE_TASKS } from "store/tasks/actionTypes";

import getCurrentProject from "utils/getCurrentEntities";
import { IProject, IProjects } from "interfaces/entities";

interface IState {
  projects: IProjects;
  currentProject: IProject | null;
  message: string;
  error: boolean;
  loading: boolean;
}

type ActionType = {
  type: string;
  payload: any;
};

const initialState: IState = {
  projects: [],
  currentProject: null,
  loading: false,
  message: "",
  error: false,
};

const projects = (state: IState = initialState, action: ActionType): IState => {
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

    case ADD_TASKS: {
      if (state.currentProject !== null) {
        const newCurrentProject = {
          ...state.currentProject,
          tasks: [...state.currentProject.tasks, action.payload],
        };
        return {
          ...state,
          currentProject: newCurrentProject,
        };
      }
      return state;
    }

    default:
      return state;
  }
};
export default projects;
