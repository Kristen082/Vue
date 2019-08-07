import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
// import HelloWorld from '@/components/HelloWorld'
import Discover from '@/views/discover'
import Order from '@/views/order'
import Prefile from '@/views/prefile'
import Search from '@/views/search'
import Shop from '@/views/shop'
import Dican from '@/views/dican'
import Comment from '@/views/comment'
import Bussi from '@/views/bussi'

Vue.use(Router)

const router = new Router({
    routes:[
      {
          path:'/',
          name:'home',
          meta:{title:'1701A'},
          component: Home 
      },
      {
          path:'/discover',
          name:'discover',
          component: Discover 
      },
      {
          path:'/order',
          name:'order',
          meta:{required:true},
          component:Order
      },{
          path:'/prefile',
          name:'prefile',
          meta:{required:true},
          component:Prefile
      },
      {
        path:'/search',
        name:'search',
        component:Search
    },
    {
        path:'/shop/:id',
        name:'shop',
        component:Shop,
        beforeEnter(to,from,next){
            console.log(to);
            console.log(from);
            next()
        },
        // redirect:{name:'dican'},
        children:[
            {
                path:'dican',
                name:'dican',
                meta:{required:true},
                component:Dican
            },
            {
                path:'comment',
                name:'comment',
                component:Comment
            },
            {
                path:'bussi',
                name:'bussi',
                component:Bussi
            }
        ]
    }
  ]
})
// const login = ['order','prefile',''];
// router.beforeEach((to,from,next)=>{
//     console.log(to.name);
//     if(login.includes(to.name)){ //权限判断
//         console.log('包含');
//         let userId = window.localStorage.getItem('userId');
//         // console.log(userId);
//         if(userId){
//             next();
//         } else {
//             next('/');
//         }
//     } else {
//         next();
//     }
//     // console.log(from);
// })

router.beforeEach((to,from,next)=>{
    console.log(to);
    if(to.matched.some(item => item.meta.required)){
        let userId = window.localStorage.getItem('userId');
                // console.log(userId);
                if(userId){
                    next();
                } else {
                    next('/');
                }
    }else {

        next();
    }
});

router.afterEach((to,from)=>{
    console.log(to,'after');
    if(to.meta && to.meta.title){
        document.title=to.meta.title;
    } else {
        document.title ='666'
    }
});
export default  router;