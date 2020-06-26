import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_TASKS } from "../actionTypes";
import { requestTasksSuccess, setError } from "../actions";
import { getLocalData, setLocalData } from "lib/localStorage";
import { Tasks } from "api";
const tasks = new Tasks();

type actionType = {
  type: string;
  payload: any;
};

function* getTasksSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию
    const token = getLocalData();
    const apiCall = tasks.getProjectsTasksById.bind(tasks);
    const response = yield call(apiCall, {
      token,
      id: action.payload,
    });
    if (response.status === "success") {
      const {
        data: { tasks, token: responseToken },
      } = response;

      setLocalData(responseToken);
      yield put(requestTasksSuccess(tasks));
      console.log(response);
    }

    if (response.status === "error") {
      throw new Error(response.data.message);
    }
  } catch (err) {
    yield put(setError({ message: err.message, isError: true }));
  }
}

function* getTasksWatcher() {
  yield takeLatest(FETCH_TASKS, getTasksSaga);
}

export default getTasksWatcher;
