import RequestSource from "lib/RequestSource";
import { IResponse } from "interfaces/entities";
import { IRequests, id } from "lib/interfaces";
import { IRequestsWithData, IRequestsWithId } from "./interfaces";
import CONFIG from "config";

interface IComments extends IRequests {
  createTasksComments(data: IRequestsWithData): Promise<IResponse>;
  createResultsComments(data: IRequestsWithData): Promise<IResponse>;
  getResultsCommentsByQuery(data: IRequestsWithId): Promise<IResponse>;
  getTasksCommentsByQuery(data: IRequestsWithId): Promise<IResponse>;
}

enum ENTITY_OWNER_NAMES {
  TASKS = "tasks",
  RESULTS = "results",
}

class Comments extends RequestSource implements IComments {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: "comments" });
  }
  public createTasksComments({ data, token, id }: IRequestsWithData) {
    return this._create({
      data,
      token,
      id,
      entityOwnerName: ENTITY_OWNER_NAMES.TASKS,
    });
  }

  public createResultsComments({ data, token, id }: IRequestsWithData) {
    return this._create({
      data,
      token,
      id,
      entityOwnerName: ENTITY_OWNER_NAMES.RESULTS,
    });
  }

  public getResultsCommentsByQuery({ id, token }: IRequestsWithId) {
    return this._getByQuery({ id, token });
  }

  public getTasksCommentsByQuery({ id, token }: IRequestsWithId) {
    return this._getByQuery({ id, token });
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

export default Comments;
