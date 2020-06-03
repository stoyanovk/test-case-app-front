type id = number | string;

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
