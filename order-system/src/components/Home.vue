<template>
	<div class="container">
	    <homecarrousel></homecarrousel>
	    <div class="row">
		    <div class="bottom" @click="toMenu">
			   立即订餐
		    </div>
		    <div class="bottom" @click="toShoppingCart">
			   我的订单
		    </div>
	    </div>
	</div>


</template>

<script>
import carrousel from '../components/Swiper.vue';
export default {
  // name: 'Home', 
  components:{
    homecarrousel:carrousel,
  },
  methods:{
  	toMenu(){
        this.$router.push({path:'/Menu'});
  	},
  	toShoppingCart(){
        this.$router.push({path:'/ShoppingCart'});
  	},
  },
  }
 
 </script>
 <style>
 *{
 	padding: 0px;
 	margin: 0px;
 }
 .container{
 	padding: 0px;
 }
 .row{
  width: 100%;
  margin: 0px;
  bottom: 0;
  display: flex;
 }
 .bottom{
  flex: 1;
 	height:9rem;
 	background-color:lightblue; 
 	border: 1px solid white;
 	padding: 0px;
 	line-height: 9rem;
 	font-size: 2rem;
    bottom: 0;
 }

 </style>