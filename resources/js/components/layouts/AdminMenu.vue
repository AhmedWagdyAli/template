<template lang="">
    <div>
           <link
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    >
    <!-- Nav tabs -->
  
    <v-card>
      <v-navigation-drawer
        permanent
        expand-on-hover
        app
        v-model="drawer"
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{admin.name}}
              </v-list-item-title>
              <v-list-item-subtitle>{{admin.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
        
          <v-list-item link :to="{name:'admin-dashboard'}">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple fdashb</v-icon>
            </v-list-item-icon>
            <v-list-item-title><i class="fa fa-dashcube" aria-hidden="true"></i> Dashboard</v-list-item-title>
          </v-list-item>
          
          <v-list-item link :to="{name:'admin-userList'}">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title><i class="fa fa-users" aria-hidden="true"></i> Users</v-list-item-title>
          </v-list-item>
          
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>
    </div>
</template>
<script>
export default {
    name:'AdminMenu',
    data(){
        return{
            drawer:null,
            items:[
                {title:'Dashboard',icon:'mdi-view-dashboard',to:'/admin'}
            ],
            admin:[],
            isLoggedIn: false,

        }
    },
    created() {
        if (window.Laravel.user) {
            this.admin = window.Laravel.user
            
        }
         
    },
}
</script>
<style lang="">
    
</style>