<template>
  <div class="banner-warp">
    <el-carousel height="250px" :interval="4000">
      <el-carousel-item v-for="item in banners" :key="item.goods">
        <router-link :to="'/productDetail/'+item.goods" target="_blank"><el-image :src="item.image" alt="" />
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { bannerGoods } from '@/api/api'

export default {
  // components: {
  //   swiper,
  //   swiperSlide
  // },
  data() {
    return {

      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
      },
      banners: []

    }

  },
  created() {
    this.getBanner()
  },
  methods: {
    getBanner() {
      bannerGoods()
        .then((response) => {
          console.log(response)
          // 跳转到首页页response.body面
          this.banners = response.data
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }

}

</script>

<style>

</style>
