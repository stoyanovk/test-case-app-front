import {
  FETCH_TASKS,
  REQUEST_TASKS_SUCCESS,
  FETCH_CURRENT_TASK,
  REQUEST_CURRENT_TASK_SUCCESS,
  FETCH_ADD_TASKS,
  ADD_TASKS,
  SET_TASKS_ERROR,
  SET_TASKS_LOADING,
  FETCH_DELETE_TASKS,
  DELETE_TASKS,
  FETCH_UPDATE_TASKS,
  UPDATE_TASKS,
  SET_TASKS_MESSAGE,
} from "../actionTypes";

type returnType = {
  type: string;
  payload?: any;
};

const fetchTasks = (): returnType => {
  return { type: FETCH_TASKS };
};

const fetchCurrentTask = (id: string): returnType => {
  return { type: FETCH_CURRENT_TASK, payload: id };
};
const requestProjecsSuccess = (data: any): returnType => {
  return { type: REQUEST_TASKS_SUCCESS, payload: data };
};
const requestCurrentProjectSuccess = (data: any): returnType => {
  return { type: REQUEST_CURRENT_TASK_SUCCESS, payload: data };
};
const fetchAddProjects = (data: any): returnType => {
  return { type: FETCH_ADD_TASKS, payload: data };
};
const addProjects = (data: any): returnType => {
  return { type: ADD_TASKS, payload: data };
};

const updateProjects = (data: any, id: string): returnType => {
  return { type: UPDATE_TASKS, payload: { data, id } };
};
const deleteProjects = (id: number | string, message: string): returnType => {
  return { type: DELETE_TASKS, payload: { id, message } };
};
const fetchDeleteProjects = (projectId: number | string): returnType => {
  return { type: FETCH_DELETE_TASKS, payload: projectId };
};

const fetchUpdateProjects = (data: any, id: string): returnType => {
  return { type: FETCH_UPDATE_TASKS, payload: { data, id } };
};
const setMessage = (message: string): returnType => {
  return { type: SET_TASKS_MESSAGE, payload: message };
};
const setLoading = (): returnType => {
  return { type: SET_TASKS_LOADING };
};
const setError = ({
  message,
  isError,
}: {
  message: string;
  isError: boolean;
}): returnType => {
  return { type: SET_TASKS_ERROR, payload: { message, isError } };
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
