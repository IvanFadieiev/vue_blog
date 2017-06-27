import text from '../components/home/text.vue';
import navigation from '../components/home/navigation.vue';
import sign_in from '../components/sign/sign_in.vue';
import registration from '../components/sign/registration.vue';

export default [
    { path: '/', redirect: '/index' },
    { path: '/index', component: navigation },
    { path: '/text', component: text },
    { path: '/sign_in', component: sign_in },
    { path: '/registration', component: registration }
];
