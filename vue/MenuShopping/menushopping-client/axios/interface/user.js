import axios from "../api";

export const login = (data) => {
  return axios({
    url: "users/login",
    method: "get",
    params: data,
  });
};

export const register = (data) => {
  return axios({
    url: "users/register",
    method: "get",
    params: data,
  });
};

export const account = (data) => {
  return axios({
    url: "users/account",
    method: "get",
    params: data,
  });
};
