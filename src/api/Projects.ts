import RequestSource, { IRequests } from "lib/RequestSource";
import CONFIG from "config";

interface IProjects extends IRequests {
  create(data: object): Promise<any>;
  getByQuery(queryParams?: object): Promise<any>;
}

class Projects extends RequestSource implements IProjects {
  constructor() {
    super({ url: CONFIG.API_URL, name: "projects" });
  }
  public create(data: object): Promise<any> {
    return this._create({ data });
  }
  public getByQuery(queryParams?: object): Promise<any> {
    return this._getByQuery({ queryParams });
  }
  public updateById(args: any): Promise<any> {}
  public getById(args: any): Promise<any> {}
  public deleteById(args: any): Promise<any> {}
}

export default Projects;
