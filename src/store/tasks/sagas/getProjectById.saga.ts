import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_CURRENT_PROJECT } from "../actionTypes";
import { requestCurrentProjectSuccess, setError } from "../actions";
import { getLocalData, setLocalData } from "lib/localStorage";
import { Projects } from "api";
const projects = new Projects();

type actionType = {
  type: string;
  payload: string;
};

function* getProjectByIdSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию
    const token = getLocalData();
    const apiCall = projects.getById.bind(projects);

    const response = yield call(apiCall, {
      token,
      id: action.payload,
    });
    if (response.status === "success") {
      const {
        data: { project, token: responseToken },
      } = response;
      console.log(response);
      setLocalData(responseToken);
      yield put(requestCurrentProjectSuccess(project));
    }
    if (response.status === "error") {
      throw new Error(response.data.message);
    }
  } catch (err) {
    yield put(setError({ message: err.message, isError: true }));
  }
}

function* getProjectByIdWatcher() {
  yield takeLatest(FETCH_CURRENT_PROJECT, getProjectByIdSaga);
}

export default getProjectByIdWatcher;
