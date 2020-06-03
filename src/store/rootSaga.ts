import { all } from "redux-saga/effects";
import {
  loginWatcher,
  registerWatcher,
  confirmRegisterSagaWatcher,
  getAuthUserWatcher,
} from "./auth/sagas";

import { getProjectsWatcher } from "./projects/sagas";

function* rootSaga() {
  yield all([
    loginWatcher(),
    registerWatcher(),
    confirmRegisterSagaWatcher(),
    getAuthUserWatcher(),
    getProjectsWatcher(),
  ]);
}
export default rootSaga;
