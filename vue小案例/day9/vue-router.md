path: '/'   首页
path:'/discover'  发现
path: 'order'    订单
path: 'prefile'  我的



1. 下载vue-router 
2.  新建一个router文件，在文件夹下边新建一个index.js，这个index.js就是路由信息的配置文件

    - 引入vue
    - 引入vue-router
    - 配置路由信息  routes
    - 把配置的路由信息挂载到vuerouter的实例上边
    - 抛出路由的实例

3. 在main.js里面，挂载router

    Vue.use(VueRouter); //use()注册插件
    //视图的出口，一定告诉组件输出在那个位置
    <router-view></router-view>  视图的输出

    <router-link to="/"></router-link>  //路由跳转


