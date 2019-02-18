<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item>
        <img src="../../static/images/banner-066.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../static/images/banner-077.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../static/images/banner-088.jpg" alt>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
   
      <ul class="mui-table-view mui-grid-view mui-grid-9" id="ul">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/product">
              <img src="../../static/images/icon_03.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../static/images/icon_01.png" alt="">
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/vuex">
            <img src="../../static/images/icon_11.png" alt="">
            <div class="mui-media-body">vuex</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../static/images/icon_13.png" alt="">
            <div class="mui-media-body">地址</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../static/images/icon_09.png" alt="">
            <div class="mui-media-body">搜索</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
           <img src="../../static/images/icon_05.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
div {
    // 轮播图样式
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: aqua;
      }
      &:nth-child(2) {
        background-color: red;
      }
      &:nth-child(3) {
        background-color: yellow;
      }
      img {
        width: 100%;
        height: 200px;
      }
    }
  }
    // 九宫格样式

  #ul {
      background-color: white;
       .mui-table-view-cell{
          border: 0;
      }
      img {
          width: 54px;
          height: 54px;
      }
  }
}
</style>