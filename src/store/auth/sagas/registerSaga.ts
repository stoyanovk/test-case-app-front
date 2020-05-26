import { call, put, takeLatest, delay } from "redux-saga/effects";
import {
  SET_SERVER_MESSAGE,
  SET_ERROR_MESSAGE,
  FETCH_REGISTER,
} from "../actionTypes";

import { Auth } from "api";

const auth = new Auth();

type actionType = {
  type: string;
  payload: object;
};

function* registerSaga(action: actionType) {
  try {
    const apiCall = auth.register.bind(auth);
    const response = yield call(apiCall, action.payload);

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
export default registerWatcher;
