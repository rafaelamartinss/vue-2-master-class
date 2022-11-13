import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Thread from '../components/Thread.vue'

const routes = [
    { path: '/thread', component: Thread },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router