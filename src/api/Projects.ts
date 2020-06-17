import RequestSource from "lib/RequestSource";
import { IRequests } from "lib/interfaces";
import { IParams, IRequestsWithData, IRequestsWithId } from "./interfaces";
import { IResponse } from "interfaces/entities";
import CONFIG from "config";

interface IProjects extends IRequests {
  create(data: object): Promise<IResponse>;
  getByQuery(params: IParams): Promise<IResponse>;
}

class Projects extends RequestSource implements IProjects {
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
