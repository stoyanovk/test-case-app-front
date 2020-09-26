export interface IResponse<T = IMessage> {
  status: number;
  data: T;
}
export interface IMessage {
  token: string;
  message: string;
}
