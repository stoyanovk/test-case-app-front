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

interface IProject {
  id: string | number;
  project_name: string;
  description: string;
  [key: string]: any;
}
interface IState {
  projects: IProject[] | [];
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
      };
    }

    case REQUEST_CURRENT_PROJECT_SUCCESS: {
      return {
        ...state,
        currentProject: action.payload,
        loading: false,
      };
    }
    case ADD_PROJECTS: {
      return {
        ...state,
        projects: [...state.projects, action.payload],
        loading: false,
      };
    }
    case DELETE_PROJECTS: {
      const newProjects = state.projects.filter(
        ({ id }) => id !== action.payload
      );
      return { ...state, projects: newProjects };
    }

    case UPDATE_PROJECTS: {
      const newProjects = state.projects.filter(
        ({ id }) => id !== action.payload.id
      );
      return { ...state, projects: [...newProjects, action.payload] };
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
