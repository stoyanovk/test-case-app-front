import { ITask, ITasks } from "interfaces/entities";
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

type returnType<T = null> = {
  type: string;
  payload?: T;
};
type TasksFetchBodyType = {
  task_name: string;
  description: string;
};

const fetchTasks = (id: string): returnType<string> => {
  return { type: FETCH_TASKS, payload: id };
};

const fetchCurrentTask = (id: string): returnType<string> => {
  return { type: FETCH_CURRENT_TASK, payload: id };
};
const requestTasksSuccess = (data: ITasks): returnType<ITasks> => {
  return { type: REQUEST_TASKS_SUCCESS, payload: data };
};
const requestCurrentTaskSuccess = (data: ITask): returnType<ITask> => {
  return { type: REQUEST_CURRENT_TASK_SUCCESS, payload: data };
};
const fetchAddProjects = (
  data: TasksFetchBodyType
): returnType<TasksFetchBodyType> => {
  return { type: FETCH_ADD_TASKS, payload: data };
};
const addTasks = (data: ITask): returnType<ITask> => {
  return { type: ADD_TASKS, payload: data };
};

const updateTasks = (data: ITask): returnType<ITask> => {
  return { type: UPDATE_TASKS, payload: data };
};
const deleteTasks = (
  id: string,
  message: string
): returnType<{ id: string; message: string }> => {
  return { type: DELETE_TASKS, payload: { id, message } };
};
const fetchDeleteTasks = (projectId: string): returnType<string> => {
  return { type: FETCH_DELETE_TASKS, payload: projectId };
};

const fetchUpdateTasks = (
  data: TasksFetchBodyType,
  id: string
): returnType<{ id: string; data: TasksFetchBodyType }> => {
  return { type: FETCH_UPDATE_TASKS, payload: { data, id } };
};
const setMessage = (message: string): returnType<string> => {
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
}): returnType<{ message: string; isError: boolean }> => {
  return { type: SET_TASKS_ERROR, payload: { message, isError } };
};
export {
  fetchTasks,
  fetchCurrentTask,
  requestTasksSuccess,
  requestCurrentTaskSuccess,
  fetchAddProjects,
  addTasks,
  updateTasks,
  fetchDeleteTasks,
  fetchUpdateTasks,
  deleteTasks,
  setMessage,
  setLoading,
  setError,
};
