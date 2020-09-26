import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_DELETE_TASKS } from '../actionTypes'
import { setError, deleteTasks } from '../actions'
import { setLocalData } from 'lib/localStorage'
import { Tasks } from 'api'

const tasks = new Tasks()

type actionType = {
  type: string
  payload: string
}

function* deleteTaskByIdSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию
    const apiCall = tasks.deleteById.bind(tasks)

    const response = yield call(apiCall, action.payload)
    if (response.status === 'success') {
      const {
        data: { message, token: responseToken }
      } = response
      setLocalData(responseToken)
      yield put(deleteTasks(action.payload, message))
    }
    if (response.status === 'error') {
      throw new Error(response.data.message)
    }
  } catch (err) {
    yield put(setError({ message: err.message, isError: true }))
  }
}

function* deleteTaskByIdWatcher() {
  yield takeLatest(FETCH_DELETE_TASKS, deleteTaskByIdSaga)
}

export default deleteTaskByIdWatcher
