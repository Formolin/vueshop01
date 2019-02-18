import VueRouter from 'vue-router'

import home from './components/home.vue'
import news from './components/news.vue'
import cart from './components/cart.vue'
import mycenter from './components/mycenter.vue'
import newsinfo from './components/newsinfo.vue'
import product from './components/product.vue'
import productinfo from './components/productinfo.vue'
import desc from './components/desc.vue'
import proComment from './components/proComment.vue'
import vuextemplate from './components/vuextemplate.vue'
import imageshare from './components/imageshare.vue'
import imgInfo from './components/imgInfo.vue'

var routes = [
    { path: '/', redirect:'/home' },
    { path: '/home', component: home },
    { path: '/news', component: news},
    { path: '/cart', component: cart },
    { path: '/mycenter', component: mycenter },
    { path: '/news/newsinfo/:id', component: newsinfo },
    { path: '/home/product', component: product },
    { path: '/home/product/productinfo/:id', component: productinfo,name:'proinfo' },
    { path: '/home/desc/:id', component: desc,name:'desc' },
    { path: '/home/proComment/:id', component: proComment,name:'proComment' },
    { path: '/home/vuex', component: vuextemplate },
    { path: '/home/imageshare', component: imageshare },
    { path: '/home/imageshare/imgInfo', component: imgInfo },
   
]

var router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
    linkActiveClass:'mui-active'
})

export default router