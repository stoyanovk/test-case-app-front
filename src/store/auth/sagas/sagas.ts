import { call, put, takeLatest, delay } from "redux-saga/effects";
import {
  LOGIN,
  FETCH_LOGIN,
  SET_SERVER_MESSAGE,
  SET_ERROR_MESSAGE,
  FETCH_REGISTER,
} from "../actionTypes";
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
    const loginCall = auth.login.bind(auth);
    const response = yield call(loginCall, action.payload);

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

function* registerSaga(action: actionType) {
  try {
    const loginCall = auth.register.bind(auth);
    const response = yield call(loginCall, action.payload);

    if (response.status === "success") {
      const {
        data: { message },
      } = response;

      yield put({ type: SET_SERVER_MESSAGE, payload: message });
      yield delay(5000);
      yield put({ type: SET_SERVER_MESSAGE, payload: "" });
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
function* registerWatcher() {
  yield takeLatest(FETCH_REGISTER, registerSaga);
}
function* loginWatcher() {
  yield takeLatest(FETCH_LOGIN, loginSaga);
}

export { loginWatcher, registerWatcher };
