<template>
  <div class="imageshare">
    <!-- 顶部滚动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll fixed">
          <a
            href="#"
            :class="['mui-control-item',item.id==0?'mui-active':'']"
            v-for="item in cates"
            :key="item.id"
            @click="getImagesShare(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- end -->
    <!-- 图片列表区域 -->
    <ul>
      <li v-for="item in imgList" :key="item.id" @click="goImgInfo">
        <img v-lazy="item.img">
        <div class="info">
          <p class="title">{{item.title}}</p>
          <p class="txt">{{item.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import mui from "../../static/mui-master/dist/js/mui.min.js";
export default {
  data() {
    return {
      imgList: [],
      cates: []
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },

  methods: {
    getImagesShare(id) {
      this.$http.jsonp("getImagesShare/:id?id=" + id).then(res => {
        console.log(res.body.imagesShare);
        this.imgList = res.body.imagesShare;
      });
    },
    getCates(id) {
      this.$http.jsonp("getImagesShare/:id").then(res => {
        console.log(res.body.cate);
        this.cates = res.body.cate;
      });
    },
    goImgInfo(){
        this.$router.push('/home/imageshare/imgInfo')
    }
  },
  created() {
    this.getCates();
    this.getImagesShare(0);
  }
};
</script>
<style lang="less" scoped>
.imageshare {
  margin-top: -14px;

  .fixed {
    position: fixed;
    margin-top: 14px;
    background-color: white;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      position: relative;
      margin: 15px 10px;
      background-color: #ccc;
      text-align: center;
      box-shadow: 0 0 9px #999;
      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      img {
        width: 100%;
        height: 350px;
      }
      .info {
        padding: 5px;
        position: absolute;
        bottom: 0;
        text-align: left;
        background: rgba(0, 0, 0, 0.4);
        max-height: 84px;
        width: 100%;

        .title {
          font-size: 16px;
          font-weight: bold;
          color: white;
           // 文本溢出
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box; //作为弹性伸缩盒子模型显示。
          -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
          -webkit-line-clamp: 2; //显示的行
          height: 22px;
        }
        .txt {
          font-size: 12px;
          color: white;
          // 文本溢出
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box; //作为弹性伸缩盒子模型显示。
          -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
          -webkit-line-clamp: 2; //显示的行
        }
      }
    }
  }
  a {
    text-decoration: none;
  }
}
</style>
