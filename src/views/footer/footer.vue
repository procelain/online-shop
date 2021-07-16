<template>
  <div id="footer">
    <div class="foot">
      <div class="ft1">
        <div class="ft_row">
          <div class="item">
            <div class="serviceTel">
              <h4 class="service_head">客户服务</h4>
              <a class="kefu_btn">
                <i id="icon_kefu" class="el-icon-service">
                  <p class="icon_content">在线客服</p>
                </i>
              </a>
              <a class="kefu_btn">
                <i id="icon_user" class="el-icon-chat-dot-round">
                  <p class="icon_content">用户反馈</p>
                </i>
              </a>
            </div>
          </div>
          <el-divider direction="vertical" />
          <div class="item">
            <div class="serviceTel">
              <h4 class="service_head">本站核心</h4>
              <p class="web_desc">学习django以及前端vue,通过一个完整的项目，为正在学习django以及打算学习django的小伙伴们提供一套django+vue+django rest
                framework解决方案，项目主要模仿网易严选，希望小伙伴们多多支持！！！</p>
            </div>
          </div>
          <el-divider direction="vertical" />
          <div class="item">
            <div class="serviceTel">
              <h4 class="service_head">扫码下载严选APP</h4>
              <img style="width: 100px; height: 100px" src="../../static/images/wangyi.jpg">
              <p style="text-align: center; color: red; margin-top: 3px">为网易严选打一波广告</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ft2">
        <div class="ft_row">
          <div class="item_ft2">
            <p class="bottom_content">电商平台</p>
          </div>
          <div class="item_ft2">
            <p class="bottom_content">30天无忧退换货</p>
          </div>
          <div class="item_ft2">
            <p class="bottom_content">满99免邮费</p>
          </div>
          <div class="item_ft2">
            <p class="bottom_content">品质保证</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped lang="scss">
#footer {
  height: 350px;
}

.foot {
  clear: both;
  padding-top: 0;
  line-height: 1.5;
  font-family: 微软雅黑, serif;
  color: #333;
  font-size: 12px;
}

.ft1 {
  padding-top: 60px;
  padding-bottom: 34px;
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
}

.ft_row {
  width: 1090px;
  margin: 0 auto;
  position: relative;
}

.item {
  width: 30%;
  height: 204px;
  float: left;
}

.item_ft2 {
  width: 25%;
  height: 100px;
  float: left;
}

.serviceTel {
  text-align: center;
  line-height: 1;
}

.service_head {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 28px;
  line-height: 1;
}

.kefu_btn {
  width: 40px;
  height: 100px;
  font-size: 14px;
  background-color: #fff;
  padding-top: 25px;
  text-align: center;
  color: #333;
  cursor: pointer;

  :hover {
    color: #CC9756;
  }
}

#icon_kefu {
  font-size: 24px;
  width: 80px;
  height: 100px;
  border: 1px solid #E8E8E8;
  padding-top: 15px;
  font-weight: 900;
}

.icon_content {
  font-size: 14px;
  color: #333333;
  font-family: 微软雅黑, serif;
  margin-top: 10px;
  font-weight: 300
}

#icon_user {
  font-size: 24px;
  width: 80px;
  height: 100px;
  border: 1px solid #E8E8E8;
  padding-top: 15px;
  margin-left: 20px;
  font-weight: 900;
}

::v-deep .el-divider--vertical {
  display: inline-block;
  width: 1px;
  height: 14em;
  margin-left: 10px;
  float: left;
  vertical-align: middle;
  position: relative;
}

.web_desc {
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 22px;
}

.ft2 {
  height: 150px;
  margin-top: 150px;
  padding-top: 37px;
  background-color: #414141;
}

.bottom_content {
  float: left;
  font-size: 18px;
  color: #ffffff;
  font-weight: 999;
  font-family: 微软雅黑,serif;
  margin-left: 80px;
}
</style>
