import { stringify } from "query-string";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { id } from "interfaces/helpers";
import { IResponse } from "interfaces/responses";
import {
  IQueryConstructor,
  IBuildUrl,
  IRequest,
  METHODS,
} from "interfaces/requests";

//C - create response interface
//Q - getByQuery response interface
//M - message or Error response interface
class RequestSource<C, Q, M> {
  protected _url: string;
  protected _entityName: string;

  constructor({ url, entityName }: IQueryConstructor) {
    this._url = url;
    this._entityName = entityName;
  }

  private _serializeQuery(query: object): string {
    return stringify(query);
  }

  private _buildUrl({
    id,
    queryParams,
    subId,
    entityOwnerName,
  }: IBuildUrl): string {
    let url: string = `${this._url}`;
    let serialize: string | undefined =
      queryParams && this._serializeQuery(queryParams);

    if (entityOwnerName) {
      url += `/${entityOwnerName}/${id}/${this._entityName}`;

      if (subId) {
        url += `/${subId}`;
      }
      return url;
    }

    url += `/${this._entityName}`;

    if (id) {
      url += `/${id}`;
    }

    if (serialize) {
      url += `/${serialize}`;
    }

    return url;
  }

  protected _request({ url, data, method, token = "" }: IRequest) {
    return fetch(url, {
      method,
      referrerPolicy: "origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((r) => r);
  }

  protected _create({
    data,
    id,
    entityOwnerName,
    token,
  }: {
    data: object;
    id?: id;
    entityOwnerName?: string;
    token: string;
  }): Promise<IResponse<C | M>> {
    const url: string = this._buildUrl({ id, entityOwnerName });
    return this._request({ url, data, method: METHODS.POST, token });
  }

  protected _getByQuery({
    id,
    queryParams,
    token,
    entityOwnerName,
  }: {
    id?: id;
    queryParams?: object;
    token: string;
    entityOwnerName?: string;
  }): Promise<IResponse<Q | M>> {
    const url: string = this._buildUrl({ id, queryParams, entityOwnerName });

    return this._request({ url, method: METHODS.GET, token });
  }

  protected _updateById({
    id,
    data,
    token,
  }: {
    id: id;
    data: object;
    token: string;
  }): Promise<IResponse<C | M>> {
    const url: string = this._buildUrl({ id });
    return this._request({ url, data, method: METHODS.PUT, token });
  }

  protected _getById({
    id,
    token,
  }: {
    id: id;
    token?: string;
  }): Promise<IResponse<C | M>> {
    const url: string = this._buildUrl({ id });
    return this._request({ url, method: METHODS.GET, token });
  }

  protected _deleteById({
    token,
    id,
    subId,
    entityOwnerName,
  }: {
    id: id;
    subId?: id;
    token: string;
    entityOwnerName?: string;
  }): Promise<IResponse<M>> {
    const url: string = this._buildUrl({ entityOwnerName, id, subId });
    return this._request({ url, method: METHODS.DELETE, token });
  }
}
export default RequestSource;
