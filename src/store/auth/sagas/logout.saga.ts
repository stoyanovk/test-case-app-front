import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_LOGOUT } from "../actionTypes";
import { logout, setError } from "../actions";
import { getLocalData, setLocalData } from "lib/localStorage";

import { Auth } from "api";
const auth = new Auth();

type actionType = {
  type: string;
};

function* logoutSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию
    const token = getLocalData();
    const apiCall = auth.logout.bind(auth);
    const response = yield call(apiCall, token);

    if (response.status === "success") {
      setLocalData("");
      yield put(logout());
    }
    if (response.status === "error") {
      throw new Error(response.data.message);
    }
  } catch (err) {
    yield put(setError({ message: "", isError: false }));
  }
}

function* logoutSagaWatcher() {
  yield takeLatest(FETCH_LOGOUT, logoutSaga);
}

export default logoutSagaWatcher;
