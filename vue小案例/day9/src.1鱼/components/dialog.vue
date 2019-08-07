<template>
    <div>
        <div class="dialog">
            <div class="content">
                <ul>
                    <li v-for="(item,index) in buyList" :key="index">
                        <span>{{item.title}}</span>
                        <span>价格:{{item.price}}</span>
                        <my-count :type="item.type" :id="item.id" :num="item.num"></my-count>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import myCount from './count'
export default {
    props:{
        buyList:Array
    },
    components:{
        myCount
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
.dialog{
    height: 93%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;;
}
.content{
    height: 200px;
    width: 100%;
    overflow-y: auto;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #fff;
}
</style>