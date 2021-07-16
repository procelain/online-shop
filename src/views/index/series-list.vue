<template>
  <div>
    <div class="header">
      <div style="margin-bottom: 20px">
        <span class="new_title"><router-link to="{ name: ''}">人气推荐</router-link></span>
        <p class="small_title recommend"><span @click="clickDialog=false">点击榜</span></p>
        <p class="small_title recommend"><span @click="clickDialog=true">热销总榜</span></p>
        <span class="small_title" style="margin-left: 37%"><router-link to="{ name: 'list'}">更多推荐></router-link></span>
      </div>
      <div v-if="!clickDialog" class="click_rankings">
        <el-card v-for="(item, index) in clickGoodsList" :key="item.id" :body-style="{ padding: 0}" :style="{width: index === 0 ? '370px' : '223px', height: index===0 ? '590px' : '290px'}">
          <router-link :to="'/productDetail/'+item.id" target="_blank">
            <p class="pic">
              <img :src="item.goods_front_image" class="img" :style="{width: index === 0 ? '370px' : '220px', height: index===0 ? '370px' : '220px'}">
            </p>
            <div style="padding-top: 4px; margin: 0 auto 4px; width: 166px;max-height: 90px">
              <router-link :to="'/productDetail/'+item.id" target="_blank">
                <h4 class="name">
                  <a style="color: #333333; font-family: 微软雅黑,serif; font-weight: 900; font-size: 13px" :title="item.name">
                    <span>{{ item.name | ellipsis }}</span>
                  </a>
                </h4>
                <p class="price">
                  <span style="position: relative;top: 1px;font-size: 13px">￥{{ item.shop_price }}</span><br>
                </p>
              </router-link>
            </div>
          </router-link>
        </el-card>
      </div>
      <div v-if="clickDialog" class="hot_rankings">
        <el-card v-for="(item, index) in hotGoodsList" :key="item.id" :body-style="{ padding: 0}" :style="{width: index === 0 ? '370px' : '223px', height: index===0 ? '590px' : '290px'}">
          <router-link :to="'/productDetail/'+item.id" target="_blank">
            <p class="pic">
              <img :src="item.goods_front_image" class="img" :style="{width: index === 0 ? '370px' : '220px', height: index===0 ? '370px' : '220px'}">
            </p>
            <div style="padding-top: 4px; margin: 0 auto 4px; width: 166px;max-height: 90px">
              <router-link :to="'/productDetail/'+item.id" target="_blank">
                <h4 class="name">
                  <a style="color: #333333; font-family: 微软雅黑,serif; font-weight: 900; font-size: 13px" :title="item.name">
                    <span>{{ item.name | ellipsis }}</span>
                  </a>
                </h4>
                <p class="price">
                  <span style="position: relative;top: 1px;font-size: 13px">￥{{ item.shop_price }}</span><br>
                </p>
              </router-link>
            </div>
          </router-link>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import { getGoods, queryCategorygoods } from '@/api/api'

export default {
  filters: {
    ellipsis(value) {
      if (!value) return ''
      if (value.length > 15) {
        return value.slice(0, 15) + '...'
      }
      return value
    }
  },
  data() {
    return {
      list: [],
      hotGoodsList: [],
      clickGoodsList: [],
      clickDialog: false
    }
  },
  created() {
    this.getList()
    this.getClickGoods()
    this.getHotGoods()
  },
  methods: {
    getList() {
      queryCategorygoods()
        .then((response) => {
          // 跳转到首页页response.body面
          console.log('response', response.data)
          this.list = response.data
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    getClickGoods() {
      getGoods({
        'top_click_num': 2
      })
        .then((response) => {
          this.clickGoodsList = response.data.results
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    getHotGoods() {
      getGoods({
        'is_hot': 'true'
      })
        .then((response) => {
          this.hotGoodsList = response.data.results
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}

</script>
<style lang="scss" scoped>
.header {
  height: 720px;
  padding-top: 60px;
  background-color: #f4f0ea;
}
.new_title {
  font-size: 28px;
  font-weight: 700;
  font-family: 微软雅黑,serif;
  margin-right: 20px;
  line-height: 1;
  float: left;
  margin-left: 15%;
  :hover {
    color: #CC9756;
  }
}

.small_title {
  color: #333333;
  padding-top: 13px;
  display: inline-block;
  line-height: 1;
  font-size: 14px;
  font-family: 微软雅黑,serif;
  :hover {
    color: #CC9756;
  }
}
.recommend {
  margin-left: 50px;
}

// 解决页面随窗口缩小滑动，在父父级标签不添加height在父级添加宽度
.click_rankings {
  width: 1300px;
  height: 600px;
  margin: 0 auto;
  padding-left: 98px;
  padding-right: 50px;
}
.hot_rankings {
  width: 1300px;
  height: 600px;
  margin: 0 auto;
  padding-left: 98px;
  padding-right: 50px;
}

::v-deep .el-card {
  border: none;
  border-radius: 0;
  margin-left: 5px;
  margin-bottom: 0;
  float: left;
  margin-top: 10px;
  padding-bottom: 0;
  width: 223px;
  height: 280px;
  :hover {
    background-color: #f4f0ea;
  }
}
.name {
  width: 166px;
  margin: 0 auto 4px;
  height: 40px;
  line-height: 20px;
  text-align:center;
  display: -webkit-box;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.price {
  font-size: 13px;
  line-height: 13px;
  color: #d4282d;
  padding: 1px 0 9px;
  margin: 0;
  text-align: center;
}

// 将商品页hover区域填满
::v-deep .el-card {
  .el-card__body {
    height: 100%;
  }
}

.img {
  display: inline;
}
</style>
