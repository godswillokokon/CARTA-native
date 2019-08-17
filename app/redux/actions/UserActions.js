import Axios from "@utils/Axios";
// import * as types from "../types";
import Session from "../../utils/Session";
import SupportHeader from "../../utils/SupportHeader";

export const login = data => async dispatch => {
  try {
    const response = await Axios.post(`/login`, { ...data });
    console.log(response.data.success.token);
    const saveToken = Session.saveToken(response.data.success.token);
    // Session.saveUser(response.data.user);
    // await StaticStoreUserData(response.data.user)(dispatch);
    if (saveToken) {
      await dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: response.data.success.token
      });
    }
  } catch (e) {
    dispatch({
      type: "USER_AUTH_ERROR",
      payload: e.response
    });
  }
};

export const StaticStoreUserData = data => async dispatch => {
  await dispatch({
    type: "USER_DATA",
    payload: { ...data }
  });
};

export const resetFailureAction = () => dispatch => {
  dispatch({
    type: "USER_AUTH_ERROR",
    payload: null
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: "USER_LOGIN_SUCCESS",
    payload: null
  });
};

export const createAccount = data => async dispatch => {
  try {
    const response = await Axios.post(`/register`, { ...data });
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: response.data
    });
    login(data)(dispatch);
  } catch (e) {
    dispatch({
      type: "USER_AUTH_ERROR",
      payload: e.response.data.message
    });
  }
};

export const refreshAuthentication = token => async dispatch => {
  try {
    await dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: token
    });
    if (!token) {
      await Session.logout();
      await Axios.get("/auth/logout");
      await dispatch({
        type: "USER_DATA",
        payload: null
      });
    }
  } catch (e) {
    return 401;
  }
};

export const GetUserData = token => async dispatch => {
  try {
    const response = await Axios.get("/profile", await SupportHeader());
    // Session.saveUser(response.data);
    dispatch({
      type: "USER_DATA",
      payload: { ...response.data.success }
    });
    return response.data.success;
  } catch (e) {
    // toast.error("Error Notification !");
    Session.logout();
    return 401;
  }
};
