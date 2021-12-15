<template>
<v-app>
    <v-main app>
        <div class="row">
            <div class="col-lg-3 col-6">
                <v-card red>
                 
                   <v-card-title primary-title>
                       <div>
                           <h3 class="headline mb-0"> <i class="fas fa-user-astronaut    "></i>Admins</h3>
                           <div>{{admins.length }}</div>
                       </div>
                   </v-card-title>
                   <v-card-actions>
                       <v-btn text color="primary">text</v-btn>
                      
                   </v-card-actions>
               </v-card>
               
            </div>
            <div class="col-lg-3 col-6">
                <v-card>
                   
                   </v-card-media>
                   <v-card-title primary-title>
                       <div>
                           <h3 class="headline mb-0">Users</h3>
                           <div>{{users.length }}</div>
                       </div>
                   </v-card-title>
                   <v-card-actions>
                       <v-btn text color="primary">text</v-btn>
                      
                   </v-card-actions>
               </v-card>
               
            </div>
            
               
            </div>
        </div>
       
  </v-main>
</v-app>
</template>
<script>
  export default {
   data(){
       return{
           users:[],
           admins:[],
       }
    },
   mounted(){
       this.getUsers()
       this.getAdmins()
   },
   methods:{
        getUsers(){
            this.axios.get('/api/admin/user').then(response=>{
                this.users=response.data
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
        }
   },
   beforeRouteEnter(to, from, next) {
        if (!window.Laravel.isLoggedin) {
            window.location.href = "/admin/login";
        }
        next();
    }
}
</script>
<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>