import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_CONFIRM_REGISTER } from "../actionTypes";
import { setMessage, setError } from "../actions";
import { Auth } from "api";

const auth = new Auth();

type actionType = {
  type: string;
  payload: string;
};

function* confirmRegisterSaga(action: actionType) {
  try {
    // из-за неизвестных особенностей redux saga я теряю контекст
    // поэтому приходится байндить функцию
    const apiCall = auth.confirmRegister.bind(auth);
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

function* confirmRegisterSagaWatcher() {
  yield takeLatest(FETCH_CONFIRM_REGISTER, confirmRegisterSaga);
}

export default confirmRegisterSagaWatcher;
