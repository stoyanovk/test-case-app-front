import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_ADD_PROJECTS } from '../actionTypes'
import { addProjects, setError } from '../actions'
import { setLocalData } from 'lib/localStorage'
import { Projects } from 'api'

const projects = new Projects()

type actionType = {
  type: string
  payload: any
}

function* createProjectSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию

    const response = yield projects.create(action.payload)
    if (response.status === 'success') {
      const {
        data: { project, token: responseToken }
      } = response

      setLocalData(responseToken)
      yield put(addProjects(project))
    }
    if (response.status === 'error') {
      throw new Error(response.data.message)
    }
  } catch (err) {
    yield put(setError({ message: err.message, isError: true }))
  }
}

function* createProjectWatcher() {
  yield takeLatest(FETCH_ADD_PROJECTS, createProjectSaga)
}

export default createProjectWatcher
