<template lang="">
    <div>
       	
	<div class="container-login100" style="background-image: url('images/bg-01.jpg');">
		<div class="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
			<form class="login100-form validate-form"  @submit.prevent = "register">
				<span class="login100-form-title p-b-37">
					Sign Up
				</span>

				<div class="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
					<input class="input100" type="text" placeholder="username or email" v-model="user.name">
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input m-b-20" data-validate = "Enter email">
					<input class="input100" type="email"  placeholder="Email" v-model="user.email">
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input m-b-25" data-validate = "Enter password">
					<input class="input100" type="password"  placeholder="password" v-model="user.password">
					<span class="focus-input100"></span>
				</div>

				
				<div class="text-center mt-5">
					<button type="submit" class="btn btn-primary" >Register</button>
				</div>
			</form>

			
		</div>
	</div>
	 
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            user:{
                name: "",
                email: "",
                password: "",
                
            }
        }
    },
    methods: {
       async register(){
           axios.get('/sanctum/csrf-cookie').then(
                await this.axios.post('/api/register',this.user)).then(response=>{
                    this.$router.push({name:'user-login'})
                })
               
            .catch(error=>{console.log(error)})
       }
    }
   
}
</script>
