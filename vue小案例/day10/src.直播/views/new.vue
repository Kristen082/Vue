<template>
    <div>
        {{list}}
        <my-list
        v-for="(item,index) in list"
        :key="index"
       :item="item"
        :ind="index"
        @changeFn="change"
        ></my-list>
    </div>
</template>
<script>
import myList from '../components/list'
import axios from 'axios'
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {
            list:[]
        }
    },
    computed:{

    },
    methods:{
        change(ind){
            console.log(666,ind);
            this.list[ind].flag = true;
            console.log(this.list[ind]);
        }
    },
    created(){
        axios.get('/api/list').then((res)=>{
            this.list = res.data.list;
            console.log(this.list);
        });
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>