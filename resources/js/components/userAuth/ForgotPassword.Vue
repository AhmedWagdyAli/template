<template lang="">
    <div class="container">
           
            <v-alert color="success"  dismissible   v-if="message">
               {{message.message}}
            </v-alert>
            <form  @submit.prevent='reset'>
               <v-text-field
                   name="email"
                   label="email"
                   id="id"
                   v-model="user.email"
               ></v-text-field>
                
                <v-btn color="success" type="submit">Send Reset Email</v-btn>
            </form>
       
    </div>

</template>
<script>
export default {
    data(){
        return{
            user:{
                email:'',
            },
            message:''
            

            
        }
    },
    methods:{
        reset(){
            this.axios.post('/api/user/reset-password',this.user).then(response=>{
               this.message = response.data,
               console.log(message)
            }).catch(error=>{
                console.log(error)
            })
        }
    }

}
</script>
<style lang="">
    
</style>