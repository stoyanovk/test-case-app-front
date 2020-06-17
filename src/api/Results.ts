import RequestSource from "lib/RequestSource";
import { IRequests } from "lib/interfaces";
import { IResponse } from "interfaces/entities";
import { IRequestsWithData, IRequestsWithId } from "./interfaces";
import CONFIG from "config";

interface IResults extends IRequests {
  createTasksResults(data: IRequestsWithData): Promise<IResponse>;
  getTasksResultsByQuery(params: IRequestsWithId): Promise<IResponse>;
}

class Results extends RequestSource implements IResults {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: "results" });
  }
  public createTasksResults({ data, token, id }: IRequestsWithData) {
    return this._create({
      data,
      token,
      id,
      entityOwnerName: "tasks",
    });
  }

  public getTasksResultsByQuery({ id, token }: IRequestsWithId) {
    return this._getByQuery({ id, token, entityOwnerName: "tasks" });
  }

  public updateById({ id, token, data }: IRequestsWithData) {
    return this._updateById({ id, data, token });
  }

  public getById({ id, token }: IRequestsWithId) {
    return this._getById({ id, token });
  }

  public deleteById({ id, token }: IRequestsWithId) {
    return this._deleteById({ id, token });
  }
}

export default Results;
