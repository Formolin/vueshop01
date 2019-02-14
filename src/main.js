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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
