import RequestSource from "lib/RequestSource";
import { IRequests } from "lib/interfaces";
import { IResponse } from "interfaces/entities";
import { IRequestsWithData, IRequestsWithId } from "./interfaces";
import CONFIG from "config";

interface ITasks extends IRequests {
  createProjectsTasks(data: IRequestsWithData): Promise<IResponse>;
  getProjectsTasksById(queryParams?: object): Promise<IResponse>;
}

class Tasks extends RequestSource implements ITasks {
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
