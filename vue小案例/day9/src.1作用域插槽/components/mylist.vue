<template>
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <span>{{item.title}}</span>
            <list v-if="item.children" :list="item.children"></list>
        </li>
    </ul>
        <!-- <ul>
            <li>
                <span>组件基础</span>
                 <ul>
                     <li>
                         <span>基本示例</span>
                     </li>
                     <li>
                         <span>组件的复用</span>
                         <ul>
                             <li>
                                 <span>data 必须是一个函数</span>
                             </li>
                         </ul>
                     </li>
                 </ul>
            </li>
            <li>事件名称</li>
        </ul> -->

</template>
<script>
export default {
    name:'list',
    props:{
        list:Array
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>