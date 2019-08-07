<template>
    <div>
        <h3>酒店列表</h3>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <slot :item="item" :grade="10"></slot>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        list:Array
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