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
                                    <input id="email" type="email" class="form-control" v-model="admin.email" required
                                           autofocus autocomplete="off">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" v-model="admin.password"
                                           required autocomplete="off">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                </div>
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
            admin:{
                email: "",
                password: "",
            }
           
        }
    },
    methods: {
        async login(){
            axios.get('/sanctum/csrf-cookie').then(
                await this.axios.post('/api/admin/login',this.admin)
            ).then(response=>{
                this.$router.push({name:'admin-dashboard'})
            }).catch(error=>{
                console.log(error)
            })
        }
    },
    beforeRouteEnter(to, from, next) {
        if (window.Laravel.isLoggedin) {
            return next('admin-dashboard');
        }   
        next();
    }
}
</script>