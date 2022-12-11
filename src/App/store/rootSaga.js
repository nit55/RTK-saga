import { all, fork, takeEvery } from "redux-saga/effects";
import counterSaga from "../../features/Counter/counterSaga";

function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootSaga;
