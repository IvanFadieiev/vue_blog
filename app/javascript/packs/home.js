import Vue from 'vue'
import VueRouter from 'vue-router';
import Index from '../components/home/index.vue'
import Routes from './routes.js';
import VueResource from 'vue-resource';
import { store } from './vuex/index_store'
import VueSession from 'vue-session'
import PostsIndex from '../components/posts/index.vue'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueSession)

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

Vue.component('posts_index', PostsIndex);