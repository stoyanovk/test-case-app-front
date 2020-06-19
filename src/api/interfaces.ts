type id = string;

export interface IRequestsWithId {
  id: string;
  token: string;
}
export interface IRequestsWithData extends IRequestsWithId {
  data: object;
}
export interface IParams {
  token: string;
  queryParams?: object;
}
