const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  totalPrice: state => state.shop_cart.totalPrice,
  goods_list: state => state.shop_cart.goods_list
}
// 类似于计算属性，
export default getters
