type id = string;

interface IResponseDataType {
  token?: string;
  [key: string]: any;
}

export interface IResponse {
  status: number;
  data: IResponseDataType;
}

// меня смущает однообразность этих интерфейсом,
// но я не смог сделать универсальный
// базовый интерфейс от которого бы они наследовались

export interface IUser {
  id: id;
  user_name: string;
  email: string;
  [key: string]: any;
}

export interface IProject {
  id: id;
  project_name: string;
  description: string;
  tasks: ITasks;
  [key: string]: any;
}

export interface ITask {
  id: id;
  task_name: string;
  description: string;
  comments?: IComments;
  results?: IResults;
  [key: string]: any;
}

export interface IComment {
  id: id;
  description: string;
  [key: string]: any;
}

export interface IResult {
  id: id;
  result: boolean;
  task_id: id;
  owner_id: id;
  [key: string]: any;
}

export type IProjects = IProject[];
export type ITasks = ITask[];
export type IComments = IComment[];
export type IResults = IResult[];
