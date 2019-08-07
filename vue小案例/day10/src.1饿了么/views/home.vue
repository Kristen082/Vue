<template>
    <div>
        <div class="page">
            首页
            <button @click="goToSearch">去搜索</button>
            <!-- <router-link to="/search">去搜索</router-link> -->
            <ul>
                <li v-for="(item,index) in list" 
                :key="index"
                @click="goToShop(item.id)"
                >{{item.title}}</li>
            </ul>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
// import myFooter from '../components/footer'
export default {
    props: {},
    components: {
        // myFooter
    },
    data() {
        return {
            list:[
                {
                    title:"小笼包",
                    id:1
                },
                {            
                    title:"麻辣拌",
                    id:2
                },
                {
                    title:"肯德基",
                    id:13
                }
            ]
        };
    },
    computed: {},
    methods: {
        goToSearch(){
            console.log('goToSearch');
            // this.$router.push('search');//字符串
            this.$router.push({path:'/search',query:{val:'456'}});//对象的
            // this.$router.replace({path:'/search',query:{val:'456'}});//对象的
            // this.$router.push({name:'search'});//命名路由的方式
        },
        goToShop(id){
           this.$router.push({name:'shop',params:{id:id}});
        }
    },
    created() {
        console.log(this.$router); //全局的路由信息
        console.log(this.$route);  //当前的路由信息
    },
    mounted() {},
    beforeRouteEnter (to, from, next) {
        next();
    }
};
</script>
<style scoped lang="">
</style>