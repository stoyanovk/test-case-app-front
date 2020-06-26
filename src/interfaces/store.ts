import { IProject, IProjects, IUser, ITasks, ITask } from "interfaces/entities";

export interface IProjectStore {
  projects: IProjects;
  currentProject: IProject | null;
  message: string;
  error: boolean;
  loading: boolean;
}
export interface IAuthStore {
  user: IUser | null;
  auth: boolean;
  message: string;
  error: boolean;
  loading: boolean;
}

export interface ITasksStore {
  tasks: ITasks;
  currentTask: ITask | null;
  message: string;
  error: boolean;
  loading: boolean;
}
export interface IStore {
  auth: IAuthStore;
  projects: IProjectStore;
  tasks: ITasksStore;
}
