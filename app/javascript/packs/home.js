import Vue from 'vue'
import VueRouter from 'vue-router';
import Index from '../components/home/index.vue'
import Routes from './routes.js';
import { store } from './vuex/index_store'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: Routes
});

document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        el: '#app',
        router,
        store,
        render: h => h(Index)
    });
});
