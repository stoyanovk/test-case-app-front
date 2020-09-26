import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_PROJECTS } from '../actionTypes'
import { requestProjectsSuccess, setError } from '../actions'
import { setLocalData } from 'lib/localStorage'
import { Projects } from 'api'
const projects = new Projects()

type actionType = {
  type: string
  payload: any
}

function* getProjectsSaga(action: actionType) {
  try {
    const response = yield call(projects.getByQuery,)

    console.log(response)
    if (response.status === 'success') {
      const {
        data: { projects, token: responseToken }
      } = response

      setLocalData(responseToken)
      yield put(requestProjectsSuccess(projects))
    }
    if (response.status === 'error') {
      throw new Error(response.data.message)
    }
  } catch (err) {
    yield put(setError({ message: err.message, isError: true }))
  }
}

function* getProjectsWatcher() {
  yield takeLatest(FETCH_PROJECTS, getProjectsSaga)
}

export default getProjectsWatcher
