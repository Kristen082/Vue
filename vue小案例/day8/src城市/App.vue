<template>
    <div id="app">
        <my-left 
        :list="list"
        @change="change"
        ></my-left>
        <my-right :list="list[ind].cities" v-if="list[ind]"></my-right>
    </div>
</template>

<script>
import myLeft from './components/left.vue'
import myRight from './components/right.vue'
import axios from 'axios'
export default {
    data(){
        return{
            list:[],
            ind:0
        }
    },
    components:{
        myLeft,
        myRight
    },
    created() { //只会执行一次
        axios.get('/api/city').then((res)=>{
            console.log(res.data);
            this.list = res.data.result;
            console.log(this.list[0].cities,'creat');
            // this.list[this.ind].cities.forEach(item => item.flag = false);
            //vue里面后添加的属性，不能实现双向绑定。
            // 需要使用this.$set(target,属性名,属性值)才能实现一个双向的数据绑定
            this.list[this.ind].cities.forEach(item => this.$set(item,'flag',false));
            console.log(this.list[this.ind]);
        });
    },
    watch:{ //侦听器
        ind(news,olds){//4
            console.log(news);
            this.list[news].cities.forEach(item => this.$set(item,'flag',false));
        }
    },
    methods: {
        change(ind){
            console.log(ind);
            this.ind = ind;
        }
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
html,
body,
#app {
    height: 100%;
    width: 100%;
}
#app{
    display: flex;
}

</style>
