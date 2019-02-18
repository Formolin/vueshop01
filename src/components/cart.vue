<template>
  <div class="cart">
    <div class="carlist">
      <!-- 购物车数据 -->
      <div class="mui-card" v-for="(item,i) in $store.state.car" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="item.selected" @change="changedSelected(item.id,item.selected)"></mt-switch>

            <img src="../../static/images/001.svg" alt>
            <div class="info">
              <h1 style="margin-left:10px">{{item.name}}</h1>
              <p class="box">
                <span class="price">￥{{$store.getters.getPriceSingle}}</span>
                <numberbox-cart :num="item.count" :id="item.id" :price="item.price"></numberbox-cart>
                <!-- <a href="#">删除{{item.id}}</a> -->
                <a href="#" @click.prevent="del(item.id)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner pay">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>已勾选商品 <span>{{$store.getters.getCartCountAndAmount.count}}</span> 件，总价 <span>￥{{$store.getters.getCartCountAndAmount.amount}}</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numberboxCart from "./numberboxCart";
export default {
  data() {
    return {
      carList: []
    };
  },
  methods: {
    getCarList() {
      var newCarList = [];
      this.$store.state.car.forEach(item => newCarList.push(item.id));
      // 发请求前判断购物车是否为空，没有商品直接返回，不需要请求接口,否则报错
      if (newCarList <= 0) {
        return;
      }
      // 获取购物车商品列表
      this.$http.jsonp("cart/getCarList?ids=" + newCarList).then(res => {
        console.log(res.body);
        this.carList = res.body.carimg;
      });
    },
    del(id) {
      // 删除购物车
      this.$store.commit("removeFromCart", id);
    },
    changedSelected(id,val){
        console.log(id+'----'+val)
        this.$store.commit('updateCartSelectedChange',{id,selected:val})
    }
  },
  components: {
    numberboxCart
  },
  created() {
    this.getCarList();
  }
};
</script>

<style lang="less" scoped>
.cart {
  background-color: #eee;
  overflow: hidden;
  .carlist {
    img {
      width: 60px;
      height: 60px;
    }
    h1 {
      font-size: 14px;
    }
    .info {
      .price {
        color: red;
        font-weight: bold;
        width: 50px;
      }
    }
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    .box {
      display: flex;
      span {
        margin-right: 10px;
      }
      a {
        margin-left: 5px;
      }
    }
  }
  .pay {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mint-button-text{
          line-height: 10px;
      }
      .left {
          span {
              color:red;
              font-weight: bold;
              font-size: 16px;
          }
      }
  }
}
</style>