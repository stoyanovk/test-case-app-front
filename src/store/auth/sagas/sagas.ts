import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN, FETCH_LOGIN, SET_ERROR } from "../actionTypes";
import { setLocalData } from "lib/localStorage";
import { Auth } from "api";
const auth = new Auth();
console.log(auth);
type actionType = {
  type: string;
  payload: object;
};

function* loginSaga(action: actionType) {
  try {
    const data = yield call(auth.login, action.payload);
    // const data = yield auth.login(action.payload);

    console.log(data);
    yield put({ type: LOGIN, payload: data.user });
  } catch (err) {
      console.log(err)
    yield put({ type: SET_ERROR, payload: err.message });
  }
}

function* loginWatcher() {
  yield takeLatest(FETCH_LOGIN, loginSaga);
}

export default loginWatcher;
