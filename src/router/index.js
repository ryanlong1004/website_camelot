import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menus from '../views/Menus.vue'
import Events from '../views/Events.vue'
import News from '../views/News.vue'
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
        path: '/news',
        name: 'News',
        component: News
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
