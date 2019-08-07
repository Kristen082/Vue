<template>
    <header>
        <slot></slot>
    </header>
</template>
<script>
export default {
    props:{

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
header{
    height: 35px;
    width: 100%;
}
ul{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;background: #eee;
}
ul li{
    flex: 1;
    line-height: 35px;
    text-align: center;
    font-size: 13px;
    box-sizing: border-box;
}
.router-link-active{
    color: coral;
}
</style>