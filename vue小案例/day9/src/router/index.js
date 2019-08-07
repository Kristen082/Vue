import Vue from 'vue'
import VueRouter from 'vue-router' 
import Home from '../views/home'
import Discover from '../views/discover'
import Order from '../views/order'
import Prefile from '../views/prefile'

Vue.use(VueRouter); //注册插件

export default new VueRouter({
    mode:'hash',  //hash模式（默认）  history  
    routes:[
        {
            path:'/',
            component: Home 
        },
        {
            path:'/discover',
            component: Discover 
        },
        {
            path:'/order',
            component:Order
        },{
            path:'/prefile',
            component:Prefile
        }
    ]
});