import { createApp } from 'vue'
import router from './router/index'
import store from './store'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(Antd).use(router).use(store).mount('#app')
