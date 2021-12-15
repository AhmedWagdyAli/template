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
      <v-toolbar-items>
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
        
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    </div>
</template>
<script>
export default {
  name: "navs",
  data(){
    return {
      appTitle: 'My template',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Register', path: '/reg', icon: 'face' },
          { title: 'Sign In', path: '/login', icon: 'lock_open' }
     ]
    }
  },
};
</script>
<style lang="">
    
</style>