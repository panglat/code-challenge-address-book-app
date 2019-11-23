import {
  USERS_FETCH_REQUESTED,
  USERS_FETCH_SUCCEEDED,
  USERS_FETCH_FAILED,
  USERS_RECORD_TO_DISPLAY,
  RESET_USERS_FETCH_FAILED,
} from './actionTypes';

const initialState = {
  users: {
    recordsToDisplay: 0,
    loading: false,
    error: null,
    userList: [],
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCH_REQUESTED:
      return {
        ...state,
        users: {
          ...state.users,
          loading: true,
        },
      };

    case USERS_FETCH_SUCCEEDED:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          error: null,
          userList: [...state.users.userList, ...action.payload.response],
        },
      };

    case USERS_FETCH_FAILED:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          error: action.payload.error,
        },
      };

    case USERS_RECORD_TO_DISPLAY:
      return {
        ...state,
        users: {
          ...state.users,
          recordsToDisplay: action.payload.records,
        },
      };

    case RESET_USERS_FETCH_FAILED:
      return {
        ...state,
        users: {
          ...state.users,
          error: null,
        },
      };

    default:
      return state;
  }
}
