import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Video from '@/views/video'
import News from '@/views/news'
import Frunt from '@/views/frunt'
import List from '@/views/list'
import New from '@/views/new'
import Hot from '@/views/hot'
import Look from '@/views/look'
import Detail from '@/views/detail'
Vue.use(Router);

const routes = [
    {
        path:'/',
        redirect:{name:'new'}
    },
    {
        path:'/home',
        name:'home',
        children:[
            {
                path:'new',
                name:'new',
                component:New
            },
            {
                path:'hot',
                name:'hot',
                component:Hot
            },
            {
                path:'look',
                name:'look',
                component:Look
            }
        ],
        component:Home
    },
    {
        path:'/video',
        name:'video',
        component:Video
    },
    {
        path:'/news',
        name:'news',
        component:News
    },
    {
        path:'/frunt',
        name:'frunt',
        component:Frunt
    },
    {
        path:'/list',
        name:'list',
        component:List
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:Detail
    }
]

export default new Router({
    routes
});