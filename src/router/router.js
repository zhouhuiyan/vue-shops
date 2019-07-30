import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('../components/MyHeader.vue')
        },
        {
            path: '/com-a',
            name:'coma',
            component: () => import('../components/test/components/ComA.vue')
        }
    ]
})