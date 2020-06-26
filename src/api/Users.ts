import RequestSource from "lib/RequestSource";
import {
  IRequests,
  IParams,
  IRequestsWithData,
  IRequestsWithId,
} from "interfaces/requests";
import { IResponse, IMessage } from "interfaces/responses";
import { IUser,IUsers } from "interfaces/entities";
import CONFIG from "config";

interface IUsersRequests extends IRequests<IUser, IMessage> {
  getByQuery(queryParams?: object): Promise<IResponse<IUsers | IMessage>>;
}

class Users extends RequestSource<IUser, IUsers, IMessage>
  implements IUsersRequests {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: "users" });
  }

  public getByQuery({ queryParams, token }: IParams) {
    return this._getByQuery({ queryParams, token });
  }
  public updateById({ id, data, token }: IRequestsWithData) {
    return this._updateById({ id, data, token });
  }

  public getById({ id, token }: IRequestsWithId) {
    return this._getById({ id, token });
  }

  public deleteById({ id, token }: IRequestsWithId) {
    return this._deleteById({ id, token });
  }
}

export default Users;
