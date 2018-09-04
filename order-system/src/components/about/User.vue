<template>
<div class="container">
  <div>
    <h4>个人信息</h4>
      <div class="row">
        <ul>
        	<li class="list">
        		<a>
        		    <div class="left col-xs-3">邮箱:</div>
        		    <div class="right col-xs-9">test@test.com</div>
        		</a>    
        	</li>
        	<li class="list">
        		<a>
        		    <div class="left col-xs-3">账号:</div>
        		    <div class="right col-xs-9">test</div>
        		</a>    
        	</li>
        	<li class="list">
        		<a>
        		    <div class="left col-xs-3">性别:</div>
        		    <div class="right col-xs-9">男</div>
        		</a>
        	</li>
        	<li class="list">
        		<a>
        		    <div class="left col-xs-3">地区:</div>
        		    <div class="right col-xs-9">中国湖南省长沙市</div>
        		</a>    
        	</li>
        	<li class="list">
        		<a>
        		    <div class="left col-xs-3">收货地址:</div>
        		    <div class="right col-xs-9">中国湖南省长沙市华创国际</div>
        		</a>    
        	</li>

        </ul>
      </div>  
  </div>	
  <div class="totalPrice">
    <div class="submit">
      <a>提交</a>
    </div>
  </div> 
</div> 
</template>
<script>
	export default{
		props:[],
        data(){
            return{

            }
        },
	}
</script>
<style scoped>
*{
	padding: 0px;
	margin: 0px; 
	list-style: none;
}
h4{
	margin-top: 1.5rem;
}
.row{
	margin:1.5rem;
	background: lightblue;
	border-radius: 1rem;
}
.list{
	height: 3rem;
	border-bottom: 1px solid white;
}
.left{
	font-size: 1.5rem;
	text-align: left;
	line-height: 3rem;
}
.right{
	font-size: 1rem;
	text-align: left;
	line-height: 3rem;
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