<template>
  <div class="wrapper">
    <header>
      <span @click="componentId = 'myClassify'">分类</span>
      <span @click="componentId = 'myBrand'">品牌</span>
    </header>
    <section>
        <!-- <my-classify></my-classify> -->
        <!-- <my-brand></my-brand> -->
        <keep-alive include="myClassify">
          <component :is="componentId"></component>
        </keep-alive>
    </section>
  </div>
</template>
<script>
import myClassify from './components/classify';
import myBrand from './components/brand';
export default {
    props: {},
    components: {
        myClassify,
        myBrand
    },
    data() {
        return {
          componentId:'myClassify'
        };
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
header{
  height: 44px;
  width: 100%;
  display: flex;

}
header span{
  flex: 1;
  line-height: 44px;
  text-align: center;
}
header span.active{
  color: red;
}
</style>