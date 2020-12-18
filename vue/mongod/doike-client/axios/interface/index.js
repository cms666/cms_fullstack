import apiLogin from './login'
import apiRegister from './register'
const install = Vue =>{
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign(
          {},
          apiLogin,
          apiRegister
        )
      }
    }
  })
}

export default install