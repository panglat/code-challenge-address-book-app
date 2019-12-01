/**
 * @file Redux Root Saga.
 * @module redux/rootSaga
 */
import { all, spawn } from 'redux-saga/effects';
import userSagas from './users/sagas';

/**
 * @generator
 * @description aggregate multiple Sagas to a single entry point for the sagaMiddleware to run.
 * It uses *spawn* which is an effect that will disconnect your child saga from its parent,
 * allowing it to fail without crashing it's parent.
 */
export default function* rootSaga() {
  yield all([
    userSagas,
  ].map(spawn));
}
