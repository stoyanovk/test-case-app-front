import { id } from "./helpers";

interface IOptionalTimeType {
  createdAt?: string;
  updatedAt?: string;
}

export interface IUser extends IOptionalTimeType {
  id: id;
  user_name: string;
  email: string;
}

export interface IProject extends IOptionalTimeType {
  id: id;
  project_name: string;
  description: string;
  tasks: ITasks;
}

export interface ITask extends IOptionalTimeType {
  id: id;
  task_name: string;
  description: string;
  comments?: IComments;
  results?: IResults;
}

export interface IComment extends IOptionalTimeType {
  id: id;
  description: string;
}

export interface IResult extends IOptionalTimeType {
  id: id;
  result: boolean;
  task_id: id;
  owner_id: id;
}

export type IProjects = IProject[];
export type IUsers = IUser[];
export type ITasks = ITask[];
export type IComments = IComment[];
export type IResults = IResult[];
