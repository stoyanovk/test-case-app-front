import { id } from "./helpers";

export interface IUser {
  id: id;
  user_name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProject {
  id: id;
  project_name: string;
  description: string;
  tasks: ITasks;
  createdAt: string;
  updatedAt: string;
}

export interface ITask {
  id: id;
  task_name: string;
  description: string;
  comments?: IComments;
  results?: IResults;
  createdAt?: string;
  updatedAt?: string;
}

export interface IComment {
  id: id;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResult {
  id: id;
  result: boolean;
  task_id: id;
  owner_id: id;
  createdAt: string;
  updatedAt: string;
}

export type IProjects = IProject[];
export type IUsers = IUser[];
export type ITasks = ITask[];
export type IComments = IComment[];
export type IResults = IResult[];
