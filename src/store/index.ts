import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
/**
 * Reducers
 */
import auth from "./auth/reducer";
/**
 * Sagas
 */
import { loginWatcher, registerWatcher } from "./auth/sagas";

function* rootSaga() {
  yield all([loginWatcher(), registerWatcher()]);
}

const reducer = combineReducers({
  auth,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;
