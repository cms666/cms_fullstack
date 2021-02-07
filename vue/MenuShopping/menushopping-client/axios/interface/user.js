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

export const getAddress = (data) => {
  return axios({
    url: "users/getAddress",
    method: "get",
    params: data,
  });
};

export const getDefaultAddress = () => {
  return axios({
    url: "users/getDefaultAddress",
    method: "get",
  });
};

export const addAddress = (data) => {
  return axios({
    url: "users/addAddress",
    method: "post",
    data:data
  });
};

export const getAllAddress = () => {
  return axios({
    url: "users/getAllAddress",
    method: "get",
  });
};

export const deleteAddress = (id) => {
  return axios({
    url: "users/deleteAddress",
    method: "delete",
    params:id
  });
};




