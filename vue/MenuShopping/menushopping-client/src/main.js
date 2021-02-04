import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible/flexible";
import {Toast,Icon,Button,Form,Field, Search,Swipe, SwipeItem,
  ActionBar, ActionBarIcon, ActionBarButton,Checkbox, CheckboxGroup,Stepper  } from 'vant'
import 'vant/lib/index.css'

createApp(App).use(Icon).use(Toast).use(Button).use(Form).use(Field).use(Search).use(Swipe).use(SwipeItem)
.use(ActionBar).use(ActionBarButton).use(ActionBarIcon).use(Checkbox).use(CheckboxGroup).use(Stepper)
.use(store).use(router).mount('#app')