<template>
    <div class="classify">
        <ul class="left">
            <li v-for="(item,index) in list" :key="index" 
            :class="{'active':index == ind}"
            @click="change(index)"
            >{{item.title}}</li>
        </ul>
        <div class="right">
            <dl v-for="(item,index) in list[ind].res" :key="index">
                <dt></dt>
                <dd>{{item.title}}</dd>
            </dl>
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
            ind:0,
            list:[
                {
                    title:"女装",
                    id:1,
                    res:[
                        {
                            title:"连衣裙",
                            id:2
                        },
                        {
                            title:"裤子",
                            id:3
                        }
                    ]
                },
                {
                    title:"男装",
                    id:1,
                    res:[
                        {
                            title:"衬衫",
                            id:4
                        },
                        {
                            title:"裤子男",
                            id:5
                        }
                    ]
                }
            ]
        }
    },
    computed:{

    },
    methods:{
        change(ind){
            this.ind = ind;
        }
    },
    created(){

    },
    mounted(){

    },
    destroyed() {
        console.log('classify');
    },

}
</script>
<style scoped lang="">
*{
    margin: 0;
    padding: 0;
}
li.active{
    color: red;
}
.classify{
    display: flex;
}
.left{
    width: 120px;
}
.right{
    flex: 1;
}
</style>