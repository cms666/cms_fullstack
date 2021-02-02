import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible/flexible";
import {Toast,Icon,Button,Form,Field} from 'vant'
import 'vant/lib/index.css'

createApp(App).use(Icon).use(Toast).use(Button).use(Form).use(Field)
.use(store).use(router).mount('#app')
