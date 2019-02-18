<template>
  <div class="proinfo">
    <!-- 小球动画 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ball" ref="ball"></div>
    </transition>
    <!-- 商品轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 轮播图 -->
          <mt-swipe :auto="2000">
            <mt-swipe-item>
              <img src="../../static/images/b1.jpg" alt>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../../static/images/b2.jpg" alt>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../../static/images/b3.jpg" alt>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">商品名称：{{proPrice.name}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{proPrice.price}}</del>&nbsp;&nbsp;&nbsp;销售价：
            <span class="nowprice">￥{{proPrice.nowPrice}}</span>
          </p>
          <p style="display:inline-block">购买数量：</p>
          <numberbox style="display:inline-block" @getCount="getNumberboxCount" :max="proParamInfo.repertory"></numberbox>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
            <!-- 通过分析 ：按钮属于当前页面，数字属于子组件 numberbox 
                涉及父子组件嵌套，无法直接获取选中商品数量的数据
            -->
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{proParamInfo.number}}</p>
          <p>库存情况：{{proParamInfo.repertory}}</p>
          <p>上架时间：{{proParamInfo.time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <br>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
// 导入组件
import numberbox from "./numberbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      ball: false, //控制小球隐藏
      numberCount: 1, //保存用户选中商品的数量，默认为1
      proParamInfo: [],
      proPrice:[]//价格
    };
  },
  methods: {
    goDesc(id) {
      this.$router.push({ name: "desc", params: { id } });
    },
    goComment(id) {
      this.$router.push({ name: "proComment", params: { id } });
    },
    addToCart() {
      // 添加购物车动画
      this.ball = !this.ball;
      // 假设对象,把他保存到store的car中
      var carList = {
        id:this.id,
        count:this.numberCount,
        price:this.proPrice.nowPrice,
        selected:true,//是否选中
        name:this.proPrice.name
      }
      //保存数据到store
      this.$store.commit('addToCar',carList)

     
    },
    // 小球动画
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;

      // 获取小球在页面中的位置，小球属于当前组件，可以用refs获取
      var ballPosition = this.$refs.ball.getBoundingClientRect();
      console.log(ballPosition.left + "----" + ballPosition.top);
      //   获取底部徽标的位置，徽标不是组件属于app.vue，在app.vue的徽标加个id  = badge
      var badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      console.log(badgePosition.left + "----" + badgePosition.top);
      var x = badgePosition.left - ballPosition.left;
      var y = badgePosition.top - ballPosition.top;
      console.log(x + "----" + y);
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.transition = "all 0.4s cubic-bezier(.4,-0.3,1,.68) ";
      done();
    },
    afterEnter(el) {
      this.ball = !this.ball;
    },
    getNumberboxCount(count) {
      this.numberCount = count; //当子组件把选中的数量传递给父组件的时候，把选中的值保存到data上
      console.log("父组件拿到子组件的数据=" + this.numberCount);
    },
    getProParamInfo() {
      this.$http
        .jsonp("getProParamInfo/:id")
        .then(res => {
          console.log(res.body);
          this.proParamInfo = res.body.proParamInfo;
        })
        .catch(res => {
          console.log(失败);
        });
    },
    getProPrice(){
      this.$http
        .jsonp("getProPrice/:id")
        .then(res => {
          console.log(res.body);
          this.proPrice = res.body.proPrice;
        })
        .catch(res => {
          console.log(失败);
        });
    }
  },
  components: {
    numberbox
  },
  created(){
      this.getProParamInfo(),
      this.getProPrice()
  }
};
</script>
<style lang="less" scoped>
// *{ touch-action: none; }
.proinfo {
  background-color: #eee;
  overflow: hidden; //解决盒子塌陷
  .mui-card-content-inner {
    padding: 0;
    .mint-swipe {
      height: 200px;
    }
    img {
      width: 100%;
      height: 200px;
    }
  }
  //   商品购买区域样式
  .nowprice {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  //   商品参数  br不好使  因为父类使用了flex布局 干掉他就行
  .mui-card-footer {
    display: block;
  }
  .mui-card {
    padding: 2px;

    p {
      padding-left: 5px;
      margin: 13px;
    }
  }

  // 小球动画
  .ball {
    width: 17px;
    height: 19px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 1000;
    left: 168px;
    top: 374px;
    //   transform: translate(69px, 245px);
  }
}
</style>
