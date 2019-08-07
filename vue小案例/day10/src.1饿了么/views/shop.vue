<template>
    <div class="shop">
        <div>店铺{{$route.params.id}}</div>
        <ul class="title">
            <li @click="$router.push({name:'dican'})">点餐</li>
            <li @click="$router.push({name:'comment'})">评价</li>
            <li @click="$router.push({name:'bussi'})">商家</li>
        </ul>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
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
        console.log(this.$route);
    },
    mounted(){

    },
    beforeRouteEnter (to, from, next) {
        // ... 
        console.log(to);
        if(to.params.id < 10){
            next();
        } else {
            next('/');
        }
    },
   beforeRouteUpdate (to, from, next) { //路由发生变化，组件复用
        // ...
        console.log('beforeRouteUpdate');
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log('leave');
    }
}
</script>
<style scoped lang="">
.title{
    height: 44px;
    width: 100%;
    display: flex;
    background: burlywood;
}
.title li{
    flex: 1;
    text-align: center;
    line-height: 44px;
}
.shop{
  display: flex;
  flex-direction: column;
}
</style>