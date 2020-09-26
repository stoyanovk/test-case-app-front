import RequestSource from 'lib/RequestSource'
import { IResponse, IMessage } from 'interfaces/responses'
import { IRequests, IRequestsWithData } from 'interfaces/requests'
import { id } from 'interfaces/helpers'
import { IComment } from 'interfaces/entities'
import CONFIG from 'config'

interface ICommentsRequests extends IRequests<IComment> {
  createTasksComments(data: IRequestsWithData): Promise<IResponse<IComment | IMessage>>
  createResultsComments(data: IRequestsWithData): Promise<IResponse<IComment | IMessage>>
  getResultsCommentsByQuery(id: id): Promise<IResponse<IComment[] | IMessage>>
  getTasksCommentsByQuery(id: id): Promise<IResponse<IComment[] | IMessage>>
}

enum ENTITY_OWNER_NAMES {
  TASKS = 'tasks',
  RESULTS = 'results'
}

class Comments extends RequestSource<IComment> implements ICommentsRequests {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: 'comments' })
  }
  public createTasksComments({ data, id }: IRequestsWithData) {
    return this._create({
      data,
      id,
      entityOwnerName: ENTITY_OWNER_NAMES.TASKS
    })
  }

  public createResultsComments({ data, id }: IRequestsWithData) {
    return this._create({
      data,
      id,
      entityOwnerName: ENTITY_OWNER_NAMES.RESULTS
    })
  }

  public getResultsCommentsByQuery(id: id) {
    return this._getByQuery({ id })
  }

  public getTasksCommentsByQuery(id: id) {
    return this._getByQuery({ id })
  }

  public updateById({ id, data }: IRequestsWithData) {
    return this._updateById({ id, data })
  }

  public getById(id: id) {
    return this._getById(id)
  }

  public deleteById(id: id) {
    return this._deleteById({ id })
  }
}

export default Comments
