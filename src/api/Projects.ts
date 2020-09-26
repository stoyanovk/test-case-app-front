import RequestSource from 'lib/RequestSource'
import { IRequests, IRequestsWithData } from 'interfaces/requests'
import { id } from 'interfaces/helpers'

import { IResponse, IMessage } from 'interfaces/responses'
import { IProjects, IProject } from 'interfaces/entities'
import CONFIG from 'config'

interface IProjectsRequests extends IRequests<IProject | IMessage> {
  create(data: object): Promise<IResponse<IProject | IMessage>>
  getByQuery(params: object): Promise<IResponse<IProjects | IMessage>>
}

class Projects extends RequestSource<IProject> implements IProjectsRequests {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: 'projects' })
  }
  public create(data: object) {
    return this._create({ data })
  }
  public getByQuery(queryParams?: object) {
    return this._getByQuery({ queryParams })
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

export default Projects
