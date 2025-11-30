import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menus from '../views/Menus.vue'
import Events from '../views/Events.vue'
import Contact from '../views/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/menus',
        name: 'Menus',
        component: Menus
    },
    {
        path: '/events',
        name: 'Events',
        component: Events
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})

export default router
