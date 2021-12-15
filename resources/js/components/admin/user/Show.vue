<template lang="">
    <div>
        <v-app>
       <v-main app>
      
            <v-text-field
                name="name"
                label="name"
                id="id"
                v-model="user.name"
            ></v-text-field>
            <v-text-field
                name="email"
                label="email"
                id="id"
                v-model="user.email"
            ></v-text-field>
           
        
        </v-main>
        </v-app>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{
                name:'',
                email:'',
               
            },
           
        }
    },
    mounted(){
        this.getUser()
    },
    methods:{
        getUser(){
            this.axios.get(`/api/admin/user/${this.$route.params.id}/edit`).then(response=>{
                this.user=response.data
            }).catch(error=>{
                console.log(error)
            })
        },
        getAdmins(){
            this.axios.get('/api/admin/dashboard').then(response=>{
                this.admins = response.data
            }).catch(error=>{
                console.log(error)
            })
        },
       
        
    },
    beforeRouteEnter(to, from, next) {
        if (!window.Laravel.isLoggedin) {
            return next('admin/login');
        }   
        next();
    }
}
</script>
<style lang="">
    
</style>