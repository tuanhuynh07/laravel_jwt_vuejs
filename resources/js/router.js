import VueRouter from 'vue-router'

// Pages
import Home from './pages/home'
import About from './pages/About'
import Register from './pages/register'
import Login from './pages/login'
import Dashboard from './pages/user/Dashboard'

// Routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            auth: undefined
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            auth: undefined
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            auth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },
    // USER ROUTES
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },
]
const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
})
export default router
