import { stringify } from 'query-string'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { id } from 'interfaces/helpers'
import { getLocalData } from './localStorage'
import { IResponse, IMessage } from 'interfaces/responses'
import { IQueryConstructor, IBuildUrl, IRequest, METHODS } from 'interfaces/requests'

class RequestSource<C, Q = C[]> {
  protected _url: string
  protected _entityName: string

  constructor({ url, entityName }: IQueryConstructor) {
    this._url = url
    this._entityName = entityName
  }

  private _serializeQuery(query: object): string {
    return stringify(query)
  }

  private _buildUrl({ id, queryParams, subId, entityOwnerName }: IBuildUrl): string {
    let url: string = `${this._url}`
    let serialize: string | undefined = queryParams && this._serializeQuery(queryParams)

    if (entityOwnerName) {
      url += `/${entityOwnerName}/${id}/${this._entityName}`

      if (subId) {
        url += `/${subId}`
      }
      return url
    }

    url += `/${this._entityName}`

    if (id) {
      url += `/${id}`
    }

    if (serialize) {
      url += `/${serialize}`
    }

    return url
  }

  protected _request({ url, data, method }: IRequest) {
    const token = getLocalData() || ''
    return fetch(url, {
      method,
      referrerPolicy: 'origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(r => r)
  }

  protected _create({
    data,
    id,
    entityOwnerName
  }: {
    data: object
    id?: id
    entityOwnerName?: string
  }): Promise<IResponse<C>> {
    const url: string = this._buildUrl({ id, entityOwnerName })
    return this._request({ url, data, method: METHODS.POST })
  }

  protected _getByQuery({
    id,
    queryParams,
    entityOwnerName
  }: {
    id?: id
    queryParams?: object
    entityOwnerName?: string
  }): Promise<IResponse<Q>> {
    const url: string = this._buildUrl({ id, queryParams, entityOwnerName })
    console.log(123)
    return this._request({ url, method: METHODS.GET })
  }

  protected _updateById({ id, data }: { id: id; data: object }): Promise<IResponse<C>> {
    const url: string = this._buildUrl({ id })
    return this._request({ url, data, method: METHODS.PUT })
  }

  protected _getById(id: id): Promise<IResponse<C>> {
    const url: string = this._buildUrl({ id })
    return this._request({ url, method: METHODS.GET })
  }

  protected _deleteById({
    id,
    subId,
    entityOwnerName
  }: {
    id: id
    subId?: id
    entityOwnerName?: string
  }): Promise<IResponse<IMessage>> {
    const url: string = this._buildUrl({ entityOwnerName, id, subId })
    return this._request({ url, method: METHODS.DELETE })
  }
}
export default RequestSource
