import request from '@/utils/request'

// 获取商品类别信息
export const queryCategorygoods = params => {
  return request.get(`/indexgoods/`)
}

// 获取首页中的新品
export const newGoods = params => {
  return request.get(`/newgoods/`)
}

// 获取轮播图
export const bannerGoods = params => {
  return request.get(`/banners/`)
}

// 获取商品类别信息
export const getCategory = params => {
  if ('id' in params) {
    return request.get(`/categorys/` + params.id + '/')
  } else {
    return request.get(`/categorys/`, params)
  }
}

// 获取热门搜索关键词
export const getHotSearch = params => {
  return request.get(`/hotsearchs/`)
}

// 获取商品列表
export const getGoods = params => {
  return request.get(`/goods/`, { params: params })
}

// 商品详情
export const getGoodsDetail = goodId => {
  return request.get(`/goods/${goodId}` + '/')
}

// 获取购物车商品
export const getShopCarts = params => {
  return request.get(`/shopcarts/`)
}
// 添加商品到购物车
export const addShopCart = params => {
  return request.post(`/shopcarts/`, params)
}
// 更新购物车商品信息
export const updateShopCart = (goodsId, params) => {
  return request.patch(`/shopcarts/` + goodsId + '/', params)
}
// 删除某个商品的购物记录
export const deleteShopCart = goodsId => {
  return request.delete(`/shopcarts/` + goodsId + '/')
}

// 收藏
export const addFav = params => {
  return request.post(`/userfavs/`, params)
}

// 取消收藏
export const delFav = goodsId => {
  return request.delete(`/userfavs/` + goodsId + '/')
}

export const getAllFavs = () => {
  return request.get(`/userfavs/`)
}

// 判断是否收藏
export const getFav = goodsId => {
  return request.get(`/userfavs/` + goodsId + '/')
}

// 获取订单
export const getOrders = () => {
  return request.get(`/orders/`)
}
// 删除订单
export const delOrder = orderId => {
  return request.delete(`/orders/` + orderId + '/')
}
// 添加订单
export const createOrder = params => {
  return request.post(`/orders/`, params)
}
// 获取订单详情
export const getOrderDetail = orderId => {
  return request.get(`/orders/` + orderId + '/')
}

// 获取留言
export const getMessages = () => {
  return request.get(`/messages/`)
}

// 添加留言
export const addMessage = params => {
  return request.post(`/messages/`, params, { headers: { 'Content-Type': 'multipart/form-data' }})
}

// 删除留言
export const delMessages = messageId => {
  return request.delete(`/messages/` + messageId + '/')
}

// 添加收货地址
export const addAddress = params => {
  return request.post(`/address/`, params)
}

// 删除收货地址
export const delAddress = addressId => {
  return request.delete(`/address/` + addressId + '/')
}

// 修改收货地址
export const updateAddress = (addressId, params) => {
  return request.patch(`/address/` + addressId + '/', params)
}

// 获取收货地址
export const getAddress = () => {
  return request.get(`/address/`)
}
