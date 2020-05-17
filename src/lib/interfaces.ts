export type id = string | number;

export enum METHODS {
  PUT = "PUT",
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}

export interface IRequests {
  updateById(args: any): Promise<any>;
  getById(args: any): Promise<any>;
  deleteById(args: any): Promise<any>;
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
