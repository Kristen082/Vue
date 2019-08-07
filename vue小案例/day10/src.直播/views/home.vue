<template>
    <div>
        <div class="page">
            
            <ul class="title">
                <li @click="$router.push({name:'new'})">最新</li>
                <li  @click="$router.push({name:'hot'})">最热</li>
                <li  @click="$router.push({name:'look'})">关注</li>
                <li>NBA</li>
            </ul>
            <router-view></router-view>
        </div>
        <my-footer></my-footer>
    </div>
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
.title{
    height: 44px;
    width: 100%;
    display: flex;
    background: cornflowerblue;
}
.title li {
    flex: 1;
    text-align: center;
    line-height: 44px;
}
</style>