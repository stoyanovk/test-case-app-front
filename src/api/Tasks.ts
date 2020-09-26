import RequestSource from 'lib/RequestSource'
import { IRequests, IRequestsWithData } from 'interfaces/requests'
import { id } from 'interfaces/helpers'
import { IResponse, IMessage } from 'interfaces/responses'
import { ITasks, ITask } from 'interfaces/entities'

import CONFIG from 'config'

interface ITasksRequests extends IRequests<ITask | IMessage> {
  createProjectsTasks(data: IRequestsWithData): Promise<IResponse<ITask | IMessage>>
  getProjectsTasksById(id: id): Promise<IResponse<ITasks | IMessage>>
}

class Tasks extends RequestSource<ITask> implements ITasksRequests {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: 'tasks' })
  }
  public createProjectsTasks({ data, id }: IRequestsWithData) {
    return this._create({
      data,
      id,
      entityOwnerName: 'projects'
    })
  }

  public getProjectsTasksById(id: id) {
    return this._getByQuery({ id, entityOwnerName: 'projects' })
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

export default Tasks
