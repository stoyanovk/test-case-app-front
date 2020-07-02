import RequestSource from "lib/RequestSource";
import { IResponse, IMessage } from "interfaces/responses";
import {
  IRequests,
  IRequestsWithData,
  IRequestsWithId,
} from "interfaces/requests";
import { id } from "interfaces/helpers";
import { IComment } from "interfaces/entities";
import CONFIG from "config";

interface ICommentsRequests extends IRequests<IComment | IMessage> {
  createTasksComments(
    data: IRequestsWithData
  ): Promise<IResponse<IComment | IMessage>>;
  createResultsComments(
    data: IRequestsWithData
  ): Promise<IResponse<IComment | IMessage>>;
  getResultsCommentsByQuery(
    data: IRequestsWithId
  ): Promise<IResponse<IComment[] | IMessage>>;
  getTasksCommentsByQuery(
    data: IRequestsWithId
  ): Promise<IResponse<IComment[] | IMessage>>;
}

enum ENTITY_OWNER_NAMES {
  TASKS = "tasks",
  RESULTS = "results",
}

class Comments extends RequestSource<IComment> implements ICommentsRequests {
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
