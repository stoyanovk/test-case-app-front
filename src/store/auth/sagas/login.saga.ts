import { call, put, takeLatest } from "redux-saga/effects";
import { setLocalData } from "lib/localStorage";
import { FETCH_LOGIN } from "../actionTypes";
import { login, setError } from "../actions";
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
        data: { token, user },
      } = response;
      setLocalData(token);
      yield put(login(user));

    }
    if (response.status === "error") {
      throw new Error(response.data.message);
    }
  } catch (err) {
    yield put(setError({ message: err.message, isError: true }));
  }
}

function* loginWatcher() {
  yield takeLatest(FETCH_LOGIN, loginSaga);
}

export default loginWatcher;
