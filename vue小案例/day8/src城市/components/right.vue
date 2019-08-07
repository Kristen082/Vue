<template>
    <div class="right">
        <ul>
            <li 
            v-for="(item,index) in list"
            :key="index"
            :class="{'current':item.flag}"
            @click="rightClick(index)"
            >{{item.name}}</li>
        </ul>
        {{sum}}
    </div>
</template>
<script>
export default {
    props:{
        list:Array
    },
    components:{

    },
    data(){
        return {
            ind:null,
            sum:0
        }
    },
    computed:{

    },
    methods:{
        rightClick(ind){ //点击右侧的数据
        console.log('right');
            this.ind = ind;
            this.list[ind].flag = !this.list[ind].flag;
            console.log(this.list);
            //计算数量
            this.sum = this.list.filter(item => item.flag).length;
        }
    },
    created(){
        console.log(this.list);
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.right{
    flex: 1;
    height: 100%;
}
ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
ul li{
    width: 30%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border: 1px solid royalblue;
    margin: 3px;
}
.current{
    background: yellow;
}
</style>
