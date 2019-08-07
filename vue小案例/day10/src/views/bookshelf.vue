<template>
    <div>
        <my-header>
            <ul>
               <router-link to="/bookcity" tag="li">书城</router-link>
               <router-link to="/bookshelf" tag="li">书架</router-link>
            </ul>
        </my-header>
        <search :flag="flag" @change="change"/>

         <div class="list">
                <my-list
                v-for="(item,index) in recommendList"
                :key="index"
                :img="item.cover"
                :title="item.title"
                :id="item.fiction_id"
                :classname="name"
                >
                    <template v-if="name == 'leftlist'">
                        <p>{{item.authors}}</p>
                        <p>{{item.summary}}</p>
                    </template>
                   
                </my-list>
        </div>
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
            flag:true,
            name:'leftlist',
            recommendList:[]
        }
    },
    computed:{

    },
    methods:{
        change(){
            console.log(999);
            this.name = this.name == 'leftlist' ?'downlist' :'leftlist';
        }
    },
    created(){
        this.$http.get('/api/recommend').then((res)=>{
            console.log(res.data);
            this.recommendList = res.data.list.items;
        });
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.leftlist{
    width: 100%;
    height: 100px;
    overflow: hidden;
    padding: 5px;
    font-size: 14px;
}
</style>