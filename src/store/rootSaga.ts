import { all } from "redux-saga/effects";
import {
  loginWatcher,
  registerWatcher,
  confirmRegisterSagaWatcher,
  getAuthUserWatcher,
} from "./auth/sagas";

import {
  getProjectsWatcher,
  getProjectByIdWatcher,
  createProjectWatcher,
  updateProjectWatcher,
  deleteProjectByIdWatcher,
} from "./projects/sagas";

function* rootSaga() {
  yield all([
    loginWatcher(),
    registerWatcher(),
    confirmRegisterSagaWatcher(),
    getAuthUserWatcher(),
    getProjectsWatcher(),
    getProjectByIdWatcher(),
    createProjectWatcher(),
    updateProjectWatcher(),
    deleteProjectByIdWatcher(),
  ]);
}
export default rootSaga;
