import { stringify } from "query-string";

enum METHODS {
  PUT = "PUT",
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}
type id = string | number;

interface IQueryConstructor {
  url: string;
  name: string;
  subName?: string;
}

interface IRequest {
  url: string;
  data?: object;
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
  //   deleteById(id: id): Promise<any>;
}
class RequestSource implements IRequestSource {
  private _url: string;
  private _name: string;
  private _subName?: string;

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

  private _request({ url, data, method }: IRequest) {
    return fetch(url, {
      method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((r) => r);
  }

  public create(data: object, id?: id) {
    const url: string = this._buildUrl({ id });
    return this._request({ url, data, method: METHODS.POST });
  }

  public update(id: id, data: object) {
    const url: string = this._buildUrl({ id });
    return this._request({ url, data, method: METHODS.PUT });
  }
  
  public getById(id: id) {
    const url: string = this._buildUrl({ id });
    return this._request({ url, method: METHODS.GET });
  }

  public getByQuery({ id, params }: IBuildUrl) {
    const url: string = this._buildUrl({ id, params });
    return this._request({ url, method: METHODS.GET });
  }
}
export default RequestSource;
