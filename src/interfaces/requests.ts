import { id } from "./helpers";
import { IResponse } from "./responses";

export enum METHODS {
  PUT = "PUT",
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}

export interface IRequestsWithId {
  id: id;
  token: string;
}

export interface IRequestsWithData extends IRequestsWithId {
  data: object;
}

export interface IParams {
  token: string;
  queryParams?: object;
}

export interface IQueryConstructor {
  url: string;
  entityName: string;
}

export interface IBuildUrl {
  id?: id;
  queryParams?: object | undefined;
  subId?: id;
  entityOwnerName?: string;
}
export interface IRequest {
  url: string;
  data?: object;
  token?: string;
  method?: METHODS;
}
export interface IRequests<T, M> {
  updateById({ id, token }: IRequestsWithId): Promise<IResponse<T | M>>;
  getById({ id, token }: IRequestsWithId): Promise<IResponse<T | M>>;
  deleteById({ id, token }: IRequestsWithId): Promise<IResponse<T | M>>;
}



