<template>
    <div>
       <dl 
       @click="change" 
       :class="{'active':item.flag}"
       >
           <dt>
               <img :src="item.img" alt="">
           </dt>
           <dd>
               <h3>{{item.title}}</h3>
               <p>{{item.time}}</p>
           </dd>
       </dl>
    </div>
</template>
<script>
export default {
    // props:['title','time','img','id','flag','ind'],
    props:['item','ind'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        change(){
            this.$router.push({name:'detail',params:{id:this.id}});
            this.$emit('changeFn',this.ind);
        }
    },
    created(){
        console.log(this.item,'create');
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
dl {
    display: flex;
    width: 100%;
}
dl dt{
    height: 120px;
    width: 120px;
}
dl dt img{
    height: 100%;
    width: 100%;
}
 dl dd{
     flex: 1;
 }
 dl.active{
     color: #ccc;
 }
</style>