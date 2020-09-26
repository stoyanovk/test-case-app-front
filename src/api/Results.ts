import RequestSource from 'lib/RequestSource'
import { IRequests, IRequestsWithData } from 'interfaces/requests'
import { id } from 'interfaces/helpers'
import { IResponse, IMessage } from 'interfaces/responses'
import { IResults, IResult } from 'interfaces/entities'
import CONFIG from 'config'

interface IResultsRequests extends IRequests<IResult | IMessage> {
  createTasksResults(data: IRequestsWithData): Promise<IResponse<IResult | IMessage>>
  /**
   * this is temporary decide,getTasksResultsByQuery will be get object with params
   */
  getTasksResultsByQuery(id: id): Promise<IResponse<IResults | IMessage>>
}

class Results extends RequestSource<IResult> implements IResultsRequests {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: 'results' })
  }
  public createTasksResults({ data, id }: IRequestsWithData) {
    return this._create({
      data,
      id,
      entityOwnerName: 'tasks'
    })
  }

  public getTasksResultsByQuery(id: id) {
    return this._getByQuery({ id, entityOwnerName: 'tasks' })
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

export default Results
