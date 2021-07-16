import { getShopCarts } from '@/api/api'
const getDefaultState = () => {
  return {
    totalPrice: '',
    goods_list: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_SHOP_CART_PRICE: (state, totalPrice) => {
    state.totalPrice = totalPrice
  },
  SET_SHOP_CART_GOODS: (state, goods_list) => {
    state.goods_list = goods_list
  }
}

// 异步操作才会引用action
const actions = {
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getShopCarts().then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }
        commit('SET_SHOP_CART_GOODS', data)
        let totalPrice = 0
        data.forEach(item => {
          totalPrice += item.goods.shop_price * item.nums
        })
        commit('SET_SHOP_CART_PRICE', totalPrice)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

