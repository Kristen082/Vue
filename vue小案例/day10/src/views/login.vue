<template>
    <div>
        <input type="text" placeholder="账号" v-model="name">
        <input type="text" placeholder="密码" v-model="pwd">
        <button @click="login">登录</button>
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
            name:'',
            pwd:''
        }
    },
    computed:{

    },
    methods:{
        login(){
            console.log(this.name,this.pwd);
            let name = this.name,pwd = this.pwd;
            this.$http.post('/api/login',{name:name,pwd:pwd}).then((res)=>{
                console.log(res);
                if(res.data.code == 1){
                    window.localStorage.setItem('userId',name);
                    this.$router.push({name:'ready'});
                }
            });
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>