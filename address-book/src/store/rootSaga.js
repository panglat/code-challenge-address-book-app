/**
 * @file Root saga
 * @module redux/rootSaga
 */
import { all, spawn } from 'redux-saga/effects';
import userSagas from './users/sagas';

export default function* rootSaga() {
  yield all([
    userSagas,
  ].map(spawn));
}
