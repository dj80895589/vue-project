<template>
<div class="container">	
     <img class="mx-auto d-block" src="../../build/food-salad-restaurant-person.jpg" alt="">
     <div class="form-group">
     	<label for="email">邮箱</label>
     	<input type="email" class="form-control" v-model="email">
     </div>
     <div class="form-group">
     	<label for="password">密码</label>
     	<input type="password" class="form-control" v-model="password">
     </div>
     <div class="form-group">
     	<label for="confirm-password">确认密码</label>
     	<input type="password" class="form-control" v-model="confirmPassword">
     </div>
     <button type="submit" @click="onSubmit" class="btn btn-block btn-success">注册</button>		       
</div>  
</template>
<script>
import axios from 'axios';
	export default{
		data(){
			return{
				email:"",
				password:'',
				confirmPassword:''
			}
		},
		methods:{
			onSubmit(){
                 if(this.password === this.confirmPassword){
                    const formData = {                                 //创建一个对象    里面是前端输入的内容
                        name:"dddd",
                        email:this.email,
                        password:this.password,
                        password2:this.confirmPassword
                    }
            axios.post('/users/register',formData)  //注册接口地址

                    .then(res => {
                            console.log(res.data);
                            this.$router.push({path:'/login'})
                })
                        } 
                        else{
                    alert("两次密码不一致！")
                 }
			}
		}
	}
</script>
<style>

.container{
	width: 100%;
    padding:0px;
}
img{
    width: 100%;
}

</style>
