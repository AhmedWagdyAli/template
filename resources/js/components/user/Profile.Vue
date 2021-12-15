<template lang="">
    <div>
        
        <v-text-field
            label="name"
            v-model="user.name"
            disabled
        ></v-text-field>
        <v-text-field
            label="E-mail"
            v-model="user.email"
            disabled
        ></v-text-field>
      
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:[],
        }
    },
   created() {
        if (window.Laravel.user) {
            this.user = window.Laravel.user
            
        }
    },
    beforeRouteEnter(to, from, next) {
        if (!window.Laravel.isUserLoggedin) {
            return next('/login');
        }   
        next();
    }
    
}
</script>
<style lang="">
    
</style>