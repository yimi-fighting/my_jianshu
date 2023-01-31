// import Home from '@/pages/home'
// import Login from '@/pages/login'
// import Unload from '@/pages/unload'
// import Member from '@/pages/member'
// import IT from '@/pages/it'


// 路由懒加载
export default [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/pages/home"),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/pages/login"),
    },
    {
        path: '/unload',
        name: 'Unload',
        component: () => import("@/pages/unload"),
    },
    {
        path: '/member',
        name: 'Member',
        component: () => import("@/pages/member"),
    },
    {
        path: '/it',
        name: 'IT',
        component: () => import("@/pages/it"),
    },
]