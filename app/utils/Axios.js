import * as axios from "axios";
import AxiosRetry from "axios-retry";
import Session from "./Session";
import { BASE_API } from "../config/base";

const instance = axios.create({
  baseURL: BASE_API,
  headers: {
    "Content-Type": "application/json"
  }
});

AxiosRetry(axios, { retries: 3 });

Session.getData("token").then(tkn => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${tkn}`;
});

axios.interceptors.response.use(
  r => r,
  error => {
    if (error.response.status === 401 || error.response.status === 403) {
      Session.logout();
      return;
    } else {
      return Promise.reject(error);
    }
  }
);

export { instance as default };
