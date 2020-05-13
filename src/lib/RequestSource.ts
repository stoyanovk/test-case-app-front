import { stringify } from "query-string";

export enum METHODS {
  PUT = "PUT",
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}

type id = string | number;

export interface IRequests {
  updateById(args:any): Promise<any>;
  getById(args:any): Promise<any>;
  deleteById(args:any): Promise<any>;
}

interface IQueryConstructor {
  url: string;
  name: string;
  [propName: string]: any;
}

interface IRequest {
  url: string;
  data?: object;
  token?: string;
  method?: METHODS;
}

interface IBuildUrl {
  id?: id;
  queryParams?: object | undefined;
  subId?: id;
  entityOwnerName?: string;
}

class RequestSource {
  protected _url: string;
  protected _entityName: string;

  constructor({ url, name }: IQueryConstructor) {
    this._url = url;
    this._entityName = name;
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
      url += `${this._url}/${entityOwnerName}/${id}/${this._entityName}`;
      if (subId) {
        url += `/${subId}`;
      }
      return url;
    }

    url = `${this._url}/${this._entityName}`;

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
    token?: string;
  }): Promise<any> {
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
    token?: string;
    entityOwnerName?: string;
  }): Promise<any> {
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
    token?: string;
  }): Promise<any> {
    const url: string = this._buildUrl({ id });
    return this._request({ url, data, method: METHODS.PUT, token });
  }

  protected _getById({ id, token }: { id: id; token?: string }): Promise<any> {
    const url: string = this._buildUrl({ id });
    return this._request({ url, method: METHODS.GET, token });
  }

  protected _deleteById({
    token,
    id,
    subId,
  }: {
    id: id;
    subId?: id;
    token: string;
  }): Promise<any> {
    const url: string = this._buildUrl({ id, subId });
    return this._request({ url, method: METHODS.DELETE, token });
  }
}
export default RequestSource;
