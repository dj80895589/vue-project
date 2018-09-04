import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCart from '../components/ShoppingCart'
import Home from '../components/Home'
import Admin from '../components/Admin'
import login from '../components/Login'
import Menu from '../components/Menu'
// import Swiper from '../components/Swiper'



import About from '../components/about/About.vue'
import Register from '../components/Register'

// 二级路由
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import History from '../components/about/History'
import OrderingGuide from '../components/about/OrderingGuide'
import User from '../components/about/User'

Vue.use(Router)

export const routes=[
	{path:'/',name:"homeLink",component:Home},
	{path:'/ShoppingCart',name:"ShoppingCart",component:ShoppingCart},
	// 路由独享守卫优先级低于全局守卫
	{path:'/Admin',name:"adminLink",component:Admin,
	// beforeEnter:(to,from,next)=>{
	// 	alert("admin路由独享的守卫");
	// 	next();
	// }
},
	{path:'/login',component:login},
	{path:'/Menu',name:"menuLink",component:Menu},
	{path:'/Register',component:Register},
	{path:'/About',component:About,redirect:"/Delivery",children :[
    	{path:'/Contact',component:Contact},
        {path:'/Delivery',component:Delivery},
        {path:'/History',component:History},
        {path:'/OrderingGuide',component:OrderingGuide},
        {path:'/User',component:User},
	]},
]

// export default new Router({
// 	mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
