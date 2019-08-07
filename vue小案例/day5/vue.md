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

        },
        methods:{
            方法1(){

            },
            方法2(){

            }
        }
    })
    配置的名字不能修改
    获取data里面的数据的话，vm.属性名


4. 指令    v-
- v-show //控制元素的显示隐藏，通过display:none/block; 频繁操作dom的话，用v-show
- v-text  //解析文本
- v-html  //解析html
- v-on:eventname //添加事件   简写: @eventname

    eventname: click  keyup change   keydown

- 事件修饰符
  @eventname.事件修饰符

  .stop 阻止冒泡
  .self 只触发自身的事件
  .prevent  阻止默认行为
  .capture   捕获阶段触发的
  .once    只触发一次回调

  //按键修饰符
  .right  //鼠标右键
  .left   //鼠标左键
  .middle  //鼠标中间触发的


  //按键码
  @eventname.13/enter 

- v-bind:属性   //动态属性  v-bind:src="list[0].src" list[0].src按变量解析
   
   简写  :属性="属性值"

- v-for  //Array  Object   Number   String

    Array  
     
    v-for="(item,index,key) in list" :key="index" //第一个是每一项  第二个下标   第三个没有
    :key 唯一的标示


    Number 

    v-for="(item,index,key) in Number"  //第一个是从1开始的数字  第二个下标   第三个没有

    String

    v-for="(item,index,key) in Number"  //第一个是每一个字符   第二个下标   第三个没有


    Obejct 

    v-for="(val,key,index) in obj"  //第一个是val  第二个值是key   第三个是下标

-   v-cloak    //这个指令保持在元素上直到关联实例结束编译

    //配合着display:none一起使用
    [v-cloak] {
        display: none;
    }

-    v-pre    //跳过这个元素和它的子元素的编译过程


-   v-model  //双向绑定  原理 @input="txt = $event.target.value"
   //常用在input  textarea   select等表单元素上边

-   v-if   //控制元素的显示隐藏，但是条件不满足的时候，不会生成dom节点
     
    v-else-if   v-else 必须要配合着v-if一起使用 

