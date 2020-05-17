import RequestSource from "lib/RequestSource";
import { IRequests } from "lib/interfaces";
import { IRequestsWithData, IRequestsWithId } from "./interfaces";
import CONFIG from "config";

interface ITasks extends IRequests {
  createProjectsTasks(data: IRequestsWithData): Promise<any>;
  getProjectsTasksByQuery(queryParams?: object): Promise<any>;
}

class Tasks extends RequestSource implements ITasks {
  constructor() {
    super({ url: CONFIG.API_URL, name: "tasks" });
  }
  public createProjectsTasks({
    data,
    token,
    id,
  }: IRequestsWithData): Promise<any> {
    return this._create({
      data,
      token,
      id,
      entityOwnerName: "projects",
    });
  }

  public getProjectsTasksByQuery({ id, token }: IRequestsWithId): Promise<any> {
    return this._getByQuery({ id, token, entityOwnerName: "projects" });
  }

  public updateById({ id, token, data }: IRequestsWithData): Promise<any> {
    return this._updateById({ id, data, token });
  }

  public getById({ id, token }: IRequestsWithId): Promise<any> {
    return this._getById({ id, token });
  }

  public deleteById({ id, token }: IRequestsWithId): Promise<any> {
    return this._deleteById({ id, token });
  }
}

export default Tasks;
