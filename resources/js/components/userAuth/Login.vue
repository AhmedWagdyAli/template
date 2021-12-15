<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

             

                <div class="card card-default">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form @submit.prevent='login'>
                            <div class="form-group row">
                                <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" v-model="user.email" required
                                           autofocus autocomplete="off">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" v-model="user.password"
                                           required autocomplete="off">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                               
                                
                                    <button class="btn btn-primary" @click="password">
                                        Forgot Password
                                    </button>
                                </div>
                                 <a :href="'/auth/google'" style="margin-top: 20px;" class="btn btn-lg btn-google btn-success btn-block">
                                  <img src="https://img.icons8.com/color/16/000000/google-logo.png"> <strong>Login With Google</strong>
                                </a> 
                                

                            </div>
                            
                        </form>
                    </div>
                </div>
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
                email: "",
                password: "",
            }
           
        }
    },
    methods: {
        async login(){
            axios.get('/sanctum/csrf-cookie').then(
                await this.axios.post('/api/login',this.user)
            ).then(response=>{
                this.$router.push({name:'user-dashboard'})
            }).catch(error=>{
                console.log(error)
            })
        },
        password(){
            this.$router.push({name:'user-restPassword'})
        }
    }
   
}
</script>
<style>
.btn-google {
    color: #545454;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 1px #ddd
}
</style>