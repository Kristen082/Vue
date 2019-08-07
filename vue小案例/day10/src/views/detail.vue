<template>
    <div>
        详情页{{$route.params.id}}
        <my-header>
            <span @click="$router.go(-1)"> < </span>
            <span>{{$route.query.title}}</span>
        </my-header>


        <div v-if="mes">{{mes}}</div>
        <my-list
        :title="item.title"
        :img="item.cover"
        classname="leftlist"
        v-else
        >
         <p>{{item.authors}}</p>
         <p>{{item.summary}}</p>
        </my-list>
        
        <button v-if="!mes" @click="$router.push({name:'ready'})">开始阅读</button>
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
            item:{},
            mes:''
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        let id = this.$route.params.id
        this.$http.get('/api/detail?id='+id).then((res)=>{
            console.log(res);
            if(res.data.code == 1){
                this.item = res.data.list.item;
            } else {
                this.mes = res.data.mes;
            }
        });
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>