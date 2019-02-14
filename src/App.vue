<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header fixed title="我的商城"></mt-header>
    <!-- 中部 -->
   s
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
    <h1>vue</h1>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
  methods: {
    show() {
      Toast({
        message: "提示",
        position: "bottom",
        duration: 1000,
        iconClass: 'glyphicon glyphicon-ok',
        className: 'myToast'
      });
    }
  }
};
</script>

<style lang="less">
#app {
  padding-top: 30px;
  .mint-header-title {
    font-size: 18px;
  }
}
</style>