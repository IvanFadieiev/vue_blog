import text from '../components/home/text.vue';
import navigation from '../components/home/navigation.vue';
import sign_in from '../components/sign/sign_in.vue';
import sign_up from '../components/sign/sign_up.vue';
import posts_index from '../components/posts/index.vue';
import new_post from '../components/posts/new.vue';

export default [
    { path: '/', redirect: '/index' },
    { path: '/index', component: navigation },
    { path: '/text', component: text },
    { path: '/sign_in', component: sign_in },
    { path: '/sign_up', component: sign_up },
    { path: '/posts', component: posts_index },
    { path: '/new_posts', component: new_post }
];
