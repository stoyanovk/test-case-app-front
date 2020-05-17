import RequestSource from "lib/RequestSource";
import { IRequests } from "lib/interfaces";
import { IParams, IRequestsWithData, IRequestsWithId } from "./interfaces";
import CONFIG from "config";

interface IProjects extends IRequests {
  create(data: object): Promise<any>;
  getByQuery(params: IParams): Promise<any>;
}

class Projects extends RequestSource implements IProjects {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: "projects" });
  }
  public create({
    data,
    token,
  }: {
    data: object;
    token: string;
  }): Promise<any> {
    return this._create({ data, token });
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

export default Projects;
