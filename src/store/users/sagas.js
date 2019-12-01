/**
 * @file Manages Users redux-saga
 * @module redux-store/users/saga
 */
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { USERS_FETCH_REQUESTED } from './actionTypes';
import { requestUsersSuccess, requestUsersError } from './actions';
import { getUserList } from '../../services/UserService';

/**
 * @generator
 * @description trigger getUserList API call.
 * @param {string} action action reference to access to action payload.
 */
function* fetchUsers(action) {
  try {
    const result = yield call(() => getUserList(action.payload.params));
    yield put(requestUsersSuccess(result));
  } catch (e) {
    yield put(requestUsersError(e.message));
  }
}
/**
 * @generator
 * @description watches for all USERS_FETCH_REQUESTED actions.
 */
function* watchFetchUsers() {
  yield takeLatest(USERS_FETCH_REQUESTED, fetchUsers);
}

/**
 * @generator
 * @description export the rootSaga single entry point to start all Sagas at once.
 */
export default function* sagas() {
  yield all([watchFetchUsers()]);
}
