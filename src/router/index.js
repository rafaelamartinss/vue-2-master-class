import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Forum from '../components/Forum.vue'
import ThreadShow from '../components/ThreadShow.vue'

const routes = [
    { 
        path: '/', 
        component: Forum 
    },
    { 
        path: '/thread/:id', 
        component: ThreadShow,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router