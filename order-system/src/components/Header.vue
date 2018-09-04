<template>
	<header>
<div class="nav">
    <ul class="nav-left">
        <li><router-link to='/'>主页</router-link></li>
        <li><router-link to='Menu'>菜单</router-link></li>
        <li><router-link to='ShoppingCart'>购物车</router-link></li>
        <li><router-link to='Admin'>管理</router-link></li>
        <li><router-link to='About'>关于我们</router-link></li>
    </ul>
    <ul class="nav-right">
        <li><router-link to='login'>登录</router-link></li>
        <li><router-link to='Register'>注册</router-link></li>
    </ul>
</div>
	</header>
</template>

<script type="text/javascript">
	export default {
  name: 'Header',
  data () {
    return {

    }
  }
}

</script>

<style scoped>
*{
   list-style: none;
   text-decoration: none;
   margin:0px;
  padding:0px;
 }
.nav{
   margin:auto auto;
   padding-left: 10px;
   background-color: #dff7ff;
   height: 3rem;
   width: 100%;
 }
.nav a{
     line-height: 3rem; 
     color: #7b7575;
     font-size: 1rem;
 }
 .nav a:hover{
     color:red;
 }
 .nav i{
     margin-top:5px;
     display: inline-block;
     height: 30px;
     width: 30px;
     background-image: url(..\assets\logo.png);
     background-size: 100%;
 }
 .nav li{
     margin-right:10px;
 }
 .nav-left li{     
    float: left;
 }
 .nav-right li{
     float: right;
 }
 </style>