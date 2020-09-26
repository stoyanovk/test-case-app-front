import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_UPDATE_TASKS } from '../actionTypes'
import { updateTasks, setError } from '../actions'
import { setLocalData } from 'lib/localStorage'
import { Tasks } from 'api'

const tasks = new Tasks()

type actionType = {
  type: string
  payload: any
}

function* updateProjectSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию

    const apiCall = tasks.updateById.bind(tasks)
    const response = yield call(apiCall, {
      data: action.payload.data,
      id: action.payload.id
    })
    console.log(response)
    if (response.status === 'success') {
      const {
        data: { task, token: responseToken }
      } = response

      setLocalData(responseToken)
      yield put(updateTasks(task))
    }
    if (response.status === 'error') {
      throw new Error(response.data.message)
    }
  } catch (err) {
    yield put(setError({ message: err.message, isError: true }))
  }
}

function* updateTaskWatcher() {
  yield takeLatest(FETCH_UPDATE_TASKS, updateProjectSaga)
}

export default updateTaskWatcher
