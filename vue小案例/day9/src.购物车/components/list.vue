<template>
    <dl>
        <dt></dt>
        <dd>
            <p>标题：{{title}}</p>
            <p>价格：{{newPrice}}</p>
            <p>原价：{{oldPrice}}</p>
            <p @click="$emit('change',id)">+</p>
        </dd>
    </dl>
</template>
<script>
export default {
    props:['title','newPrice','oldPrice','id','num'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        change(){
            console.log(999);
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
dl{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     margin: 3px;
}
dl dt{
    height: 120px;
    width: 120px;
    background: red;
}
</style>