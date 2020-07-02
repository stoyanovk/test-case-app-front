import { id } from "./helpers";

interface IOptionlTimeType {
  createdAt?: string;
  updatedAt?: string;
}

export interface IUser extends IOptionlTimeType {
  id: id;
  user_name: string;
  email: string;
}

export interface IProject extends IOptionlTimeType {
  id: id;
  project_name: string;
  description: string;
  tasks: ITasks;
}

export interface ITask extends IOptionlTimeType {
  id: id;
  task_name: string;
  description: string;
  comments?: IComments;
  results?: IResults;
}

export interface IComment extends IOptionlTimeType {
  id: id;
  description: string;
}

export interface IResult extends IOptionlTimeType {
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
