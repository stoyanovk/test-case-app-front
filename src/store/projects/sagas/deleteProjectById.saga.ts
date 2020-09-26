import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_DELETE_PROJECTS } from '../actionTypes'
import { setError, deleteProjects } from '../actions'
import { setLocalData } from 'lib/localStorage'
import { Projects } from 'api'
const projects = new Projects()

type actionType = {
  type: string
  payload: string
}

function* deleteProjectByIdSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию
    const apiCall = projects.deleteById.bind(projects)

    const response = yield call(apiCall, action.payload)
    if (response.status === 'success') {
      const {
        data: { message, token: responseToken }
      } = response
      setLocalData(responseToken)
      yield put(deleteProjects(action.payload, message))
    }
    if (response.status === 'error') {
      throw new Error(response.data.message)
    }
  } catch (err) {
    yield put(setError({ message: err.message, isError: true }))
  }
}

function* deleteProjectByIdWatcher() {
  yield takeLatest(FETCH_DELETE_PROJECTS, deleteProjectByIdSaga)
}

export default deleteProjectByIdWatcher
