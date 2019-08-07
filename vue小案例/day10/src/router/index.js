import Vue from 'vue'
import Router from 'vue-router'
// import Bookcity from '@/views/bookcity' //静态加载
// import BookShelf from '@/views/bookshelf'


const Bookcity = () => import('@/views/bookcity'); //按需加载
const BookShelf = () => import('@/views/bookshelf'); //按需加载
const Search = () => import('@/views/search'); //按需加载
const Detail = () => import('@/views/detail'); //按需加载
const Ready = () => import('@/views/ready'); //按需加载
const Login = () => import('@/views/login'); //按需加载


Vue.use(Router);

const routes = [
    {
        path:'/',
        redirect:'/bookcity'
    },
    {
        path:'/bookcity',
        name:'bookcity',
        component:Bookcity
    },
    {
        path:'/bookshelf',
        name:'bookshelf',
        component:BookShelf
    },
    {
        path:'/search',
        name:'search',
        component:Search
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:Detail
    },
    {
        path:'/ready',
        name:'ready',
        beforeEnter: (to, from, next) => {//局部守卫
            // ...
            if(window.localStorage.getItem('userId')){
                next()
            }else {
                next('/login');
            }
        },
        component:Ready
    },
    {
        path:'/login',
        name:'login',
        component:Login
    }
]

export default new Router({
    routes
});