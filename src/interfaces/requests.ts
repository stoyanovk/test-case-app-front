import { id } from './helpers'
import { IResponse, IMessage } from './responses'

export enum METHODS {
  PUT = 'PUT',
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE'
}

export interface IRequestsWithData {
  id: id
  data: object
}

export interface IQueryConstructor {
  url: string
  entityName: string
}

export interface IBuildUrl {
  id?: id
  queryParams?: object | undefined
  subId?: id
  entityOwnerName?: string
}
export interface IRequest {
  url: string
  data?: object
  method?: METHODS
}
export interface IRequests<T = IMessage> {
  updateById({ id, data }: { id: id; data: object }): Promise<IResponse<T>>
  getById(id: id): Promise<IResponse<T>>
  deleteById(id: id): Promise<IResponse>
}
