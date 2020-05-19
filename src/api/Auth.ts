import RequestSource from "../lib/RequestSource";
import { METHODS } from "../lib/interfaces";

import CONFIG from "../config";

enum AUTH_ROUTES {
  REGISTER = "register",
  LOGIN = "login",
  RESET_PASSWORD = "reset-password",
}
interface IAuth {
  register(data: object): Promise<any>;
  login(data: object): Promise<any>;
  resetPassword(data: object): Promise<any>;
  setPassword(token: string): Promise<any>;
}

class Auth extends RequestSource implements IAuth {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: "auth" });
  }

  public register(data: object) {
    const url = `${this._url}/${this._entityName}/${AUTH_ROUTES.REGISTER}`;
    return this._request({ url, data, method: METHODS.POST });
  }
  public login(data: object) {
    const url = `${this._url}/${this._entityName}/${AUTH_ROUTES.LOGIN}`;
    return this._request({ url, data, method: METHODS.POST });
  }
  public resetPassword(data: object) {
    const url = `${this._url}/${this._entityName}/${AUTH_ROUTES.RESET_PASSWORD}`;
    return this._request({ url, method: METHODS.POST });
  }
  public setPassword(token: string) {
    const url = `${this._url}/${this._entityName}/${token}/${AUTH_ROUTES.RESET_PASSWORD}`;
    return this._request({ url, method: METHODS.POST });
  }
}

export default Auth;
