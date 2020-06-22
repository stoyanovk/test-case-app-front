import { all } from "redux-saga/effects";
import {
  loginWatcher,
  registerWatcher,
  confirmRegisterSagaWatcher,
  getAuthUserWatcher,
  logoutSagaWatcher,
} from "./auth/sagas";

import {
  getProjectsWatcher,
  getProjectByIdWatcher,
  createProjectWatcher,
  updateProjectWatcher,
  deleteProjectByIdWatcher,
} from "./projects/sagas";
import { getTaskByIdWatcher } from "./tasks/sagas";

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
    logoutSagaWatcher(),
    getTaskByIdWatcher(),
  ]);
}
export default rootSaga;
