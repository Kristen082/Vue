<template>
    <div>
        搜索页{{$route.query.val}}
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
        console.log(this.$router);
        console.log(this.$route);
        console.log(this.$route.query.val);
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>