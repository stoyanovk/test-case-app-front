import { call, put, takeLatest, delay } from "redux-saga/effects";
import { LOGIN, FETCH_LOGIN, SET_ERROR } from "../actionTypes";
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
    console.log(err);
    yield put({ type: SET_ERROR, payload: err.message });
    yield delay(4000);
    yield put({ type: SET_ERROR, payload: "" });
  }
}

function* loginWatcher() {
  yield takeLatest(FETCH_LOGIN, loginSaga);
}

export default loginWatcher;
