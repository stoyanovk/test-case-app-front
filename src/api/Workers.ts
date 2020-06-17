import RequestSource from "lib/RequestSource";
import { IRequestsWithId } from "./interfaces";
import CONFIG from "config";
import { IResponse } from "interfaces/entities";

interface IWorkers {
  create(data: object): Promise<IResponse>;
}

class Workers extends RequestSource implements IWorkers {
  constructor() {
    super({ url: CONFIG.API_URL, entityName: "workers" });
  }
  public create({ token, data }: { token: string; data: object }) {
    return this._create({ token, data });
  }
  public getByQuery({ id, token }: IRequestsWithId) {
    return this._getByQuery({ id, token, entityOwnerName: "projects" });
  }

  public deleteById({
    id,
    token,
    subId,
  }: {
    id: string | number;
    token: string;
    subId: string;
  }) {
    return this._deleteById({ id, token, subId, entityOwnerName: "projects" });
  }
}

export default Workers;
