<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header fixed title="我的商城">
      <router-link to="/" slot="left" v-show="isShow">
        <mt-button icon="back" @click="back" class="arr"></mt-button>
      </router-link>
    </mt-header>
    <!-- 中部 -->
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/news">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">资讯</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/mycenter">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">个人中心</span>
      </router-link>
    </nav>
    <!-- 动画 -->
    <transition enter-active-class="animated slideInRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import mui from "../static/mui-master/dist/js/mui.min.js";
export default {
  name: "App",
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    // this.mui.init();
    mui("body").on("click", "a", function() {
      document.location.href = this.href;
    });

    //  this.mui("body").on("tap", "a", function() {
    //     document.location.href = this.href;
    //   });
  },
  components: {},
  methods: {
    show() {
      Toast({
        message: "提示",
        position: "bottom",
        duration: 1000,
        iconClass: "glyphicon glyphicon-ok",
        className: "myToast"
      });
    },
    back() {
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newValue, oldValue) {
      console.log(newValue + "---" + oldValue);
      if (newValue != "/home") {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
* {
  touch-action: none;
}
#app {
  padding-top: 40px;
  padding-bottom: 52px;
  .mint-header-title {
    font-size: 18px;
  }
  a {
    text-decoration: none;
  }
  /* 动画防止上下栏滚动 */
  overflow-x: hidden;

  .arr {
    color: white;
  }
  // 小球样式
  // .mui-badge {
  //   position: absolute;
  //   left: 245px;
  //   top: 2px;
  // }
}
</style>