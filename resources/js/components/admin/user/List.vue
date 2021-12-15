<template lang="">
    <v-app>
    <div>
        <v-alert type="success" v-if="success">{{success}}</v-alert>
        <h2 align="center"><i class="fa fa-users" aria-hidden="true"></i> Users</h2>
        <v-text-field
            v-model="search"
            
            label="search"
           single-line
           hide-details
        ></v-text-field>
      <v-data-table :items="users"
                    :headers="headers"
                    sort-by="email"
                    :sort-desc="true"
                    :search="search">
      
        <template #item.email={item}>

            {{item.email}}
        </template>
        <template #item.actions={item}>
        <td>
            <v-btn color="primary" elevation="2" outlined   small
:to="`/admin/user/${item.id}`"><i class="fa fa-eye" aria-hidden="true"></i> Watch </v-btn>

            <v-btn color="success" elevation="2" outlined   small
:to="`/admin/user/${item.id}/edit`"><i class="fa fa-pencil" aria-hidden="true"></i> Edit </v-btn>

            <v-btn color="red" elevation="2" outlined   small
@click="deleteUser(item.id)"><i class="fa fa-trash" aria-hidden="true"></i> Delete </v-btn>
          
        </td>
        </template>  

       
      </v-data-table>
    
    </div>
    </v-app>
</template>
<script>
export default {
    
    data(){
        return{
            users:[],
            search:'',
        }
    },
    mounted(){
        this.getUsers()
    },
    computed:{
        headers(){
            return[
                
                {text:'name',value:'name'},
                {text:'email', value:'email'},
                {text:'actions',value:'actions'}
            ]
        }
    },
    methods: {
        getUsers(){
            this.axios.get('/api/admin/user').then(response=>{
                this.users=response.data
            }).catch(error=>{
                console.log(error)
            })
        },

       deleteUser(id){
           this.axios.delete(`/api/admin/user/${id}`).then(response=>{
               this.getUsers()
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
};
</script>


<style lang="">
    
</style>