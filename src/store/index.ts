import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
/**
 * Reducers
 */
import auth from "./auth/reducer";
import projects from "./projects/reducer";
import tasks from "./tasks/reducer";

const reducer = combineReducers({
  auth,
  projects,
  tasks,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;
