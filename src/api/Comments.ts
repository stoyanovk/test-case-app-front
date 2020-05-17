import RequestSource from "lib/RequestSource";
import { IRequests, id } from "lib/interfaces";
import { IRequestsWithData, IRequestsWithId } from "./interfaces";
import CONFIG from "config";

interface IComments extends IRequests {
  createTasksComments(data: IRequestsWithData): Promise<any>;
  createResultsComments(data: IRequestsWithData): Promise<any>;
  getResultsCommentsByQuery(data: IRequestsWithId): Promise<any>;
  getTasksCommentsByQuery(data: IRequestsWithId): Promise<any>;
}

enum ENTITY_OWNER_NAMES {
  TASKS = "tasks",
  RESULTS = "results",
}

class Comments extends RequestSource implements IComments {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: "comments" });
  }
  public createTasksComments({
    data,
    token,
    id,
  }: IRequestsWithData): Promise<any> {
    return this._create({
      data,
      token,
      id,
      entityOwnerName: ENTITY_OWNER_NAMES.TASKS,
    });
  }

  public createResultsComments({
    data,
    token,
    id,
  }: IRequestsWithData): Promise<any> {
    return this._create({
      data,
      token,
      id,
      entityOwnerName: ENTITY_OWNER_NAMES.RESULTS,
    });
  }

  public getResultsCommentsByQuery({
    id,
    token,
  }: IRequestsWithId): Promise<any> {
    return this._getByQuery({ id, token });
  }

  public getTasksCommentsByQuery({ id, token }: IRequestsWithId): Promise<any> {
    return this._getByQuery({ id, token });
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

export default Comments;
