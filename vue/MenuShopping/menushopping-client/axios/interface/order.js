import axios from "../api";

export const createOrder = (data) => {
  return axios({
    url: "order/createOrder",
    method: "post",
    data,
  });
};

export const getOrderDetail = (data) => {
  return axios({
    url: "order/getOrderDetail",
    method: "get",
    params:data,
  });
};






