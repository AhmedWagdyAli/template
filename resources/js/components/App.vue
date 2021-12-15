<template lang="">
<div>
    <v-app>
    <template v-if="isLoggedIn">
      <AdminMenu></AdminMenu>
    </template>
    <template v-else-if="!isUserLoggedIn">
      <Nav></Nav>
    </template>
    <template v-if="isUserLoggedIn">
      <Navbar v-bind:user='user'></Navbar>
    </template>
    <v-main app>
      <router-view></router-view>
    </v-main>
    </v-app>
</div>
</template>
<script>
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import axios from 'axios';
import AdminMenu from './layouts/AdminMenu.vue'
import Navbar from './layouts/user/Navbar.vue'
import Nav from './layouts/user/Nav.vue'
export default {
    name:'app',
    components:{  'AdminMenu': AdminMenu, 'Navbar':Navbar, 'Nav':Nav},
    data(){
        return{
           
            user:[],
            isLoggedIn: false,
            isUserLoggedIn: false,
        }
    },
    created() {
        if (window.Laravel.isLoggedin) {
            this.isLoggedIn = true
        }
        if (window.Laravel.isUserLoggedin) {
            this.isUserLoggedIn = true
        }
    },
    mounted(){
      this.axios.get('/api/user').then(response=>{
        this.user = response.data
      }).catch(error=>{
        console.log(error)
      })
    },
    
}
</script>
