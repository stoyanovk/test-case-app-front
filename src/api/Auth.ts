import RequestSource from "lib/RequestSource";
import { METHODS } from "interfaces/requests";
import { IResponse, IMessage } from "interfaces/responses";
import { IUser } from "interfaces/entities";

import CONFIG from "config";

enum AUTH_ROUTES {
  REGISTER = "register",
  LOGIN = "login",
  RESET_PASSWORD = "reset-password",
  SET_PASSWORD = "set-password",
  CONFIRM_REGISTER = "confirm-register",
  GET_AUTH_USER = "me",
  LOGOUT = "logout",
}
interface IAuth {
  register(data: object): Promise<IResponse<IMessage>>;
  login(data: object): Promise<IResponse<IUser>>;
  resetPassword(data: object): Promise<IResponse<IMessage>>;
  setPassword(token: string): Promise<IResponse<IMessage>>;
}
// Тут я написал глупость так как не знал как поступить по другому
class Auth extends RequestSource<IUser, IUser, IMessage> implements IAuth {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: "auth" });
  }

  public register(data: object) {
    const url = `${this._url}/${this._entityName}/${AUTH_ROUTES.REGISTER}`;
    return this._request({ url, data, method: METHODS.POST });
  }
  public getAuthUser(token: string) {
    const url = `${this._url}/${this._entityName}/${AUTH_ROUTES.GET_AUTH_USER}`;
    return this._request({ url, method: METHODS.GET, token });
  }
  public confirmRegister(token: string) {
    const url = `${this._url}/${this._entityName}/${token}/${AUTH_ROUTES.CONFIRM_REGISTER}`;
    return this._request({ url, method: METHODS.GET });
  }
  public login(data: object) {
    const url = `${this._url}/${this._entityName}/${AUTH_ROUTES.LOGIN}`;
    return this._request({ url, data, method: METHODS.POST });
  }

  public logout(token: string) {
    const url = `${this._url}/${this._entityName}/${AUTH_ROUTES.LOGOUT}`;
    return this._request({ url, token, method: METHODS.GET });
  }

  public resetPassword(data: object) {
    const url = `${this._url}/${this._entityName}/${AUTH_ROUTES.RESET_PASSWORD}`;
    return this._request({ url, method: METHODS.POST });
  }
  public setPassword(token: string) {
    const url = `${this._url}/${this._entityName}/${token}/${AUTH_ROUTES.SET_PASSWORD}`;
    return this._request({ url, method: METHODS.POST });
  }
}

export default Auth;
