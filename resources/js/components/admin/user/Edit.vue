<template lang="">
    <div>
        <v-app>
       <v-main app>
       <form @submit.prevent='update'>
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
            <v-btn color="success" type="submit">Update</v-btn>
        </form>
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
                _method:'patch',
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
        update(){
            this.axios.put(`/api/admin/user/${this.$route.params.id}`,this.user).then(response=>{
                this.$router.push({name:'admin-userList'})
            }).catch(error=>{
                console.log(error)
            })
        }

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