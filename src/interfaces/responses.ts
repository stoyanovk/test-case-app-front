export interface IResponse<T> {
  status: number;
  data: T;
}
export interface IMessage {
  token: string;
  message: string;
}
