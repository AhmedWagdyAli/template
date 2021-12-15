<template lang="">
<v-app>
    <div>
        <v-main app>
            <form  @submit.prevent='reset'>
               <v-text-field
                   name="email"
                   label="email"
                   id="id"
                   v-model="admin.email"
               ></v-text-field>
                
                <v-btn color="success" type="submit">Send Reset Email</v-btn>
            </form>
        </v-main>
    </div>
</v-app>
</template>
<script>
export default {
    data(){
        return{
            admin:{
                email:'',
            }
            

            
        }
    },
    methods:{
        reset(){
            this.axios.post('/api/admin/reset-password',this.admin).then(response=>{
                this.$router.push({name:'admin-login'})
            }).catch(error=>{
                console.log(error)
            })
        }
    }

}
</script>
<style lang="">
    
</style>