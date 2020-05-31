import { call, takeLatest, put } from "redux-saga/effects";
import { FETCH_REGISTER } from "../actionTypes";
import { setMessage, setError } from "../actions";
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
      yield put(setMessage(message));
    }
    if (response.status === "error") {
      throw new Error(response.data.message);
    }
  } catch (err) {
    yield put(setError({ message: err.message, isError: true }));
  }
}
function* registerWatcher() {
  yield takeLatest(FETCH_REGISTER, registerSaga);
}
export default registerWatcher;
