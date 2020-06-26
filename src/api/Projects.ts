import RequestSource from "lib/RequestSource";
import {
  IRequests,
  IParams,
  IRequestsWithData,
  IRequestsWithId,
} from "interfaces/requests";

import { IResponse, IMessage } from "interfaces/responses";
import { IProjects, IProject } from "interfaces/entities";
import CONFIG from "config";

interface IProjectsRequests extends IRequests<IProject, IMessage> {
  create(data: object): Promise<IResponse<IProject | IMessage>>;
  getByQuery(params: IParams): Promise<IResponse<IProjects | IMessage>>;
}

class Projects extends RequestSource<IProject, IProjects, IMessage>
  implements IProjectsRequests {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: "projects" });
  }
  public create({ data, token }: { data: object; token: string }) {
    return this._create({ data, token });
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

export default Projects;
