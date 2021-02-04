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
