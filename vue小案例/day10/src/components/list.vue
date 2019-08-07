<template>
   <dl :class="classname" @click="$router.push({name:'detail',params:{id:id},query:{title:title}})">
       <dt>
           <img v-lazy="img">
       </dt>
       <dd>
           <h3>{{title}}</h3>
           <slot></slot>
       </dd>
   </dl>
</template>
<script>
export default {
    props:{
        img:String,
        title:String,
        classname:String,
        id:Number
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
dl.downlist{
    width: 33%;
}
dl.leftlist{
    width: 100%;
    display: flex;
}
dl dt{
    height: 100px;
    width: 100px;
}
dl dt img{
    height: 100%;
    width: 85px;
}
dl.leftlist dd{
    flex: 1;
}
</style>