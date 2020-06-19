import { IResponse } from "interfaces/entities";
export type id = string;

export enum METHODS {
  PUT = "PUT",
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}

export interface IRequests {
  updateById(args: any): Promise<IResponse>;
  getById(args: any): Promise<IResponse>;
  deleteById(args: any): Promise<IResponse>;
}

export interface IQueryConstructor {
  url: string;
  entityName: string;
  [propName: string]: any;
}

export interface IRequest {
  url: string;
  data?: object;
  token?: string;
  method?: METHODS;
}

export interface IBuildUrl {
  id?: id;
  queryParams?: object | undefined;
  subId?: id;
  entityOwnerName?: string;
}
