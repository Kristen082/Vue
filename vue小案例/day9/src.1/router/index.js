import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Discover from '../views/discover'
import Order from '../views/order'
import Prefile from '../views/prefile'
Vue.use(VueRouter);

export default new VueRouter({
    mode:'hash', //配置路由模式， hash模式   history模式    
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/discover',
            component:Discover
        },
        {
            path:'/order',
            component:Order
        }, {
            path:'/prefile',
            component:Prefile
        }
    ]
})