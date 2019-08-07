<template>
    <div>
        <template v-if="num>0">
            <span @click="$bus.$emit('changeCount',id,num-1,type)">-</span>
            <span>{{num}}</span>
        </template>
        <span @click="$bus.$emit('changeCount',id,num+1,type)">+</span>
    </div>
</template>
<script>
export default {
    props: ["type", "num", "id"],
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
</style>