import { call, put, takeLatest } from "redux-saga/effects";
import { GET_AUTH_USER } from "../actionTypes";
import { login, setError } from "../actions";
import { getLocalData, setLocalData } from "lib/localStorage";

import { Auth } from "api";
const auth = new Auth();

type actionType = {
  type: string;
};

function* getAuthUserSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию
    const token = getLocalData();
    const apiCall = auth.getAuthUser.bind(auth);
    const response = yield call(apiCall, token);

    if (response.status === "success") {
      const {
        data: { user, token: responseToken },
      } = response;

      setLocalData(responseToken);
      yield put(login(user));
    }
    if (response.status === "error") {
      throw new Error(response.data.message);
    }
  } catch (err) {
    console.log(err);
  }
}

function* getAuthUserWatcher() {
  yield takeLatest(GET_AUTH_USER, getAuthUserSaga);
}

export default getAuthUserWatcher;
