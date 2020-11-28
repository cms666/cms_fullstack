import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.mixin({
  beforeUpdate () {
    console.log('改变11')
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
