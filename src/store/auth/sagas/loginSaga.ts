import { call, put, takeLatest, delay } from "redux-saga/effects";
import { LOGIN, FETCH_LOGIN, SET_ERROR_MESSAGE } from "../actionTypes";
import { setLocalData } from "lib/localStorage";
import { Auth } from "api";
const auth = new Auth();

type actionType = {
  type: string;
  payload: object;
};

function* loginSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию
    const apiCall = auth.login.bind(auth);
    const response = yield call(apiCall, action.payload);

    if (response.status === "success") {
      const {
        data: { user, token },
      } = response;
      setLocalData(token);
      yield put({ type: LOGIN, payload: { user, token } });
    }
    if (response.status === "error") {
      throw new Error(response.data.message);
    }
  } catch (err) {
    yield put({ type: SET_ERROR_MESSAGE, payload: err.message });
    yield delay(5000);
    yield put({ type: SET_ERROR_MESSAGE, payload: "" });
  }
}

function* loginWatcher() {
  yield takeLatest(FETCH_LOGIN, loginSaga);
}

export default loginWatcher;
