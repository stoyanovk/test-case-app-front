import { stringify } from "query-string";

export enum METHODS {
  // eslint-disable-next-line no-unused-vars
  PUT = "PUT",
  // eslint-disable-next-line no-unused-vars
  GET = "GET",
  // eslint-disable-next-line no-unused-vars
  POST = "POST",
  // eslint-disable-next-line no-unused-vars
  DELETE = "DELETE",
}

type id = string | number;

export interface IQueryConstructor {
  url: string;
  name: string;
  subName?: string;
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
  params?: object | undefined;
  subId?: id;
}
interface IRequestSource {
  create(data: object, id?: id): Promise<any>;
  update(id: id, data: object): Promise<any>;
  getById(id: id): Promise<any>;
  getByQuery({ id, params, subId }: IBuildUrl): Promise<any>;
  deleteById({ id, subId }: { id: id; subId?: id }): Promise<any>;
}

class RequestSource implements IRequestSource {
  protected _url: string;
  protected _name: string;
  protected _subName?: string;

  constructor({ url, name, subName }: IQueryConstructor) {
    this._url = url;
    this._name = name;
    this._subName = subName;
  }

  private _serializeQuery(query: object): string {
    return stringify(query);
  }

  private _buildUrl({ id, params, subId }: IBuildUrl): string {
    let url: string = `${this._url}/${this._name}`;
    let serialize: string | undefined = params && this._serializeQuery(params);

    if (id) {
      url += `/${id}`;
    }
    if (serialize) {
      url += `/${serialize}`;
    }
    if (this._subName) {
      url += `/${this._subName}`;
    }
    if (subId) {
      url += `/${subId}`;
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

  public create(data: object, id?: id, token?: string): Promise<any> {
    const url: string = this._buildUrl({ id });
    return this._request({ url, data, method: METHODS.POST, token });
  }

  public update(id: id, data: object, token?: string): Promise<any> {
    const url: string = this._buildUrl({ id });
    return this._request({ url, data, method: METHODS.PUT, token });
  }

  public getById(id: id, token?: string): Promise<any> {
    const url: string = this._buildUrl({ id });
    return this._request({ url, method: METHODS.GET, token });
  }

  public getByQuery({ id, params }: IBuildUrl, token?: string): Promise<any> {
    const url: string = this._buildUrl({ id, params });
    return this._request({ url, method: METHODS.GET, token });
  }

  public deleteById(
    { id, subId }: { id: id; subId?: id },
    token?: string
  ): Promise<any> {
    const url: string = this._buildUrl({ id, subId });
    return this._request({ url, method: METHODS.DELETE, token });
  }
}
export default RequestSource;
