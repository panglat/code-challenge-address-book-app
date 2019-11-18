import {
  USERS_FETCH_REQUESTED,
  USERS_FETCH_SUCCEEDED,
  USERS_FETCH_FAILED,
} from './actionTypes';

const initialState = {
  users: {
    loading: false,
    error: null,
    response: null,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCH_REQUESTED:
      return {
        ...state,
        users: {
          ...state.users,
          loading: action.payload.loading,
          response: null,
        },
      };

    case USERS_FETCH_SUCCEEDED:
      return {
        ...state,
        users: {
          ...state.users,
          loading: action.payload.loading,
          error: null,
          response: action.payload.response,
        },
      };

    case USERS_FETCH_FAILED:
      return {
        ...state,
        users: {
          ...state.users,
          loading: action.payload.loading,
          error: action.payload.error,
        },
      };

    default:
      return state;
  }
}
