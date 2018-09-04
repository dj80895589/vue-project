<template>
	<!-- 点餐页面 -->
	<div class="container">	
        <div class="row">
     	    <div class="leftcol">
                <ul>
                	<li class="typeoffood"><a><img class="tffpic" src="../../build/TIM截图20180826122505.png"></img><span>活动&新品</span></a></li>
                	<li class="typeoffood"><a><img class="tffpic" src="../../build/TIM截图20180826122505.png"></img><span>套餐</span></a></li>
                	<li class="typeoffood"><a><img class="tffpic" src="../../build/TIM截图20180826122505.png"></img><span>汉堡</span></a></li>
                	<li class="typeoffood"><a><img class="tffpic" src="../../build/TIM截图20180826122505.png"></img><span>小食</span></a></li>
                	<li class="typeoffood"><a><img class="tffpic" src="../../build/TIM截图20180826122505.png"></img><span>甜品</span></a></li>
                	<li class="typeoffood"><a><img class="tffpic" src="../../build/TIM截图20180826122505.png"></img><span>饮料</span></a></li>
                </ul>
            </div>    
            <div class="rightcol">
     		    <ul>
                	<li class="detailoffood" v-for="item in getMenuItems.data" :key="item.title">
                		<span class="sign">NEW</span>
                		<img class="dofpic" :src="item.pic"></img>
                		<strong class="title">{{item.title}}</strong>
                		<span class="price">{{item.price}}</span>
                		<button @click="reduceToBasket(item)" v-if='item.quantity>0' class="reduce btn"> - </button>
                		<span class="quantity" v-if='item.quantity>0'>{{item.quantity}}</span>
                		<button @click="addToBasket(item)" class="add btn"> + </button>
                	</li>
                </ul>
            </div>     
        </div>
        <div class="footer row">
        	<div class="totalPrice"><span>总价:{{totalPrice + "RMB"}}</span></div>
        	<div class="settlement"><a @click="settlement">结算</a></div>
        </div>
    </div>  
</template>
<script>
import axios from 'axios';
	export default{
		data(){
			return{
				Menu:{
					baskets:this.baskets,
					totalPrice:this.totalPrice
				},
				baskets:[],
                getMenuItems:[],
				// getMenuItems:{
				// 	1: {
				// 		'pic':require('../../build/微信截图_20180814223624.png'),
    //                     'title': '活动新品1',
    //                     'price': 38,
    //                     'quantity':0,
    //                     'options':[{'name':"汉堡",'quantity':'1'},
    //                                {'name':"鸡腿",'quantity':'1'},
    //                                {'name':"可乐",'quantity':'1'}]
    //                    },
    //                 2: {
    //                 	'pic':require('../../build/微信截图_20180814223624.png'),
    //                     'title': '活动新品2',
    //                     'price': 47,
    //                     'quantity':0,
    //                     'options':[{'name':"汉堡",'quantity':'1'},
    //                                {'name':"鸡腿",'quantity':'2'},
    //                                {'name':"可乐",'quantity':'1'}]
    //                 },
    //                 3: {
    //                 	'pic':require('../../build/微信截图_20180814223624.png'),
    //                     'title': '活动新品3',
    //                     'price': 46,
    //                     'quantity':0,
    //                     'options':[{'name':"汉堡",'quantity':'1'},
    //                                {'name':"鸡腿",'quantity':'1'},
    //                                {'name':"可乐",'quantity':'1'}]
    //                 },
    //                 4: {
    //                 	'pic':require('../../build/微信截图_20180814223624.png'),
    //                     'title': '活动新品4',
    //                     'price': 46,
    //                     'quantity':0,
    //                     'options':[{'name':"汉堡",'quantity':'1'},
    //                                {'name':"鸡腿",'quantity':'1'},
    //                                {'name':"可乐",'quantity':'1'}]
    //                 },
    //                 5: {
    //                 	'pic':require('../../build/微信截图_20180814223624.png'),
    //                     'title': '活动新品5',
    //                     'price': 46,
    //                     'quantity':0,
    //                     'options':[{'name':"汉堡",'quantity':'1'},
    //                                {'name':"鸡腿",'quantity':'1'},
    //                                {'name':"可乐",'quantity':'1'}]
    //                 },
    //                 6: {
    //                 	'pic':require('../../build/微信截图_20180814223624.png'),
    //                     'title': '活动新品6',
    //                     'price': 46,
    //                     'quantity':0,
    //                 },
    //                 7: {
    //                 	'pic':require('../../build/微信截图_20180814223624.png'),
    //                     'title': '活动新品7',
    //                     'price': 46,
    //                     'quantity':0,
    //                 },
    //                 8: {
    //                 	'pic':require('../../build/微信截图_20180814223624.png'),
    //                     'title': '活动新品8',
    //                     'price': 46,
    //                     'quantity':0,
    //                 },
    //                 9: {
    //                 	'pic':require('../../build/微信截图_20180814223624.png'),
    //                     'title': '活动新品9',
    //                     'price': 46,
    //                     'quantity':0,
    //                 },
    //                 10: {
    //                 	'pic':require('../../build/微信截图_20180814223624.png'),
    //                     'title': '活动新品10',
    //                     'price': 46,
    //                     'quantity':0,
    //                 },
    //                 11: {
    //                 	'pic':require('../../build/微信截图_20180814223624.png'),
    //                     'title': '活动新品11',
    //                     'price': 46,
    //                     'quantity':0,
    //                 },
				// }
			}
		},
		computed:{
            totalPrice(){
            	let totalPrice = 0;
            	for(let index in this.baskets){
            		let individualItem = this.baskets[index];
            		totalPrice += individualItem.quantity * individualItem.price;
            	}
            	return totalPrice;
            }
		},
		methods:{
			settlement(item){
				this.Menu.baskets = this.baskets;
				this.Menu.totalPrice = this.totalPrice;
                this.$emit("settlementBill",this.Menu);                             //子向父事件传值   第一个是事件名，后面的是传的内容
				this.$router.push({path:'/ShoppingCart'});
			},
			reduceToBasket(item){
                if(item.quantity>0){
                	item.quantity--;
                }
                let basket = {
					title:item.title,
                	price:item.price,
                	quantity:item.quantity,
                	options:item.options
				}
				if(this.baskets.length > 0){
					//过滤
					let result = this.baskets.filter((basket) =>{
						return (basket.title === item.title && basket.price === item.price)
					})
                    if(result != null && result.length > 0){
                    	result[0].quantity--
                    }else{
                    	this.baskets.push(basket)
                    }
				}else{
					this.baskets.push(basket)
				}
			},
			addToBasket(item){
                item.quantity++;
                let basket = {
					title:item.title,
                	price:item.price,
                	quantity:item.quantity,
                	options:item.options
				}
				if(this.baskets.length > 0){
					//过滤
					let result = this.baskets.filter((basket) =>{
						return (basket.title === item.title && basket.price === item.price)
					})
                    if(result != null && result.length > 0){
                    	result[0].quantity++
                    }else{
                    	this.baskets.push(basket)
                    }
				}else{
					this.baskets.push(basket)
				}

            },
		},
        created(){                          //钩子方法
            axios.get('/foodlist/all')
               .then(res => {
                   return res
                })
               .then(res => {
                // console.log(res);
                // let menuArray = [];
                //    menuArray = res;

                this.getMenuItems = res;
                console.log(this.getMenuItems);
               })
        },
	}
