import RequestSource from "lib/RequestSource";
import {
  IRequests,
  IRequestsWithData,
  IRequestsWithId,
} from "interfaces/requests";
import { IResponse, IMessage } from "interfaces/responses";
import { IResults, IResult } from "interfaces/entities";
import CONFIG from "config";

interface IResultsRequests extends IRequests<IResult | IMessage> {
  createTasksResults(
    data: IRequestsWithData
  ): Promise<IResponse<IResult | IMessage>>;
  getTasksResultsByQuery(
    params: IRequestsWithId
  ): Promise<IResponse<IResults | IMessage>>;
}

class Results extends RequestSource<IResult> implements IResultsRequests {
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
