<template lang="">
    <div>
     
    <v-toolbar app dark>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
        
          {{ item.title }}
        </v-btn>
        <v-btn flat icon color="primary" disabled>
          <v-icon></v-icon>{{user.id}}
        </v-btn>
        <v-btn @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    </div>
</template>
<script>
export default {
  name: "nav",
  props:['user'],
  data(){
    return {
      appTitle: 'My template',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Profile', path: '/profile', icon: 'face' },
        
     ]
    }
  },
  created(){
    Echo.private(`App.Models.User.${this.user.id}`)
    .notification((notification) => {
        console.log(notification.type);
    });
  },
   methods: {
        logout(e) {
            console.log('ss')
            e.preventDefault()
            this.axios.get('/sanctum/csrf-cookie').then(response => {
                this.axios.post('/api/logout')
                    .then(response => {
                        if (response.data.success) {
                            window.location.href = "/"
                        } else {
                            console.log(response)
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        },
        
    },
};
</script>
<style lang="">
    
</style>