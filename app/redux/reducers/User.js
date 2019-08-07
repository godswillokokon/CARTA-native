import * as types from "../types";

const initialState = {
  token: null,
  user: {},
  authError: null,
  createResponse: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: payload
      };

    case types.USER_DATA:
      return {
        ...state,
        user: payload
      };
    case types.USER_AUTH_ERROR:
      return {
        ...state,
        authError: payload
      };
    case types.USER_CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        createResponse: payload
      };
    default:
      return state;
  }
};
