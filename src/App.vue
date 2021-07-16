<template>
  <div id="app">
    <!--控制占位   to='/home/user'-->
    <!--activated和deactivated 一个是进来的时候回调，一个是出去的时候回调-->
    <!--beforeRouteLeave(to, from, next) -->
    <!--router-link to="/home" 控制跳转 tag="button" replace 不可以使用左上角返回-->
    <!--router-link :to="'/home/' + userId" 控制跳转 tag="button" replace 不可以使用左上角返回-->
    <!--:to="{path: '/Profile', query: {name:'jjj', age: '15', height: 55}}"-->
    <!--协议：//主机：端口：路径?查询-->
    <!--this.$route.query-->
    <!--this.$router.push('/home')-->
    <!--this.$route.params.userId 谁处于活跃就是谁  path: '/user/:userId '-->
    <!--路由懒加载-->
    <!--全局守卫beforeEach  路由独享守卫beforeEnter-->
    <!--keep-alive也是一个组件，如果直接被包在keep-alive里面，所有路径保匹配到的视图组件都会被缓存-->
    <!--保持不会频繁创建和销毁-->
    <!--    <keep-alive>-->
    <!--      <router-view/>-->
    <!--    </keep-alive>-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>
