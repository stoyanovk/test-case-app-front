import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_UPDATE_PROJECTS } from '../actionTypes'
import { updateProjects, setError } from '../actions'
import { setLocalData } from 'lib/localStorage'
import { Projects } from 'api'

const projects = new Projects()

type actionType = {
  type: string
  payload: any
}

function* updateProjectSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию
    const apiCall = projects.updateById.bind(projects)
    const response = yield call(apiCall, {
      data: action.payload.data,
      id: action.payload.id
    })
    console.log(response)
    if (response.status === 'success') {
      const {
        data: { project, token: responseToken }
      } = response

      setLocalData(responseToken)
      yield put(updateProjects(project, project.id))
    }
    if (response.status === 'error') {
      throw new Error(response.data.message)
    }
  } catch (err) {
    yield put(setError({ message: err.message, isError: true }))
  }
}

function* updateProjectWatcher() {
  yield takeLatest(FETCH_UPDATE_PROJECTS, updateProjectSaga)
}

export default updateProjectWatcher
