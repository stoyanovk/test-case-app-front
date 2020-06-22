import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_CURRENT_TASK } from "../actionTypes";
import { requestCurrentTaskSuccess, setError } from "../actions";
import { getLocalData, setLocalData } from "lib/localStorage";
import { Tasks } from "api";

const tasks = new Tasks();

type actionType = {
  type: string;
  payload: string;
};

function* getTaskByIdSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию
    const token = getLocalData();
    const apiCall = tasks.getById.bind(tasks);

    const response = yield call(apiCall, {
      token,
      id: action.payload,
    });
    if (response.status === "success") {
      const {
        data: { task, token: responseToken },
      } = response;

      setLocalData(responseToken);
      yield put(requestCurrentTaskSuccess(task));
    }
    if (response.status === "error") {
      throw new Error(response.data.message);
    }
  } catch (err) {
    yield put(setError({ message: err.message, isError: true }));
  }
}

function* getTaskByIdWatcher() {
  yield takeLatest(FETCH_CURRENT_TASK, getTaskByIdSaga);
}

export default getTaskByIdWatcher;
