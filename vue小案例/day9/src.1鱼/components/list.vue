<template>
   <dl>
       <dt>

       </dt>
       <dd>
           <p>{{title}}</p>
           <p>价格:{{price}}</p>
           <my-count :num="num" :id="id" :type="type"></my-count>
       </dd>
   </dl>
</template>
<script>
import myCount from './count'
export default {
    props:['title','price','num','id','type'],
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
dl{
    width: 100%;
    display: flex;
    margin-bottom: 10px;
}
dl dt{
    height: 120px;
    width: 120px;
    background: red;
    margin-right: 10px;
}
dl dd{
    flex: 1;
}
</style>