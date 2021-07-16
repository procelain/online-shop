<template>
  <div>
    <div style="margin-bottom: 20px">
      <span class="new_title"><router-link to="{ name: ''}">新品首发</router-link></span>
      <span class="small_title">为你寻觅世间好物</span>
      <span class="small_title" style="margin-left: 45%"><router-link to="{ name: 'list'}">更多新品></router-link></span>
    </div>
    <div style="margin-top: 10px">
      <el-carousel v-if="oldprop" :interval="5000" arrow="always" height="375px">
        <el-carousel-item v-for="item in Object.keys(newopro)" :key="item">
          <el-card v-for="i in newopro[item]" :key="i.id" class="card_base" :body-style="{ padding: '0px' }">
            <router-link :to="'/productDetail/'+ i.id" target="_blank"><a :title="i.name">
              <img :src="i.goods_front_image" class="zom" :alt="i.name">
            </a></router-link>
            <!--hover图片切换-->
            <div style="padding-top: 4px; margin: 0 auto 4px; width: 166px;max-height: 90px">
              <router-link :to="'/productDetail/'+ i.id" target="_blank">
                <h4 class="name">
                  <a style="color: #333333; font-family: 微软雅黑,serif; font-weight: 900; font-size: 13px">
                    <span>{{ i.name }}</span>
                  </a>
                </h4>
                <p class="price">
                  <span style="position: relative;top: 1px;font-size: 13px">￥{{ i.shop_price }}</span><br>
                </p>
              </router-link>
            </div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>
<script>
import { getGoods } from '@/api/api'
import service from '@/utils/request'
export default {
  data() {
    return {
      newopro: {},
      oldprop: false
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 上下两个方法都可以
    async getData() {
      const res = await service.get(`/goods/`, { params: { 'is_new': 'true' }})
      if (res.status !== 200) {
        return this.$message.info('新品获取失败')
      }
      console.log('res', res.data.results)
      const tempData = res.data.results
      if (tempData.length !== 0) {
        for (let i = 1; i <= Math.ceil(tempData.length / 4); i++) {
          this.newopro['item' + i] = []
        }
        tempData.forEach((item, index) => {
          const index_value = 'item' + Math.ceil((index + 1) / 4)
          this.newopro[index_value].push(item)
        })
      }
      this.oldprop = true
    },
    getOpro() {
      getGoods({
        'is_new': 'true'
      })
        .then((response) => {
          const tempData = response.data.results
          if (tempData.length !== 0) {
            for (let i = 1; i <= Math.ceil(tempData.length / 4); i++) {
              this.newopro['item' + i] = []
            }
            tempData.forEach((item, index) => {
              const index_value = 'item' + Math.ceil((index + 1) / 4)
              this.newopro[index_value].push(item)
            })
          }
          this.oldprop = true
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }

}
</script>
<style lang="scss" scoped>
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

.card_base {
  border: none;
  border-radius: 0;
  margin-left: 10px;
  margin-bottom: 0;
  float: left;
  width: 256px;
  height: 364px;
  padding-bottom: 0;
  :hover {
    background-color: #f4f0ea;
  }
}

::v-deep .el-card {
  .el-card__body {
    height: 100%;
  }
}
::v-deep .el-carousel {
  margin: 0 auto;
  width: 1300px;
  padding-left: 98px;
  .el-carousel__container {
    .el-carousel__arrow{}
    .el-carousel__arrow--left{
      left: -85px;
      border: none;
      outline: 0;
      padding: 0;
      margin: 0;
      height: 56px;
      width: 56px;
      cursor: pointer;
      -webkit-transition: .3s;
      transition: .3s;
      border-radius: 50%;
      background-color: #E2C199;
      color: #FFF;
      position: absolute;
      top: 50%;
      z-index: 10;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      text-align: center;
      font-size: 16px;
    }
    .el-carousel__arrow--right {
      border: none;
      outline: 0;
      padding: 0;
      margin: 0;
      height: 56px;
      width: 56px;
      cursor: pointer;
      -webkit-transition: .3s;
      transition: .3s;
      border-radius: 50%;
      background-color: #E2C199;
      color: #FFF;
      position: absolute;
      top: 50%;
      z-index: 10;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      text-align: center;
      font-size: 16px;
    }
  }
}

.zom {
  transition: transform 1s;
  background-color: #f4f4f4;
  color: #f4f4f4;
  display: block;
  margin: 0 auto;
  height: 265px;
  width: 265px;
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
</style>
