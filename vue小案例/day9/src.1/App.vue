<template>
    <div>

       <router-view></router-view>
       <footer>
           <router-link to="/">首页</router-link>
           <router-link to="/discover">发现</router-link>
           <router-link to="/order">订单</router-link>
           <router-link to="/prefile">我的</router-link>
           <!-- <a href="/">首页</a>
           <a href="/discover">发现</a>
           <a href="/order">订单</a>
           <a href="/prefile">我的</a> -->
       </footer>
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

</style>