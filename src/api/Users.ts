import RequestSource from 'lib/RequestSource'
import { IRequests, IRequestsWithData } from 'interfaces/requests'
import { id } from 'interfaces/helpers'
import { IResponse, IMessage } from 'interfaces/responses'
import { IUser, IUsers } from 'interfaces/entities'
import CONFIG from 'config'

interface IUsersRequests extends IRequests<IUser | IMessage> {
  getByQuery(queryParams?: object): Promise<IResponse<IUsers | IMessage>>
}

class Users extends RequestSource<IUser> implements IUsersRequests {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: 'users' })
  }

  public getByQuery(queryParams: object) {
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

export default Users
