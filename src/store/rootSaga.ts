import { all, fork } from 'redux-saga/effects'
import {
  loginWatcher,
  registerWatcher,
  confirmRegisterSagaWatcher,
  getAuthUserWatcher,
  logoutSagaWatcher
} from './auth/sagas'

import {
  getProjectsWatcher,
  getProjectByIdWatcher,
  createProjectWatcher,
  updateProjectWatcher,
  deleteProjectByIdWatcher
} from './projects/sagas'
import { getTaskByIdWatcher, getTasksWatcher, updateTaskWatcher, deleteTaskByIdWatcher } from './tasks/sagas'

function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(registerWatcher),
    fork(confirmRegisterSagaWatcher),
    fork(getAuthUserWatcher),
    fork(getProjectsWatcher),
    fork(getProjectByIdWatcher),
    fork(createProjectWatcher),
    fork(updateProjectWatcher),
    fork(deleteProjectByIdWatcher),
    fork(logoutSagaWatcher),
    fork(getTaskByIdWatcher),
    fork(getTasksWatcher),
    fork(updateTaskWatcher),
    fork(deleteTaskByIdWatcher)
  ])
}
export default rootSaga
