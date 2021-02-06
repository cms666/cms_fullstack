import { createStore } from 'vuex'
import {getCart} from '../../axios/interface/material'
export default createStore({
  state: {
    cartCount:0,
    cartselected:[]
  },
  mutations: {
    addCart(state,payload){
      state.cartCount = payload.count
    },
    selectCart(state,payload){
      state.cartselected = payload
    }
  },
  actions: {
    async updateCart(ctx){
      const {data} = await getCart() 
       console.log(data);
      ctx.commit('addCart',{
        count:data.length || 0
      })
    }
  },
  modules: {
  }
})