</script>
<style scoped>
*{
	list-style: none;
	margin: 0px;
	padding: 0px;

}
a{
	text-decoration:none;
}
.row{
    display: flex;
}
.leftcol{
	background: yellow;
	height: 34rem;
    flex:1;
}
.tffpic{
	height: 3rem;
	width:3rem;
display: block;
margin: 0.3rem auto 0;
}
.rightcol{
    flex:3;
	background: red;
	/*overflow:scroll;*/
    height: 34rem;
} 
.typeoffood{
	height: 5rem;
}

.detailoffood{
	position: relative;
	background: white;
	height: 6rem;
	margin: 0.67rem 0.67rem;
}
.sign{
	position: absolute;
	background: red;
	border-radius: 1rem;
	font-size: 12px;
	width: 2.5rem;
	height: 1rem;
	line-height: 1rem;
	color: white;
	left: 0.5rem;
	top: 0.6rem;
	z-index: 1;
}
.dofpic{
	position: absolute;
	width:6rem;
	height: 6rem;
	left: 0px;
}
.title{
	position: absolute;
	font-size: 1.5rem;
	top: 0.5rem;
	left: 6rem;
	width: 13rem;
	text-align: left;
	color: black;
}
.price{
	position: absolute;
	top: 3.3rem;
	left: 7rem;
	font-size: 2rem;
	color: orange;
}
.reduce{
	position: absolute;
	top: 3.5rem;
	right: 4.5rem;
	width:2rem;
	background: orange;
}
.quantity{
	position: absolute;
	top: 3.5rem;
	right: 2.5rem;
	width:2rem;
}
.add{
	position: absolute;
	top: 3.5rem;
	right: 0.5rem;
	width:2rem;
	background: orange;
}
.footer{
    display: flex;
    position: absolute;
	bottom: 0;
	background: lightblue;
	height: 3.7rem;
    width: 100%;
}
.totalPrice{
	line-height: 3.7rem;
    flex: 2;
}
.settlement{
	border-left: 1px solid white;
	line-height: 3.7rem;
    flex:1;
}
</style>