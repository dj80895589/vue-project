<template>
        <!-- 购物车页面 -->
<div class="shoppingcart">
  <div class="title">
    <strong>购物车</strong>
  </div>
  <div class="orderContent">
    <span>点餐内容</span><a @click="clearBaskets()">[清空]</a>
  </div>
  <div v-if="baskets === undefined">
    购物车没有任何商品！
  </div>
  <div class="container" v-else v-for="item in baskets" :key="baskets.title">
    <ul>
      <li>  
        <div class="packageMenu row">
          <div class="nameOfFood col-xs-6">
            <li class="package">{{item.title}}</li>
          </div>
          <div class="price col-xs-3">
            <li class="package">{{item.price}}</li>
          </div>
          <div class="calQuantity col-xs-3">
            <li>
              <button class="package add"  @click="reduceToBasket(item)">-</button>
              <span class="package">{{item.quantity}}</span>
              <button class="package reduce" @click="addToBasket(item)">+</button>
            </li> 
          </div>
        </div>
      </li>
      <li>  
        <div class="singleMenu row" v-for="option in item.options"> 
         <!-- 对象内的对象数组，二次遍历 -->
          <div class="nameOfFood col-xs-6">
            <li class="single">{{option.name}}</li>
          </div>
          <div class="price col-xs-3">
            
          </div>
          <div class="calQuantity col-xs-3">
            <li class="single" v-if="typeof(option.quantity) === 'number'">{{option.quantity*item.quantity}}</li>
            <li class="single" v-else></li>

          </div>
        </div>
      </li>    
    </ul>      
  </div>

  <div class="totalPrice row" v-for="item in Menu">
    <div class="col-xs-8">
      <span>总价:{{totalPrice + " RMB"}}</span>
    </div>
    <div class="submit col-xs-4" @click='test'>
      <a>提交</a>
    </div>
  </div>  
</div>
</template>

<script>
export default {
  props:["Menu"],
  data () {
    return {
     baskets:this.Menu.baskets,
     // totalPrice:this.Menu

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
    test(){
console.log(this.baskets);
console.log(this.Menu);
      },
    reduceToBasket(item){
                let basket = {
                  title:item.title,
                  price:item.price,
                  quantity:item.quantity,
                  options:item.options
        }
          //过滤
          let result = this.baskets.filter((basket) =>{
            return (basket.title === item.title && basket.price === item.price)
          })
                    if(result != null && result.length > 0 && result[0].quantity>0){
                      result[0].quantity--
                    }
      },
      addToBasket(item){
                let basket = {
                  title:item.title,
                  price:item.price,
                  quantity:item.quantity,
                  options:item.options
        }
          //过滤
          let result = this.baskets.filter((basket) =>{
            return (basket.title === item.title && basket.price === item.price)
          })
                    if(result != null && result.length > 0){
                      result[0].quantity++
                    }else{
                      this.baskets.push(basket)
                    }
      },
      clearBaskets(){
          this.baskets = [];
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0px;
  margin: 0px;
  list-style: none;
}
.title{
  font-size: 2rem;
  height: 3rem;
  background: red;
  line-height: 3rem;
}
.orderContent{
  height: 2rem;
  background: yellow;
}
.orderContent span{
  position: absolute;
  line-height:2rem; 
  left: 1rem;
}
.orderContent a{
  position: absolute;
  right: 1rem;
  border:none;
  margin: 0 auto;
}
.container{
  overflow: scroll;
}
.nameOfFood .package{
  text-align: left;
  margin-left: 3rem;
  font-size: 1.5rem;
}
.nameOfFood .single{
  text-align: left;
  margin-left: 3rem;
  font-size: 1rem;
}
.price .package{
  font-size: 1.5rem;
}
.price .single{
  font-size: 1rem;
}
.add{
  line-height: 1.5rem;
  text-align: center;
  border:none;
  width: 1rem;
  border-radius: 0.3rem;
  background-color: orange;
}
.reduce{
  line-height: 1.5rem;
  text-align: center;
  border:none;
  width: 1rem;
  border-radius: 0.3rem;
  background-color: orange;
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
