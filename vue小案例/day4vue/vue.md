1. vue 是一个渐进式的框架，轻量、易于上手
2. vue 是一个MVVM的框架  

   M(Model) 数据层
   V(View)  视图层
   VM(ViewModel) 数据双向绑定

3. 实例化
    //Vue 接受一个对象
   let vm =  new Vue({
        el:'#app', 把vue实例挂载到哪个元素上边一般来说，一个页面只有一个vue实例，所以这个地方用id选择器,
        data:{ //对象，里面放的是双向绑定的数据

        }
    })
    配置的名字不能修改
    获取data里面的数据的话，vm.属性名


4. 指令    v-
- v-show //控制元素的显示隐藏，通过display:none/block;
- v-on:eventname //添加事件   简写: @eventname

    eventname: click  keyup change   keydown