<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="max">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        value="1"
        @change="changeCount"
        ref="num"
      >
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from "../../static/mui-master/dist/js/mui.min.js";
export default {
  mounted() {
    //   初始化数字选择框子组件
    mui(".mui-numbox").numbox();
    // this.$nextTick(() => {
    //   this.mui(".mui-numbox").numbox();
    // });
    console.log(this.max);
  },
  methods: {
    changeCount() {
      //每当文本框修改的时候，把数据立即传递给父组件
      this.$emit("getCount", parseInt(this.$refs.num.value));
    }
  },
  props: ["max"],
  watch: {
    max: function(newValue, oldValue) {
      mui(".mui-numbox").numbox().setOption('max',newValue)
    }
  }
};
</script>
<style>
</style>
