import axios from '../api'

export const login = (data) => {
  return axios({
    url: 'users/login',
    method: 'post',
    data
  })
}

export const  register = (data) => {
  return axios({
    url: 'users/register',
    method: 'post',
    data
  })
}
