<template>
<div class="container">
     			<img src="../../build/login.jpg" alt="">
     			<!-- <form @submit.prevernt="onSubmit"> -->
     				<div class="form-group">
     					<label for="email">邮箱</label>
     					<input type="email" class="form-control" v-model="email">
     				</div>
     				<div class="form-group">
     					<label for="password">密码</label>
     					<input type="password" class="form-control" v-model="password">
     				</div>
     				<button type="submit" @click="onSubmit" class="btn btn-block btn-success">登录</button>		
     			<!-- </form> -->
</div>  
</template>
<script>
import axios from 'axios';
	export default{
		data(){
			return{
				email:"",
				password:'',
			}
		},
		methods:{
			onSubmit(){
                const user = {
                    email:this.email,
                    password:this.password
                };
                axios.post('/users/login',user)
                   .then(res => {
                    console.log(res.data);
                    if(res.data.success){
                        this.$router.push({name:"homeLink"})
                        //存储token
                    }
                   })
                   return false;
			}
		}
	}
</script>

<style scoped>

</style>