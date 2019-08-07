<template>
    <div class="search">
        <p @click="$router.push({name:'search'})">search</p>
    </div>
</template>
<script>
export default {
    props:{
        flag:Boolean
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
.search{
    height: 25px;
    width: 100%;
    display: flex;
    align-items: center;
}
.search p{
    flex: 1;
    border: 1px solid #ccc;
    color: #ccc;
    text-align: center;
    height: 100%;
}
.search span{
    width: 80px;
    text-align: center;
}
</style>
