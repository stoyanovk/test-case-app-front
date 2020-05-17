import RequestSource from "lib/RequestSource";
import { IRequests } from "lib/interfaces";
import { IParams, IRequestsWithData, IRequestsWithId } from "./interfaces";
import CONFIG from "config";

interface IUsers extends IRequests {
  getByQuery(queryParams?: object): Promise<any>;
}

class Users extends RequestSource implements IUsers {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: "users" });
  }

  public getByQuery({ queryParams, token }: IParams): Promise<any> {
    return this._getByQuery({ queryParams, token });
  }
  public updateById({ id, data, token }: IRequestsWithData): Promise<any> {
    return this._updateById({ id, data, token });
  }

  public getById({ id, token }: IRequestsWithId): Promise<any> {
    return this._getById({ id, token });
  }

  public deleteById({ id, token }: IRequestsWithId): Promise<any> {
    return this._deleteById({ id, token });
  }
}

export default Users;
