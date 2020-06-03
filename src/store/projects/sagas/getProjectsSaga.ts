import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_PROJECTS } from "../actionTypes";
import { requestProjectsSuccess, setError } from "../actions";
import { getLocalData, setLocalData } from "lib/localStorage";
import { Projects } from "api";
const projects = new Projects();

type actionType = {
  type: string;
  payload: any;
};

function* getProjectsSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию
    const token = getLocalData();
    const apiCall = projects.getByQuery.bind(projects);
    const response = yield call(apiCall, {
      token,
      queryParams: action.payload,
    });

    if (response.status === "success") {
      const {
        data: { projects, token: responseToken },
      } = response;

      setLocalData(responseToken);
      yield put(requestProjectsSuccess(projects));
    }
    if (response.status === "error") {
      throw new Error(response.data.message);
    }
  } catch (err) {
    yield put(setError({ message: "", isError: false }));
  }
}

function* getProjectsWatcher() {
  yield takeLatest(FETCH_PROJECTS, getProjectsSaga);
}

export default getProjectsWatcher;
