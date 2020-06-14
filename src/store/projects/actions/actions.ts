import {
  FETCH_PROJECTS,
  FETCH_CURRENT_PROJECT,
  REQUEST_PROJECTS_SUCCESS,
  SET_PROJECT_ERROR,
  REQUEST_CURRENT_PROJECT_SUCCESS,
  FETCH_ADD_PROJECTS,
  ADD_PROJECTS,
  DELETE_PROJECTS,
  SET_PROJECTS_LOADING,
  SET_PROJECTS_MESSAGE,
  FETCH_DELETE_PROJECTS,
  UPDATE_PROJECTS,
  FETCH_UPDATE_PROJECTS,
} from "../actionTypes";

type returnType = {
  type: string;
  payload?: any;
};

const fetchProjects = (): returnType => {
  return { type: FETCH_PROJECTS };
};

const fetchCurrentProject = (id: string | number): returnType => {
  return { type: FETCH_CURRENT_PROJECT, payload: id };
};
const requestProjectsSuccess = (data: any): returnType => {
  return { type: REQUEST_PROJECTS_SUCCESS, payload: data };
};
const requestCurrentProjectSuccess = (data: any): returnType => {
  return { type: REQUEST_CURRENT_PROJECT_SUCCESS, payload: data };
};
const fetchAddProjects = (data: any): returnType => {
  return { type: FETCH_ADD_PROJECTS, payload: data };
};
const addProjects = (data: any): returnType => {
  return { type: ADD_PROJECTS, payload: data };
};

const updateProjects = (data: any): returnType => {
  return { type: UPDATE_PROJECTS, payload: data };
};
const deleteProjects = (projectId: number | string): returnType => {
  return { type: DELETE_PROJECTS, payload: projectId };
};
const fetchDeleteProjects = (projectId: number | string): returnType => {
  return { type: FETCH_DELETE_PROJECTS, payload: projectId };
};

const fetchUpdateProjects = (projectId: number | string): returnType => {
  return { type: FETCH_UPDATE_PROJECTS, payload: projectId };
};
const setMessage = (message: string): returnType => {
  return { type: SET_PROJECTS_MESSAGE, payload: message };
};
const setLoading = (): returnType => {
  return { type: SET_PROJECTS_LOADING };
};
const setError = ({
  message,
  isError,
}: {
  message: string;
  isError: boolean;
}): returnType => {
  return { type: SET_PROJECT_ERROR, payload: { message, isError } };
};
export {
  fetchProjects,
  fetchCurrentProject,
  requestProjectsSuccess,
  requestCurrentProjectSuccess,
  fetchAddProjects,
  addProjects,
  updateProjects,
  deleteProjects,
  fetchDeleteProjects,
  fetchUpdateProjects,
  setMessage,
  setLoading,
  setError,
};
