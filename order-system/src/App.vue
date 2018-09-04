<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
    <app-header></app-header>
<!--     <div>{{Menu.totalPrice}}</div> -->
    <router-view v-on:settlementBill="updateBill($event)" v-bind:Menu="Menu"></router-view>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'App', 
  components:{
    appHeader:Header,
  },
  data(){
    return{
      Menu:"从Menu传来的对象"           //Menu里面有baskets和totalPrice
    }
  },    
  computed:{
  
    },
  methods:{
  updateBill(Menu){
    this.Menu=Menu;          //this.Menu是父组件的Menu，第二个Menu是子组件传来的值，方法里面的Menu形参
          },
    },
  created(){                          //钩子方法
        let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
        console.log(htmlWidth/10);
        let htmlHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let htmlDom = document.getElementsByTagName('html')[0];
        console.log(htmlHeight/10);
        htmlDom.style.fontSize = 14*htmlHeight/568+"px";
           },
 }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 /* margin-top: 60px;*/
}
</style>
