<template lang="">

    <div>
        <v-main app>
            <form  @submit.prevent='password'>
                <v-text-field
                   name="email"
                   label="Email"
                   id="id"
                   v-model="admin.email"
               ></v-text-field>
               <v-text-field
                   name="password"
                   label="New Password"
                   id="id"
                   v-model="admin.password"
               ></v-text-field>
               <v-text-field
                   name="password_confirmation"
                   label="Confirm Password"
                   id="id"
                   v-model="admin.password_confirmation"
               ></v-text-field>
                <v-text-field
                    name="name"
                    label="label"
                    id="id"
                ></v-text-field>
               
                <v-btn color="success" type="submit">Update New Password</v-btn>
            </form>
        </v-main>
       
      
    </div>


</template>
<script>
export default {
    data(){
        return{
            admin:{
                email:'',
                password:'',
                password_confirmation:''
            },
           
        }
    },
    mounted(){

    },
    methods:{
        password(){
            this.axios.put('/api/admin/new-password',this.admin)
        }
    },
    props: ['token']
}
</script>
<style lang="">
    
</style>