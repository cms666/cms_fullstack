import axios from '../api'
export const detail = (data) =>{
  return axios({
    url: 'material/detail',
    method: 'get',
    params:data
  })
}

export const addCart = (data) =>{
  return axios({
    url: 'material/addCart',
    method: 'post',
    data:data
  })
}

export const getCart = () =>{
  return axios({
    url: 'material/getCart',
    method: 'post',
  })
}

export const updateCart = (data) =>{
  return axios({
    url: 'material/updateCart',
    method: 'get',
    params:data
  })
}

export const deleteCart = (data) =>{
  return axios({
    url: 'material/deleteCart',
    method: 'delete',
    params:data
  })
}
//菜的详情数据
export const getFoodDetail = (data) =>{
  return axios({
    url: 'material/getFoodDetail',
    method: 'get',
    params:data
  })
}

//把菜的食材加入购物车
export const addFoodCart = (data) =>{
  return axios({
    url: 'material/addFoodCart',
    method: 'post',
    data:data
  })
}

//把菜的食材加入购物车
export const searchGoods = (data) =>{
  return axios({
    url: 'material/searchGoods',
    method: 'get',
    params:data
  })
}

//获取分类数据
export const getCategoryData = () =>{
  return axios({
    url: 'material/getCategoryData',
    method: 'get',
  })
}

//获取分类Tab数据
export const getTabFoodData = (data) =>{
  return axios({
    url: 'material/getTabFoodData',
    method: 'get',
    params:data
  })
}

//获取搜索关联
export const relevance = (data) =>{
  return axios({
    url: 'material/relevance',
    method: 'get',
    params:data
  })
}