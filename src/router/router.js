import Home from '@/pages/home'
import Login from '@/pages/login'
import Unload from '@/pages/unload'
import Member from '@/pages/member'
import IT from '@/pages/it'

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/unload',
        name: 'Unload',
        component: Unload,
    },
    {
        path: '/member',
        name: 'Member',
        component: Member,
    },
    {
        path: '/it',
        name: 'IT',
        component: IT,
    },
]