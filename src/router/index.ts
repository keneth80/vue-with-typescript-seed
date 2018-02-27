import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello.vue';
import Demo from '@/components/Demo.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/demo',
            name: 'Demo',
            component: Demo
        }
    ]
});
