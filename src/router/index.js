import Vue from 'vue' 
import Router from 'vue-router' 
const DashboardLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue') 
const HelloWorld = () => import(/* webpackChunkName: "dashboard" */ '../components/HelloWorld.vue') 
const Login = () => import(/* webpackChunkName: "dashboard" */ '../components/login.vue') 
function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `../components/dashboardContents/${view}.vue`) 
} 
const routes = [ 
    {
        path: '/', 
        component: HelloWorld, 
    },
    {
        path: '/login', 
        component: Login, 
    },
    { 
        path: '/components/dashboardLayout.vue', 
        component: DashboardLayout, 
        children: [ 
            { 
                name: 'UserController', 
                path: '/user', 
                component: loadView('userController') 
            },
            { 
                name: 'SparepartController', 
                path: '/sparepart', 
                component: loadView('sparepartController') 
            },
        ] 
    },
] 

Vue.use(Router) 
const router = new Router({mode: 'history', routes: routes}) 
export default router