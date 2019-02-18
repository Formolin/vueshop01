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
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
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
</style>
