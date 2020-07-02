import { id } from "./helpers";
import { IResponse, IMessage } from "./responses";

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
export interface IRequests<T = IMessage> {
  updateById({ id, token }: IRequestsWithId): Promise<IResponse<T>>;
  getById({ id, token }: IRequestsWithId): Promise<IResponse<T>>;
  deleteById({ id, token }: IRequestsWithId): Promise<IResponse<T>>;
}
