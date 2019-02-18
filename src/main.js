// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 导入mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 导入Bootstrap
import '../static/bootstrap/css/bootstrap.min.css'
// 导入mui
import '../static/mui-master/dist/css/mui.min.css'
import '../static/mui-master/examples/hello-mui/css/icons-extra.css'
// import mui from "../static/mui-master/dist/js/mui.min.js";
// Vue.prototype.mui = mui
// import './assets/app-mui'
// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入自定义路由
import router from './router'
// 导入animate动画
import '../static/css/animate.css'

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000/';
Vue.http.options.emulateJSON = true;

// vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 获取本地数据
var car = JSON.parse(localStorage.getItem('car')||'[]')
//传到下面的car中，原来的 car:[]  现在car:car
var store = new Vuex.Store({
  state:{
    count:0,//vuex案列中的count
    car:car,//将购物车商品的数据用一个数组存储起来,在car中存储商品的对象，暂时设计成这个样子
    //{id:1,count:12,price:233,selected:true（是否选中）}
  },
  mutations:{
    increment(state){//vuex案列中的增加
      state.count++
    },
    less(state){//vuex案列中的减少
      state.count--;
    },
    addToCar(state,carList){
      
      //点击购物车，把商品信息保存到store中的car上
      // - 如果购物车中，之前就已经有这个对应的商品了，那么只需要更新数量
      var flag = false//假设在购物车中没有找到对应的商品，就push
      state.car.some(item=>{
        console.log(item.id+'++++'+carList.id)
        if(item.id == carList.id){
          console.log(item.count+'======'+carList.count)
          item.count += parseInt(carList.count)
          console.log("item.count="+item.count)
          flag = true;
          return true
        }
      })

// - 没有，则直接把商品数据push到car中
      if(flag == false){
        console.log(carList)
        state.car.push(carList)
      }

       // 本地存储
       localStorage.setItem('car',JSON.stringify(state.car))
      //  本地删除
      // localStorage.removeItem('car')
    },
    updateCartInfo(state,carList){
      // 修改购物车中的商品数值
      state.car.some(item=>{
        if(item.id == carList.id){
          item.count = parseInt(carList.count)
        }
      })
     
      // 修改完后 保存到本地
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeFromCart(state,id){
      state.car.some((item,i)=>{
        if(item.id == id){
          state.car.splice(i,1)
          return true;
        }
      })
      // 将删除完毕后的数据 --本地存储
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateCartSelectedChange(state,obj){
      state.car.some(item=>{
        if(item.id == obj.id){
          item.selected = obj.selected
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters:{
    txt:(state)=>{//vuex案列中的txt
      return `当前最新的count的值=${state.count}`
    },
    getAllCount(state){
      var c =0;
      state.car.forEach(item=>{
        c+=item.count
      })
      return c
    },
    getCartCountAndAmount(state){
      var o = {
        count:0,//勾选数量
        amount:0//勾选的总价
      }
      state.car.forEach(item=>{
        if(item.selected){
          o.count +=item.count
          o.amount+=item.price*item.count
        }
      })
      return o
    },
    getPriceSingle(state){
      var p = 0//存储原来的单价
      state.car.forEach(item=>{
        p=item.price*item.count
      })
      return p
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,//挂在路由
  store//挂在vuex
})
