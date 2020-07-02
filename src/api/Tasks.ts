import RequestSource from "lib/RequestSource";
import {
  IRequests,
  IRequestsWithData,
  IRequestsWithId,
} from "interfaces/requests";
import { IResponse, IMessage } from "interfaces/responses";
import { ITasks, ITask } from "interfaces/entities";

import CONFIG from "config";

interface ITasksRequests extends IRequests<ITask | IMessage> {
  createProjectsTasks(
    data: IRequestsWithData
  ): Promise<IResponse<ITask | IMessage>>;
  getProjectsTasksById(
    queryParams?: object
  ): Promise<IResponse<ITasks | IMessage>>;
}

class Tasks extends RequestSource<ITask> implements ITasksRequests {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: "tasks" });
  }
  public createProjectsTasks({ data, token, id }: IRequestsWithData) {
    return this._create({
      data,
      token,
      id,
      entityOwnerName: "projects",
    });
  }

  public getProjectsTasksById({ id, token }: IRequestsWithId) {
    return this._getByQuery({ id, token, entityOwnerName: "projects" });
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

export default Tasks;
