<template>
  <div>
    <button @click="isShow = !isShow">点击</button>
    <transition>
      <div class="box" v-show="isShow"></div>
    </transition>

    <transition name="b" 
    enter-active-class="animated swing" 
    leave-active-class="animated bounceOutRight">
      <div class="box" v-show="isShow"></div>
    </transition>

    <transition name="a">
      <div class="box" v-show="isShow"></div>
    </transition>
  </div>
</template>
<script>
import "./css/animate.css";
export default {
    props: {},
    components: {},
    data() {
        return {
            isShow: false
        };
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
.box {
    height: 200px;
    width: 200px;
    background: red;
}

.v-enter,
.v-leave-to {
    opacity: 0;
    transform: rotate(0);
}
.v-enter-active,
.v-leave-active {
    transition: all 2s;
}
.v-enter-to,
.v-leave {
    opacity: 1;
    transform: rotate(360deg);
}

.a-enter,
.a-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
.a-enter-active,
.a-leave-active {
    transition: all 2s;
}
.a-enter-to,
.a-leave {
    opacity: 1;
    transform: translateX(0);
}
</style>