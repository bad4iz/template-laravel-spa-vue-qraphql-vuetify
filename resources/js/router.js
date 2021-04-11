import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import Hello from './views/Hello.vue';
import HelloApollo from './views/HelloApollo.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello
        },
        {
            path: '/hello-apollo',
            name: 'hello-apollo',
            component: HelloApollo
        },
    ]
});

export default router;
