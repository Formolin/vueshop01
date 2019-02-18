<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" style="height:25px"  >
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        :value="num"
        @change="changeCount"
        ref="num"
        readonly
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
      //数量改变了
      console.log(this.$refs.num.value)
      // 每当数量值改变，把最新的数量同步到store中，覆盖之前的值
      this.$store.commit('updateCartInfo',{id:this.id,count:this.$refs.num.value,price:this.price})
    },

  },
  props:['num','id','price'],
};
</script>
<style>
</style>
