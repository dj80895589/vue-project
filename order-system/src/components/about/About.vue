<template>
<div>
    <div class="nav">
        <ul>
           <li><router-link to='History'>历史订单</router-link></li>
           <li><router-link to='Contact'>联系我们</router-link></li>
           <li><router-link to='OrderingGuide'>点餐文档</router-link></li>
           <li><router-link to='Delivery'>快递信息</router-link></li>
           <li><router-link to='User'>用户信息</router-link></li>
        </ul>
    </div>
    <div>
       <router-view></router-view>
    </div>
</div>    
</template>

<script type="text/javascript">

</script>

<style scoped>
*{
    list-style: none;
    text-decoration: none;
    margin:0px;
    padding:0px;
}
.nav{
    margin-left: 50px;
    width: 200px;
    height: 500px;
    position:absolute;
}
.nav li{
    height: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.nav a{
    line-height: 30px;
    margin: 67px;
    margin-top: 30px;
    margin-bottom: 30px;
}
 </style>