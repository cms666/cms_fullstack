import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/style/base.less'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible/flexible'

createApp(App).use(store).use(router).use(Vant).mount('#app')