import {
  USERS_FETCH_REQUESTED,
  USERS_FETCH_SUCCEEDED,
  USERS_FETCH_FAILED,
  USERS_RECORD_TO_DISPLAY,
} from './actionTypes';

const initialState = {
  users: {
    recordsToDisplay: 0,
    loading: false,
    error: null,
    response: [],
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
          response: [...state.users.response, ...action.payload.response],
        },
      };

    case USERS_FETCH_FAILED:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          error: action.payload.error,
          response: [],
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

    default:
      return state;
  }
}
