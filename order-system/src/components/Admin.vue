<template>
<div class="container">
  <div>
    <h4>添加新品种</h4>
  </div>
  <!-- <div class="row"> -->
  	<ul>
  		<li>
  			<div class="title">食品名称:</div>
  			<input class="putin form-control" type="text" v-model="newFood.title"></input>
  		</li>
  		 <li>
  			<div class="title">价格:</div>
  			<input class="putin form-control" type="text" v-model="newFood.price"></input>
  		</li>
      <li>
        <div class="title">图片:</div>
        <input class="putin form-control pic" type="text" v-model="newFood.pic"></input>
        <a class="add">添加</a>
      </li>
  		 <li>
  			<div class="title">套餐内容1:</div>
  			<input class="putin form-control" type="text" v-model="newFood.name1"></input>
  		</li>
      <li>
        <div class="title">内容数量1:</div>
        <input class="putin form-control" type="text" v-model="newFood.quantity1"></input>
      </li>
  		 <li>
  			<div class="title">套餐内容2:</div>
  			<input class="putin form-control" type="text" v-model="newFood.name2"></input>
  		</li>
      <li>
        <div class="title">内容数量2:</div>
        <input class="putin form-control" type="text" v-model="newFood.quantity2"></input>
      </li>
  		 <li>
  			<div class="title">套餐内容3:</div>
  			<input class="putin form-control" type="text" v-model="newFood.name3"></input>
  		</li>
      <li>
        <div class="title">内容数量3:</div>
        <input class="putin form-control" type="text" v-model="newFood.quantity3"></input>
      </li>
  		 <li>
  			<div class="title">套餐内容4:</div>
  			<input class="putin form-control" type="text" v-model="newFood.name4"></input>
  		</li>
      <li>
        <div class="title">内容数量4:</div>
        <input class="putin form-control" type="text" v-model="newFood.quantity4"></input>
      </li>
  		 <li>
  			<div class="title">描述:</div>
  			<textarea class="putin form-control" rows="5"></textarea>
  		</li>
  	</ul>
  <!-- </div>	 -->
  <div class="totalPrice">
    <div class="submit" @click="addNewFood">
      <a>添加新品种</a>
    </div>
  </div> 
</div> 
</template>
<script>
import axios from 'axios';
	export default{
		props:[],
        data(){
            return{
                newFood:{},
            }
        },
        methods:{
        	addNewFood(){
                // console.log(this.newFood);
                const data = {
                	title:this.newFood.title,
                	price:this.newFood.price,
                	pic:this.newFood.pic,
                	options:[
                         {name:this.newFood.name1,quantity:this.newFood.quantity1},
                         {name:this.newFood.name2,quantity:this.newFood.quantity2},
                         {name:this.newFood.name3,quantity:this.newFood.quantity3},
                         {name:this.newFood.name4,quantity:this.newFood.quantity4},
                	]

                };
                axios.post('/foodlist/addfood',data)
                   .then(res => {
                    console.log(res.data);
                        this.$router.push({name:"homeLink"})
                   })
        	},
        }
	}
</script>
<style scoped>
*{
	padding: 0px;
	margin: 0px; 
	list-style: none;
}
/*.row{
	margin: auto 1rem;
  width: 100%;
}*/
h4{
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
}
li{
	height: 2rem;
	margin-bottom: 0.5rem;
  display: flex;
}
.title{
	line-height: 2rem;
	font-weight:bold; 
  flex:1;
}
.form-control{
	height: 2rem;
  flex:2;
}
.pic{
  flex:1.5;
}
.add{
  flex: 0.5;
  line-height: 2rem;
}
.totalPrice{
  position: absolute;
  background: lightblue;
  width: 100%;
  height: 3.3rem;
  bottom:0;
}
.totalPrice span{
  line-height: 3.3rem;
}
.submit{
  line-height: 3.3rem;
  border-left: 1px solid white;
}
</style>