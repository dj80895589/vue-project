// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import index from './router/router'
import VueRouter from 'vue-router'
import {routes} from './router/router'
import axios from 'axios'
import $ from 'jquery'
import bootstrap from 'bootstrap'
import VueAwesomeSwiper from 'vue-awesome-swiper'


import 'swiper/dist/css/swiper.css'
// import './assets/js/bootstrap.min'
import'./bootstrap-3.3.7-dist/js/bootstrap.min.js'

import'./bootstrap-3.3.7-dist/css/bootstrap.min.css'

import { alert } from 'vue-strap'


Vue.config.productionTip = false
Vue.use(VueRouter)   //使用路由插件
Vue.use(VueAwesomeSwiper/* { default global options } */)
Vue.component('alert', alert)

axios.defaults.baseURL = 'http://192.168.0.104:5000/api';   //设置默认路径，之后就只需要填写要请求的json文件就可以了

const router = new VueRouter({
	routes,
	mode:'history'
})
// 全局守卫，导航首位
// router.beforeEach((to,from,next) =>{
// 	if(to.path =='/login' || to.path =='/Register'){
// 		next();
// 	}else{
// 		alert("还没有登录，请先登录！");
// 		next('/login');
// 	}
// })


// 全局后置钩子（更多使用全局守卫）
// router.afterEach((to,from) =>{
// 	alert("after each");  
// 	//点击组件不需要next()函数也会进入组件并弹出消息
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
