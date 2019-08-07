<template>
    <div class="left">
        <ul>
            <li 
            v-for="(item,index) in list" 
            :key="index" 
            @click="changeLeft(index)"
            >{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        list: Array
    },
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {
        changeLeft(ind){
            console.log(ind);
            this.$emit('change',ind);
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
.left {
    width: 120px;
    height: 100%;
    border-right: 1px solid #ccc;
    overflow-y: auto;
}
li {
    height: 44px;
    width: 100px;
    background: chocolate;
    color: #fff;
    border-radius: 5px;
    line-height: 44px;
    text-align: center;
    margin: 10px 0;
}
</style>