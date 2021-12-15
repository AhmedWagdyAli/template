import axios from 'axios';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import {routes} from './routes';
import App from './components/App.vue';
import DataTable from "@andresouzaabreu/vue-data-table";
import "bootstrap/dist/css/bootstrap.min.css";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
require('./bootstrap')
Vue.use(Vuetify)
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.component("data-table", DataTable);
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    vuetify: new Vuetify({
        icons: {
          iconfont: 'mdi', // default - only for display purposes
        },
      }),
    render: h => h(App),
});