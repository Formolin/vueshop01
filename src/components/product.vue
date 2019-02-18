<template>
  <div>
    <div class="list">
      <!-- <router-link :to="'/home/product/productinfo/'+i" class="item" v-for="(item,i) in pro" :key="i" tag="div">
        <img :src="item.img" alt>
        <p class="title">{{item.title}}</p>
        <div class="info">
          <p class="price">
            <span class="now">￥{{item.new}}</span>
            <span class="old">￥{{item.old}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{item.number}}件</span>
          </p>
        </div>
      </router-link>-->
      <!-- 编程式导航 -->
      <div class="item" v-for="(item,i) in pro" :key="i" @click="goInfo(i)">
        <img :src="item.img" alt>
        <p class="title">{{item.title}}</p>
        <div class="info">
          <p class="price">
            <span class="now">￥{{item.new}}</span>
            <span class="old">￥{{item.old}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{item.number}}件</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pro: []
    };
  },
  created() {
    this.getPro();
  },
  methods: {
    getPro() {
      this.$http
        .jsonp("getPro")
        .then(res => {
          console.log(res.body);
          this.pro = res.body.getPro;
        })
        .catch(res => {
          Toast("请求失败");
        });
    },
    goInfo(id) {
      // 使用js形式进行路由导航
      console.log(this);
      // 通过这个this，能看到vm的实例对象，有$router

      // 第一种最简单的
      // this.$router.push('/home/product/productinfo/'+id)

         // 第二种：传递对象
        //   this.$router.push({path:'/home/product/productinfo/'+id});
        // 第三种：命名的路由，
        // this.$router.push({name:'user',params:{id:id}})
        //简写 属性名和值都是id,name属性，在router.js中配置，给路由起个名字
         this.$router.push({name:'proinfo',params:{id}})
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 13px;
  p {
    margin: 0;
    padding: 0;
  }
  .item {
    margin-bottom: 8px;
    width: 48%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 242px;
    p {
      margin-left: 5px;
    }
    img {
      width: 100%;
    }
    .title {
      font-size: 12px;
      font-weight: 600;
      color: black;
    }
  }
  .info {
    background-color: #ddd;
    p {
      margin: 0;
      padding: 5px;
    }
    .price {
      .now {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
      .old {
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
      }
    }
    .sell {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }
  }
}
</style>
