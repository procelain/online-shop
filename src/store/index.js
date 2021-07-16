import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters' // 过滤数据
import user from './modules/user'
import shop_cart from './modules/shopcart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    shop_cart
  },
  getters
})

export default store
