import { call, put, takeLatest, all } from 'redux-saga/effects';
import { USERS_FETCH_REQUESTED } from './actionTypes';
import { requestUsersSuccess, requestUsersError } from './actions';
import { getUserList } from '../apis/RandomUserAPI';

function* fetchUsers() {
  try {
    const result = yield call(() => getUserList());
    yield put(requestUsersSuccess(result));
  } catch (e) {
    yield put(requestUsersError(e.message));
  }
}
function* watchFetchUsers() {
  yield takeLatest(USERS_FETCH_REQUESTED, fetchUsers);
}

export default function* sagas() {
  yield all([watchFetchUsers()]);
}
